const jwt = require("jsonwebtoken");
const { ACCESS_TOKEN_SECRET } = process.env;

const createAccessToken = (payload) => {
  try {
    // Make sure to pass the ACCESS_TOKEN_SECRET as the second argument
    const accessToken = jwt.sign(payload, ACCESS_TOKEN_SECRET, { expiresIn: "1h" }); // You can set the expiration time as needed
    return accessToken;
  } catch (err) {
    // Handle any potential errors, e.g., invalid payload or secret
    console.error("Error creating access token:", err);
    throw err; // Rethrow the error to be handled by the caller
  }
};

module.exports = {
  createAccessToken,
};
