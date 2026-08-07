// Example Controller: controllers/adminController.js

const logout = async (req, res) => {
  try {
    // Clear the authentication cookie
    // Replace "token" with the exact name of your auth cookie (e.g., "jwt", "session_id")
    res.clearCookie("token", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", // Must be true in production (HTTPS)
      sameSite: process.env.NODE_ENV === "production" ? "none" : "lax", // Adjust based on cross-origin setup
      path: "/", // Ensure this matches the path used when the cookie was created
    });

    return res.status(200).json({
      success: true,
      message: "Logged out successfully",
    });
  } catch (error) {
    console.error("Logout Error:", error);
    return res.status(500).json({
      success: false,
      message: "An error occurred during logout",
    });
  }
};

export default logout;
