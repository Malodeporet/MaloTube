import jwt from "jsonwebtoken";
import { createError } from "./error.js";

// middleware
export const verifyToken = (req, res, next) => {
    const token = req.cookies.access_token
    if (!token) return next(createError(401, "You are not authenticated!"));

    // on vérifie le token au cas ou il ne serait plus valide
    jwt.verify(token, process.env.JWT, (err, user) => {
        if (err) return next(createError(403, "Token is not valid!"));
        req.user = user;
        next();
        // après la vérification on continue là où on s'est arrêté
    })
};