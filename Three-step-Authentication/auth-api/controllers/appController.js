// import bcrypt from 'bcrypt';
// import jwt from "jsonwebtoken"
// import ENV from "../config.js"
// import { User } from '../model/UserModel.js';
// import reset from 'nodemon';
// import otpGenerator from "otp-generator"
// import { errors } from 'mongodb-memory-server';

// export async function verifyUser(req, res, next) {
//     try {
//         const { UserName } = req.method == "GET" ? req.query : req.body

//         let exist = await User.findOne({ UserName })
//         if (!exist) return res.status(404).send({ error: "Can't find User!" })
//         next()
//     } catch (error) {
//         return res.status(404).send({ error: "Authentication Error" })
//     }

// }

// export async function register(req, res) {

//     const { UserName, FirstName, LastName, email, Password } = req.body

//     try {
//         if (!UserName || !FirstName || !LastName || !email || !Password) {
//             throw new Error("All fields are require")
//         }
//         const userAlreadyExists = await User.findOne({ UserName });
//         if (userAlreadyExists) {
//             return res.status(400).json({ message: "User already exists" })
//         }
//         const hashedPassword = await bcrypt.hash(Password, 10)
//         const user = new User({ UserName, FirstName, LastName, email, Password: hashedPassword })
//         await user.save()

//         res.status(201).json("User created successfully")
//     } catch (error) {

//         res.status(400).json({ success: false, message: error.message })
//     }
// }

// export async function login(req, res) {
//     try {
//         const { UserName, Password } = req.body;

//         // Check if username exists
//         User.findOne({ UserName })
//             .then(user => {
//                 bcrypt.compare(Password, user.Password)
//                     .then(passwordCheck => {

//                         if (!passwordCheck) return res.status(400).send({ error: "Don't have Password" });

//                         // create jwt token
//                         const token = jwt.sign({
//                             userId: user._id,
//                             UserName: user.UserName
//                         }, ENV.JWT_SECRET, { expiresIn: "24h" });

//                         return res.status(200).send({
//                             msg: "Login Successful...!",
//                             UserName: user.UserName,
//                             token
//                         });

//                     })
//                     .catch(error => {
//                         return res.status(400).send({ error: "Password does not Match", error })
//                     })
//             })
//             .catch(error => {
//                 return res.status(404).send({ error: "Username not Found", error });
//             })

//     } catch (error) {
//         console.error(error);  // Log for debugging
//         return res.status(500).json({ error: "Server error, please try again later" });
//     }
// }

// export async function getUser(req, res) {
//     const { UserName } = req.body
//     try {
//         if (UserName) return res.status(501).send({ error: "Invalid UserName" })
//         User.findOne({ UserName }, function (err, user) {
//             if (err) return res.status(500).send({ err })
//             if (!user) return res.status(501).send({ error: "Couldn't Find the user" })
//             const { Password, ...reset } = Object.assign({}, user.json())
//             return res.status(201).send(reset)
//         })

//     } catch (error) {
//         return res.status(404).send({ error: "Cannot Find User Data" })
//     }

// }


// // export async function getUser(req, res) {
// //     const { UserName } = req.params;

// //     try {
// //         if (!UserName) return res.status(400).send({ error: "UserName is required" });

// //         // Use await for consistent asynchronous handling
// //         const user = await User.findOne({ UserName }).exec();

// //         if (!user) return res.status(404).send({ error: "User not found" });

// //         // Destructure to exclude Password from the response
// //         const { Password, ...rest } = user.toObject();

// //         return res.status(200).send(rest);
// //     } catch (error) {
// //         return res.status(500).send({ error: "Error retrieving user data" });
// //     }
// // }


// export async function updateUser(req, res) {

//     try {
//         // const id = req.query.id

//         const { userId } = req.user

//         if (id) {
//             const body = req.body
//             User.updateOne({ _id: userId }, body, function (err, data) {
//                 if (err) throw err

//                 return res.status(201).send({ msg: "Record Updated" }, data)
//             })

//         } else {
//             return res.status(401).send({ error: "User not found" })


//         }

//     } catch (error) {
//         return res.status(401).send({ error })
//     }

// }

// export async function generateOTP(req, res) {
//     req.app.locals.OTP = await otpGenerator.generate(6, { lowerCaseAlphabets: false, upperCaseAlphabets: false })
//     res.status(201).send({ code: req.app.locals.OTP })

// }

// export async function verifyOTP(req, res) {
//     const { } = req.query
//     if (parseInt(req.app.locals.OTP) === parseInt(code)) {
//         req.app.locals.OTP = null
//         req.app.locals.resetSession = true
//         return res.status(201).send({ msg: " Verify Successfully" })

//     }
//     return res.status(400).send({ error: "Invalid OTP" })
// }

// export async function createResetSession(req, res) {
//     if (req.app.locals.resetSession) {
//         req.app.locals.resetSession = false;
//         return res.status(201).sen({ msg: "access granted" })
//     }
//     return res.status(440).send({ error: "Session expired" })
// }

// export async function resetPassword(req, res) {

//     if (!req.app.locals.resetSession) return res.status(440).send({ errors: "SESSION" })

//     const { UserName, Password } = req.body
//     try {
//         User.findById({ UserName })
//             .then(user => {
//                 bcrypt.hash(Password, 10)
//                     .then(hashedPassword => {
//                         User.updateOne({ UserName: user.UserName }, { Password: hashedPassword })
//                     })
//             }).catch(error => {
//                 return res.status(404).send({ error: "Username not Found", error }, function (err, data) {
//                     if (err) throw err;
//                     return res.status(201).send({ msg: "Record Updated", data })
//                 })
//             })
//     } catch (error) {
//         return res.status(500).send({ error })

//     }
//     return res.status(401).send({ error })
// }