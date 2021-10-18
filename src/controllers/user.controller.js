const express = require('express');

const {body,validationResult} = require('express-validator')
const User = require("../models/user.model")
const router = express.Router();

router.post("/",
    body("id").isLength({min:1}).withMessage("id is required"),
    body("first_name").isLength({min:1}).withMessage("first name is required"),
    body("last_name").isLength({min:1}).withMessage("last name is required"),
    body("email").isEmail().withMessage("email is required and must be a valid email"),
    body("pincode").isLength({min:6}).withMessage("pincode is required and must be of six digit"),
    body("gender").isLength({min:3}).withMessage("gender is required and must be of atleast three digit"),
    body("age").isLength({min:1}).withMessage("age is required"),
      async(req,res)=>{
         const errors = validationResult(req);
         if(!errors.isEmpty()){
             return res.status(400).json({data:errors.array()})
         }
    const user = await User.create(req.body);
    res.status(201).json({data:user});
})

module.exports = router;