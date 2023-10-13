const router = require("express").Router();
const User = require("../models/user");
const bcrypt = require("bcrypt");
const { route } = require("./auth");
const Post = require("../models/post");

//GET API
router.get("/:id", async (req, res) => {
  try {
    //findOne or findMany for username,email
    const user = await User.findById(req.params.id);
    const { password, ...others } = user._doc;
    res.status(200).json(others);
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE API
router.put("/:id", async (req, res) => {
  //params is payload passing in body
  //userID in postman for json format
  if (req.body.userId === req.params.id) {
    if (req.body.password) {
      //password need to encrypt by using bcrypt
      const salt = await bcrypt.genSalt(10);
      req.body.password = await bcrypt.hash(req.body.password, salt);
    }
    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedUser);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(401).json("You can update only your account");
  }
});

//DELETE API
router.delete("/:id", async (req, res) => {
  if (req.body.userId === req.params.id) {
    try {
      const user = await User.findById(req.params.id);
      try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("User Has been Deleted");
      } catch (err) {
        res.status(500).json(err);
      }
    } catch (err) {
      res.status(404).json("user not found");
    }
  } else {
    res.status(401).json("You can delete only your account");
  }
});

module.exports = router;
