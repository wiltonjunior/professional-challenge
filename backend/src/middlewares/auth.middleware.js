const jwt = require("jsonwebtoken");
const { get, split } = require("lodash");

// eslint-disable-next-line consistent-return
const auth = (req, res, next) => {
  try {
    const authorization = get(req.headers, "authorization");

    if (!authorization) return res.status(401).send({ auth: false, message: "no token provided" });

    const parts = split(authorization, " ");

    if (!parts.length === 2) return res.status(401).send({ auth: false, message: "token error" });

    const [scheme, token] = parts;

    if (!/Bearer$/i.test(scheme)) {
      return res.status(401).send({ auth: false, message: "token malformatted" });
    }

    if (!token) {
      return res.status(401).send({ auth: false, message: "no token provided" });
    }
    const decoded = jwt.verify(token, process.env.SECRET_KEY);

    req.user = decoded;

    next();
  } catch (error) {
    return res.status(500).send({ auth: false, message: "failed to authenticate token" });
  }
};

module.exports = auth;
