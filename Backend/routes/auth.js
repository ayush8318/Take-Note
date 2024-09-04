const express =require('express');
const User = require('../modules/User');
const router = express.Router();
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");
var fetchUser = require("../middleware/fetchUser");
const JWT_SECRET = "ayushisgoodb$oy";
// basic end point ,creating user using post,"/api/auth/"
// router.post('/',
// [body("name").isLength({ min: 3 }),
// body("email").isEmail().withMessage("Not a valid e-mail address"),
// body("password").isLength({ min: 5 }),
// ],(req,res)=> 
// {
  // const errors = validationResult(req);
  // if (!errors.isEmpty()) {
  //   return res.status(400).json({ errors: errors.array() });
  // }
//   const user=User(req.body);//creating user 
//   user.save();//now we are saving data on mongodb
//   res.send(req.body);
 
// })

//  Rote 1:creating user using post:No login required
router.post( "/createuser",[body("name").isLength({ min: 3 }),
body("email").isEmail().withMessage("Not a valid e-mail address"),
    body("password").isLength({ min: 5 }),
  ],
  async (req, res) => {
    let success=false;
    // Validation errors
    // if there are error then send the bad request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({success, errors: errors.array() });
    }
    // check whether the user with this email exist already
    try {
      let user = await User.findOne({ email: req.body.email });

      if (user) {
        return res.status(400).json({success, error: "email already exit" });
      }
      const salt = await bcrypt.genSalt(10);
      const Secpassword = await bcrypt.hash(req.body.password, salt);
      // console.log('Stored  Sec hashed password:', Secpassword);

      // create a new user
      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: Secpassword,
      });
      // .then(user=>res.json(user))
      // .catch(err=>{console.log(err)
      //     res.json({error:'please enter a unique value for email'})})

      // res.json(user);//in place of this we send the token
      const data = {
        user: {
          id: user.id,// this id is taken from mongo db  
        },
      };
      const authtoken = jwt.sign(data, JWT_SECRET);
      success=true;
      res.json({success, authtoken });
     
    } catch (error) {
      //catch error
      console.log(error.message);
      res.status(500).send("internal server error");
    }
  }
);
// Rote 2: authenticate a user :creating /login endpoint:No login required
router.post(
  "/login",
  [
    body("email").isEmail().withMessage("Not a valid e-mail address"),
    body("password").exists().withMessage("password cannot be blank"),
  ],
  async (req, res) => {
    // if there are error then send the bad request
    let success=false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;
    try {
      let us = await User.findOne({ email });
      if (!us) {
        success=false;
        return res
          .status(400)
          .json({ error: "please try to  login with correct  email" });
      }
      const passwordcompare = await bcrypt.compare(password, us.password);

      // console.log('Stored hashed password:', us.password);
      // console.log('Entered password:', password);
      // console.log('Password comparison result:', passwordcompare);

      if (!passwordcompare) {
        success=false;
        return res
          .status(400)
          .json({ success,error: "please try to login  with correct password" });
      }

      const data = {
        user: {
          id: us.id,
        },
      };
      // sending authtoken and with this token we are sending the id 
      const authtoken = jwt.sign(data, JWT_SECRET);
      success=true;
      res.json({success, authtoken });

    } catch (error) {
      console.log(error.message);
      res.status(500).send("internal server error");
    }
  }
);

// Route 3:Get logedin user details using: post-/api/auth/getuser:login required
router.post(
  "/getuser",
  fetchUser, 
  async (req, res) => {
    try {
      const userId =req.user;
      //  we are receiving the user id from route 2 with authtoken now we have to extract this id from authtoken for this we use middle ware i.e.fetchuser 
      //we select everything from the user id except password
      const user = await User.findById(userId).select("-password");
    res.send(user);
    } catch (error) {
      console.log(error.message);
      res.status(500).send("internal server error");
    }
  }
);

module.exports = router;
