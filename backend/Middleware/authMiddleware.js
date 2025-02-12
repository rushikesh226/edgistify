import jwt from "jsonwebtoken";
import users from "../Models/user.js";
export const requireSignIn = async (req, res, next) => {
  try {
    if (!req.headers.authorization) {
      return res.status(403).send({
        success: false,
        message: "Authorization token is required",
      });
    }
    const decode = jwt.verify(
      req.headers.authorization,
      process.env.JWT_SECRET
    );
    req.user = decode;
    next();
  } catch (error) {
    console.log(error);
    res.status(401).send({
      success: false,
      message: "Invalid or Expired Token",
    });
  }
};

// export const isAdmin = async (req, res, next) => {
//   const user = await users.findById(req.user._id);
//   console.log(user, "in line 28");
//   try {
//     const user = await users.findById(req.user._id);
//     if (!user) {
//       console.log(user.role, "role is");
//       return res.status(404).send({
//         success: false,
//         message: "User not found",
//       });
//     }
//     console.log(user?.role, "role is");

//     if (user.role !== 1) {
//       return res.status(401).send({
//         success: false,
//         message: "Unauthorized Access",
//       });
//     }
//     next();
//   } catch (error) {
//     console.log(error);
//     res.status(401).send({
//       success: false,
//       error,
//       message: "Error in Admin Middleware",
//     });
//   }
// };
