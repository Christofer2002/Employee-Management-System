import express from "express";
import { promisify } from "util";
import connection from "../utils/db.js";
import jwt from "jsonwebtoken";

const router = express.Router();
const query = promisify(connection.query).bind(connection);

router.post("/admin", async (req, res) => {
  const { email, password } = req.body;
  const sql = "SELECT * FROM admin WHERE email = ? AND password = ?";

  try {
    const results = await query(sql, [email, password]);

    if (results.length > 0) {
      const admin = results[0];
      const token = jwt.sign({ role: "admin", email: admin.email, id: admin.id }, "jwt_secret_key", {
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

export { router as adminRouter };
