import jwt from "jsonwebtoken";

export function validateToken(req, res, next) {
  const bearer = req.headers.authorization;
  if (!bearer || bearer.split(" ")[0] !== "Bearer") {
    return res.status(401).json({ message: "Unauthorized" });
  }
  const token = bearer.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  // add user id to request
  req.user = jwt.verify(token, process.env.JWT_SECRET_KEY);

  next();
}
