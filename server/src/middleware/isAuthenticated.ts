import jwt from "jsonwebtoken";

const isAuthenticated = (req, res, next) => {
  const token = req.headers["authorization"];

  if (!token) {
    return res.status(401).json({
      message: "Access denied. No token provided.",
    });
  }

  try {
    const onlyToken = token.split(" ")[1];
    const decoded = jwt.verify(onlyToken, process.env.SECRET);
    req.user = decoded;
    return next();
  } catch (error) {
    return res.status(401).json({
      message: "Invalid token.",
    });
  }
};
export default isAuthenticated;
