const jwt = require("jsonwebtoken");

function checkAuth(req, res, next) {
 try {
  // the token is usually placed in the header and it usually has a format of Bearer- eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9 so we want to split it. REmove the Bearer and get the token so that we can validate if the token is correct
  const token = req.headers.authorization.split(" ")[1];
  const decodedToken = jwt.verify(token, process.env.JWT_KEY);
  req.userData = decodedToken;
  next();
 } catch (error) {
  return res.status(401).json({
   message: "Invalid or expired token",
   error,
  });
 }
}

module.exports = { checkAuth };
