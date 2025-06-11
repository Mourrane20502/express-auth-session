function verifySession(req, res, next) {
  if (!req.session.Email) {
    return res.status(401).json({ message: "Not authorized" });
  }
  next();
}

module.exports = verifySession;
