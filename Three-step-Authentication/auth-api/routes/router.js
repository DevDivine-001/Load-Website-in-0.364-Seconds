// // import { Router } from "express";
// import express from "express"

// import * as controller from "../controllers/appController.js"
// import Auth, { localVariables } from "../Middleware/auth.js"

// const router = express.Router()

// router.route('/register').post(controller.register)
// // router.route('/registerMail').post()
// router.route('/authenticate').post((req, res) => res.end())
// router.route('/login').post(controller.verifyUser, controller.login)

// router.route('/user/:username').get(controller.getUser)
// router.route('/generateOTP').get(controller.verifyUser, localVariables, controller.generateOTP)
// router.route('/verifyOTP').get(controller.verifyOTP)
// router.route('/createResetSession').get(controller.createResetSession)


// router.route('/updateUser').put(Auth, controller.updateUser)
// router.route('/resetPassword').put(controller.resetPassword)


// export default router