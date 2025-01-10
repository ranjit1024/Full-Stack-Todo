const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const { User } = require("./db/index.js");
dotenv.config({ path: ".env" });
const JWT_SECRET = process.env.JWT_SECRET;



const authMiddlware = async (req, res, next) => {

    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer')) {
        console.log("Error")
        return res.status(403).json({});
    }

    const token = authHeader.split(" ")[1];


    try {
        const decode = jwt.verify(token, JWT_SECRET);
        req.userId = decode.userId;

        res.setHeader('Access-Control-Allow-Origin', 'https://full-stack-todo-eta.vercel.app/'); // Replace with your client domain

        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');

        res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');


        next()
    }

    catch (err) {
        return res.status(401).json({
            message: "not valid",
            err
        })
    }


}
module.exports = {
    authMiddlware
}