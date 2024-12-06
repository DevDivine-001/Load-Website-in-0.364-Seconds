// import mongoose from "mongoose";

// export const UserSchema = new mongoose.Schema({
//     username: {
//         type: String,
//         required: [true, 'Please provide unique Username'],
//         unique: [true, 'Username Exist']
//     },
//     email: {
//         type: String,
//         required: [true, 'Please provide unique email'],
//         unique: false,
//     },
//     password: {
//         type: String,
//         required: [true, 'Please provide unique password'],
//         unique: false,
//     },

//     firstName: { type: String },
//     lastName: { type: String },
//     mobile: { type: Number },
//     address: { type: String },
//     profile: { type: String },

// })

// export default mongoose.model.Users || mongoose.model('User', UserSchema)


// import mongoose from "mongoose";

// export const UserSchema = new mongoose.Schema({
//     username: {
//         type: String,
//         require: [true, 'Please provide a unique username'],
//         unique: [true, 'Username already exists']
//     },
//     email: {
//         type: String,
//         require: [true, 'Please provide a unique email'],
//         unique: true // Set to true if emails should be unique
//     },
//     password: {
//         type: String,
//         require: [true, 'Please provide a password']
//     },
//     firstName: { type: String },
//     lastName: { type: String },
//     mobile: { type: Number },
//     address: { type: String },
//     profile: { type: String },
// }, { timestamps: true });

// // export default mongoose.models.User || mongoose.model('User', UserSchema);

// export const User = mongoose.model('user', UserSchema)

// import mongoose from 'mongoose';

// export const UserSchema = new mongoose.Schema({
//     username: {
//         type: String,
//         required: [true, 'Please provide unique Username'],
//         unique: [true, 'Username exists']
//     },
//     email: {
//         type: String,
//         required: [true, 'Please provide unique email'],
//         unique: true,
//     },
//     password: {
//         type: String,
//         required: [true, 'Please provide a password'],
//     },
//     firstName: {
//         type: String,
//         required: [true, 'First Name is required']
//     },
//     lastName: {
//         type: String,
//         required: [true, 'Last Name is required']
//     },
//     profile: {
//         type: String
//     },
//     mobile: {
//         type: Number
//     },
//     address: {
//         type: String
//     }
// });


// export default mongoose.model('User', UserSchema);


// import mongoose from "mongoose";

// // Username
// // F Name
// // L Name
// // Password

// export const userSchema = new mongoose.Schema({
//     UserName: {
//         type: String,
//         require: true,
//         unique: true,
//     },
//     FirstName: {
//         type: String,
//         require: true,
//         unique: true,
//     },
//     LastName: {
//         type: String,
//         require: true,
//         unique: true,
//     },
//     email: {
//         type: String,
//         required: true,
//         unique: true,
//         lowercase: true,

//         match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email address'],
//         validate: {
//             validator: function (value) {
//                 const fakeDomains = ["tempmail.com", "10minutemail.com", "mailinator.com"];
//                 const domain = value.split('@')[1];
//                 return !fakeDomains.includes(domain);
//             },
//             message: "Please use a real email address, not a disposable one."
//         }

//     },
//     Password: {
//         type: String,
//         require: true
//     }

// }, { timestamps: true })

// export const User = mongoose.model('user', userSchema)