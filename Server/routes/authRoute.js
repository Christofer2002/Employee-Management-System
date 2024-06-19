import express from "express";
import { promisify } from "util";
import connection from "../utils/db.js";
import jwt from "jsonwebtoken";

const router = express.Router();
const query = promisify(connection.query).bind(connection);

// This route is for the user login
router.post("/user", async (req, res) => {
  const { email, password } = req.body;
  const sql = "SELECT * FROM user WHERE email = ? AND password = ?";

  try {
    const results = await query(sql, [email, password]);

    if (results.length > 0) {
      const user = results[0];
      const token = jwt.sign({ role: user.user_role, email: user.email, id: user.id }, "jwt_secret_key", {
        expiresIn: 3600,
      });

      res.cookie("token", token, { httpOnly: true });
      return res.json({ loginStatus: "success" });
    } else {
      return res.json({
        loginStatus: false,
        error: "Invalid email or password",
      });
    }
  } catch (err) {
    console.error("Error logging in:", err);
    return res.json({ loginStatus: false, error: err });
  }
  
});

router.post("/register", async (req, res) => {
  const { username, email, password, idRole } = req.body;

  // Verify if the email is already registered
  const checkEmailSql = "SELECT * FROM user WHERE email = ?";
  const insertUserSql = "INSERT INTO user (username, email, password, userRole) VALUES (?, ?, ?, ?)";

  try {
    const existingUsers = await query(checkEmailSql, [email]);

    if (existingUsers.length > 0) {
      return res.json({ registerStatus: false, error: "Email is already registered" });
    }

    await query(insertUserSql, [username, email, password, idRole]);
    return res.json({ registerStatus: "success" });
  } catch (err) {
    console.error("Error registering user:", err);
    return res.json({ registerStatus: false, error: err });
  }
});

export { router as authRouter };
