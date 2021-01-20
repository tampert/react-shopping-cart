const express = require("express");
let router = express.Router();
const expressAsyncHandler = require("express-async-handler");
const User = require("../models/User.model");
const { generateToken, isAuth } = require("../utils");

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
      if (!savedUser) {
        res.status(401).send({ message: "Invalid Name, Email or Password" });
      } else {
        res.send({
          _id: savedUser._id,
          name: savedUser.name,
          email: savedUser.email,
          password: savedUser.password,
          isAdmin: savedUser.isAdmin,
          token: generateToken(savedUser),
        });
      }
    })
  );

router
  .route("/:id")
  .delete(
    expressAsyncHandler(async (req, res) => {
      const deletedUser = await User.findByIdAndDelete(req.params.id);
      res.send(deletedUser);
    })
  )
  .put(
    isAuth,
    expressAsyncHandler(async (req, res) => {
      const user = await User.findById(req.params.id);
      if (!user) {
        res.status(404).send({ message: "User not found" });
      } else {
        user.name = req.body.name || user.name;
        user.email = req.body.email || user.email;
        user.password = req.body.password || user.password;
        const updateUser = await user.save();
        res.send({
          _id: updateUser._id,
          name: updateUser.name,
          email: updateUser.email,
          password: updateUser.password,
          isAdmin: updateUser.isAdmin,
          token: generateToken(updateUser),
        });
      }
    })
  );

router.route("/signin").post(
  expressAsyncHandler(async (req, res) => {
    const signinUser = await User.findOne({
      email: req.body.email,
      password: req.body.password,
    });
    if (!signinUser) {
      res.status(401).send({ message: "Invalid Email or Password" });
    } else {
      res.send({
        _id: signinUser._id,
        name: signinUser.name,
        email: signinUser.email,
        password: signinUser.password,
        isAdmin: signinUser.isAdmin,
        token: generateToken(signinUser),
      });
    }
  })
);

router.route("/createadmin").get(
  expressAsyncHandler(async (req, res) => {
    try {
      const user = new User({
        name: "admin",
        email: "admin@example.com",
        password: "ecommerce",
        isAdmin: true,
      });
      const createAdminUser = await user.save();
      res.send(createAdminUser);
    } catch (err) {
      res.status(500).send({ message: err.message });
    }
  })
);

module.exports = router;
