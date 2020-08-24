// const nodemailer = require("nodemailer");
const functions = require('firebase-functions');
const admin = require('firebase-admin');
// const cors = require("cors")({ origin: true });

// const gmailEmail = functions.config().gmail.login;
// const gmailPassword = functions.config().gmail.pass;

admin.initializeApp();

exports.newUser = functions.auth.user().onCreate((user) => {
  // console.log(user);
  // console.log(user);
  // console.log(user);


  admin.auth().updateUser(user.uid, {
    disabled: true
  });
  // console.log(user);
  // console.log(user);
  // console.log(user);
});

// var goMail = function (message) {

//   //transporter is a way to send your emails
//   const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: gmailEmail,
//       pass: gmailPassword
//     }
//   });

//   // setup email data with unicode symbols
//   //this is how your email are going to look like
//   const mailOptions = {
//     from: gmailEmail, // sender address
//     to: gmailEmail, // list of receivers
//     subject: 'Hello ✔', // Subject line
//     text: '!' + message, // plain text body
//     html: '!' + message // html body
//   };

//   //this is callback function to return status to firebase console
//   const getDeliveryStatus = function (error, info) {
//     if (error) {
//       return// console.log(error);
//     }
//    // console.log('Message sent: %s', info.messageId);
//     // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
//   };

//   //call of this function send an email, and return status
//   transporter.sendMail(mailOptions, getDeliveryStatus);
// };

// //.onDataAdded is watches for changes in database
// exports.onDataAdded = functions.database.ref('/emails/{sessionId}').onCreate(function (snap, context) {

//   //here we catch a new data, added to firebase database, it stored in a snap variable
//   const createdData = snap.val();
//   var text = createdData.mail;

//   //here we send new data using function for sending emails
//   goMail(text);
// });



///////////////////////////////////////////////////

// let transporter = nodemailer.createTransport({
//   host: "smtp.gmail.com",
//   port: 465,
//   secure: true,
//   auth: {
//     user: "firebaseemailtest123@gmail.com",
//     pass: "Testing123!"
//   },
// });

// exports.sendMail = functions.https.onRequest((req, res) => {
//   cors(req, res, () => {
//     // getting dest email by query string
//     const email = req.query.email;
//     const name = req.query.fullName;
//     const message = req.query.message;
//     const mailOptions = {
//       from: "Naishare <firebaseemailtest123@gmail.com>",
//       to: "firebaseemailtest123@gmail.com",
//       subject: "Contact Form Message", // email subject
//       html:
//         `           
// <div>             
// From:` +
//         name +
//         `<br /><br />              
// Email: ` +
//         email +
//         `<br /><br />             
// Message:` +
//         message +
//         `<br /><br />           
// </div>           
// `, // email content in HTML
//     };
//     // returning result
//     return transporter.sendMail(mailOptions, (erro, info) => {
//       if (erro) {
//         return res.send(erro.toString());
//       }
//       return res.send("Message Sent");
//     });
//   });
// });


// Take the text parameter passed to this HTTP endpoint and insert it into 
// Cloud Firestore under the path /messages/:documentId/original
// exports.addMessage = functions.https.onRequest(async (req, res) => {
//   // Grab the text parameter.
//   const original = req.query.text;
//   // Push the new message into Cloud Firestore using the Firebase Admin SDK.
//   const writeResult = await admin.firestore().collection('messages').add({ original: original });
//   // Send back a message that we've succesfully written the message
//   res.json({ result: `Message with ID: ${writeResult.id} added.` });
// });
// // // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

