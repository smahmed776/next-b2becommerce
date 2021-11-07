import dbConnect from "../../../../server/db/dbconnect";
import Marchent from "../../../../server/Schemas/Marchent";
import Customer from "../../../../server/Schemas/Customer";
import bcrypt from "bcrypt";
import vendorprofile from "../../../../server/Schemas/vendorprofile";

export default async function handler(req, res) {
  await dbConnect();
  if (req.method === "POST") {
    const authHeader = req.headers["authorization"];
    const user_type = authHeader;
    if (user_type === "Marchent") {
      const {
        firstName,
        lastName,
        email,
        username,
        password,
        phone,
        companyName,
        businessType,
        country,
      } = req.body;

      if (
        firstName &&
        lastName &&
        email &&
        username &&
        password &&
        phone &&
        companyName &&
        businessType &&
        country
      ) {
        let errors = [];
        if (await Marchent.findOne({ email })) {
          errors.push("Email already taken!");
        }
        if (await Marchent.findOne({ username })) {
          errors.push("Username not available!");
        }
        if (await Marchent.findOne({ phone })) {
          errors.push("Phone number already in use!");
        }
        if (errors.length > 0) {
          return res.status(403).json({ errors });
        }
        try {
          const hashPass = await bcrypt.hash(password, 12);
          const marchent = await new Marchent({
            name: {
              firstName: firstName,
              lastName: lastName,
            },
            email,
            username,
            password: hashPass,
            phone,
            companyName,
            businessType: businessType,
            country,
          });
          await marchent.save();
          const marchentId = await Marchent.find({username: username}); 
          const createVendorprofile = await new vendorprofile({
            vendorId: marchentId[0]._id,
            username,
            companyName
          })
          await createVendorprofile.save();
  
          res.status(200).json({ message: "Account created successfully" });
        } catch (error) {
          await Marchent.findOneAndDelete({username: username})
          res.status(400).json({error, message: "Couldnot create account"})
        }
      } else {
        return res.status(404).json({ message: "Missing informations!" });
      }
    } else if (user_type === "customer") {
      try {
        const { firstName, lastName, email, password, phone, country } =
          req.body;

        if (firstName && lastName && email && password && phone && country) {
          let errors = [];
          if (await Customer.findOne({ email })) {
            errors.push("Email already taken!");
          }
          if (await Customer.findOne({ phone })) {
            errors.push("Phone number already used!");
          }
          if (errors.length > 0) {
            return res.status(403).json({ errors });
          }
          const hashPass = await bcrypt.hash(password, 12);
          const customer = await new Customer({
            name: {
              firstName: firstName,
              lastName: lastName,
            },
            email,
            password: hashPass,
            phone,
            country,
          });
          customer.save();
          res.status(200).json({ message: "Account Created Successfully." });
        } else {
          return res.status(404).json({ message: "Missing informations!" });
        }
      } catch (error) {
        console.log(error);
      }
    } else if (user_type === "oauth") {
      const { name, email, image } = req.body;
      // check if user already registered..
      const user_exist = await Customer.findOne({ email: email });
      if (user_exist) {
        res.status = 403;
        res.setHeader("Location", "/");
        res.end();
      }
      const createUser = await new Customer({
        name: {
          firstName: name.split(" ")[0],
          lastName: name.split(" ")[1],
        },
        email,
        image: image,
      });
      createUser.save();
      res.status = 200;
      res.end();
    } else {
      res.status(400).json({ message: "Invalid user type" });
    }
  } else {
    res.status(200).json({ message: "Invalid method" });
  }
}
