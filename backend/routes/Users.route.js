const express = require("express");
let router = express.Router();
const expressAsyncHandler = require("express-async-handler");
const User = require("../models/User.model");
const generateToken = require("../utils");

router
  .route("/")
  .get(
    expressAsyncHandler(async (req, res) => {
      const users = await User.find({});
      res.send(users);
    })
  )
  .post(
    expressAsyncHandler(async (req, res) => {
      const newUser = new User(req.body);
      const savedUser = await newUser.save();
      res.send(savedUser);
    })
  );

router.route("/:id").delete(
  expressAsyncHandler(async (req, res) => {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    res.send(deletedUser);
  })
);

router.route("/signin").post(
  expressAsyncHandler(async (req, res) => {
    const signinUser = await User.findOne({
      email: req.body.email,
      password: req.body.password,
    });
    console.log(signinUser);
    if (!signinUser) {
      res.status(401).send({ message: "Invalid Email or Password" });
    } else {
      res.send({
        _id: signinUser._id,
        name: signinUser.name,
        email: signinUser.email,
        isAdmin: signinUser.isAdmin,
        token: generateToken(signinUser),
      });
    }
  })
);

module.exports = router;
