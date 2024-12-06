import jwt from "jsonwebtoken"
import ENV from "../config.js"

export default async function Auth(req, res, next) {
    try {
        const token = req.headers.authorization.split(" ")[1]

        //  retrive the user details to the  logged in user 
        const decoded = await jwt.verify(token, ENV.JWT_SECRET)

        res.user = decoded

        res.json(decoded)
        res.json(token)
        next()
    } catch (error) {
        res.status(401).json({ error: "Authentication Failed" })
    }
}

export function localVariables(req, res, next) {
    req.app.locals = {
        OTP: null,
        resetSession: false
    }
    next()
}