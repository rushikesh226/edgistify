import users from "../Models/user.js";
import { comparePassword, hashPass } from "../Utils/authUtils.js";
import jwt from "jsonwebtoken";

export const registerController = async (req, res) => {
  try {
    const { name, email, password, phone, address } = req.body;
    if (!name) {
      return res.send({ error: "Name is required" });
    }
    if (!email) {
      return res.send({ error: "Email is required" });
    }
    if (!password) {
      return res.send({ error: "Password is required" });
    }
    if (!phone) {
      return res.send({ error: "Password is required" });
    }
    if (!address) {
      return res.send({ error: "Password is required" });
    }
    const existingUser = await users.findOne({ email });
    if (existingUser) {
      return res.status(200).send({
        success: true,
        message: "Already Registered, Please Login",
      });
    }
    const hashedPassword = await hashPass(password);

    const user = await new users({
      name,
      email,
      password: hashedPassword,
      phone,
      address,
      role,
    }).save();

    res.status(201).send({
      success: true,
      message: "User Registered successfully",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in registration",
      error,
    });
  }
};

export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(404).send({
        success: false,
        message: "Invalid email or password",
      });
    }

    const existingUser = await users.findOne({ email });
    if (!existingUser) {
      return res.status(200).send({
        success: true,
        message: "Already Registered, Please Login",
      });
    }

    const user = await users.findOne({ email });
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "Email is not registered",
      });
    }
    const match = await comparePassword(password, user.password);
    if (!match) {
      return res.status(200).send({
        status: false,
        message: "Invalid Password",
      });
    }
    const token = await jwt.sign({ __id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "2d",
    });
    res.status(200).send({
      success: true,
      message: "Login Successful",
      user: {
        name: user.name,
        email: user.email,
      },
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in login",
      error,
    });
  }
};

export const testController = (req, res) => {
  res.send("Protected Route");
};
