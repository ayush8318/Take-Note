 
const jwt = require("jsonwebtoken");
const JWT_SECRET = "ayushisgoodb$oy";

const fetchUser = (req, res, next) => {
  // get the user from the authtoken and add it to the req object
  const token = req.header("auth-token");  //auth-token this name same as we write in header in thunder client in getuser.
  if (!token) {
    return res.status(401).send({ error: "Please authenticate using a valid token" });
  }

  try 
  {

    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded.user.id; // Use decoded.user.id as the user ID
    next();
  } catch (error) {
    res.status(401).send({ error: "Please authenticate using a valid token" });
  }
};

module.exports = fetchUser;
