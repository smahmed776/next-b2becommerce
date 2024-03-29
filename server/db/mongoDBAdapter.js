"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoDBAdapter =
  exports._id =
  exports.format =
  exports.collections =
    void 0;
const mongodb_1 = require("mongodb");
exports.collections = {
  Users: "users",
  Accounts: "accounts",
  Sessions: "sessions",
  VerificationTokens: "verification_tokens",
};
exports.format = {
  /** Takes a mongoDB object and returns a plain old JavaScript object */
  from(object) {
    const newObject = {};
    for (const key in object) {
      const value = object[key];
      if (key === "_id") {
        newObject.id = value.toHexString();
      } else if (key === "userId") {
        newObject[key] = value.toHexString();
      } else {
        newObject[key] = value;
      }
    }
    return newObject;
  },
  /** Takes a plain old JavaScript object and turns it into a mongoDB object */
  to(object) {
    const newObject = {
      _id: _id(object.id),
    };
    for (const key in object) {
      const value = object[key];
      if (key === "userId") {
        newObject[key] = _id(value);
      } else {
        newObject[key] = value;
      }
    }
    return newObject;
  },
};
/** Converts from string to ObjectId */
function _id(hex) {
  if ((hex === null || hex === void 0 ? void 0 : hex.length) !== 24)
    return new mongodb_1.ObjectId();
  return new mongodb_1.ObjectId(hex);
}
exports._id = _id;
function MongoDBAdapter(options) {
  const { db: m } = options;
  const { from, to } = exports.format;
  const { Users, Accounts, Sessions, VerificationTokens } = {
    Users: m.collection(exports.collections.Users),
    Accounts: m.collection(exports.collections.Accounts),
    Sessions: m.collection(exports.collections.Sessions),
    VerificationTokens: m.collection(exports.collections.VerificationTokens),
  };
  return {
    async createUser(data) {
      const user = to(data);
      await Users.insertOne(user);
      return from(user);
    },
    async getUser(id) {
      const user = await Users.findOne({ _id: _id(id) });
      if (!user) return null;
      return from(user);
    },
    async getUserByEmail(email) {
      const user = await Users.findOne({ email });
      if (!user) return null;
      return from(user);
    },
    async getUserByAccount(provider_providerAccountId) {
      const account = await Accounts.findOne(provider_providerAccountId);
      if (!account) return null;
      const user = await Users.findOne({ _id: account.userId });
      if (!user) return null;
      return from(user);
    },
    async updateUser(data) {
      const { value: user } = await Users.findOneAndUpdate(
        { _id: _id(data.id) },
        { $set: data }
      );
      return from(user);
    },
    async deleteUser(id) {
      const userId = _id(id);
      await Promise.all([
        m.collection(exports.collections.Accounts).deleteMany({ userId }),
        m.collection(exports.collections.Sessions).deleteMany({ userId }),
        m.collection(exports.collections.Users).deleteOne({ _id: userId }),
      ]);
    },
    linkAccount: async (data) => {
      const account = to(data);
      await Accounts.insertOne(account);
      return account;

    },
    async unlinkAccount(provider_providerAccountId) {
      const { value: account } = await Accounts.findOneAndDelete(
        provider_providerAccountId
      );
      return from(account);
    },
    async getSessionAndUser(sessionToken) {
      const session = await Sessions.findOne({ sessionToken });
      if (!session) return null;
      const user = await Users.findOne({ _id: session.userId });
      if (!user) return null;
      return {
        user: from(user),
        session: from(session),
      };
    },
    async createSession(data) {
      const session = to(data);
      await Sessions.insertOne(session);
      return from(session);
    },
    async updateSession(data) {
      const { value: session } = await Sessions.findOneAndUpdate(
        { sessionToken: data.sessionToken },
        { $set: data }
      );
      return from(session);
    },
    async deleteSession(sessionToken) {
      const { value: session } = await Sessions.findOneAndDelete({
        sessionToken,
      });
      return from(session);
    },
    async createVerificationToken(data) {
      await VerificationTokens.insertOne(to(data));
      return data;
    },
    async useVerificationToken(identifier_token) {
      const { value: verificationToken } =
        await VerificationTokens.findOneAndDelete(identifier_token);
      if (!verificationToken) return null;
      // @ts-expect-error
      delete verificationToken._id;
      return verificationToken;
    },
  };
}
exports.MongoDBAdapter = MongoDBAdapter;
