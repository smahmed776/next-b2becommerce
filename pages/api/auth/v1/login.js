import dbConnect from "../../../../server/db/dbconnect";
import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken";
import Marchent from "../../../../server/Schemas/Marchent";
import Customer from "../../../../server/Schemas/Customer";
const JWT_SECRET = "salksfhklaskdjfkshalkjfjlasdlfs"

const jwtToken = (id) => {

    return jwt.sign({ id }, JWT_SECRET)
}


const sendToken = (user, statusCode, req, res) => {
    const token = jwtToken(user._id);
    const options = {
        secure: true,
        httpOnly: false,
        sameSite: "none"
    };

    // res.cookie('jwt', token, options);


    res.status(statusCode).json({
        message: "Logged in!",
        token,
        user,
        
    })
}

export default async function handleLogin(req, res) {
    await dbConnect();
    if (req.method === 'POST') {
        const { email, password, type } = req.body;
        if (email && password && type) {
            if (type === 'marchent') {
                try {
                    const getUser = await Marchent.findOne({ email }).select("+password");
                    if (!getUser) return res.status(400).json({ message: `User doesn't exist!`})
                    const compare = await bcrypt.compare(password, getUser.password);

                    if (compare) {
                        sendToken(getUser, 200, req, res);
                    } else {
                        return res.status(405).json({ message: "Password invalid"})
                    }
                } catch (error) {
                    console.log(error)
                    res.status(400).json({
                        error,
                        message: "internal server error"
                    });

                }
            }

            if (type === 'customer') {
                try {
                    const getUser = await Customer.findOne({ email }).select("+password");
                    if (!getUser) return res.status(400).json({ message: `User doesn't exist!`})
                    const compare = await bcrypt.compare(password, getUser.password);

                    if (compare) {
                        sendToken(getUser, 200, req, res);
                    } else {
                        res.status(405).json({ message: "Password invalid"})
                    }
                } catch (error) {

                    res.status(400).json({
                        error,
                        message: "internal server error"
                    });
                }
            }
        } else {
            return res.status(404).json({ message: "Missing Informations!" })
        }
    } else {
        return res.status(400).json({ message: "Invalid Request Method" })
    }
}