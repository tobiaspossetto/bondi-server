"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiAuth = exports.isAuth = void 0;
exports.isAuth = (req, res, next) => {
    if (req.isAuthenticated()) {
        // @ts-ignore
        // console.log(req.user)
        return next();
    }
    else {
        res.redirect('/signin');
    }
};
function apiAuth(req, res, next) {
    // @ts-ignore
    if (req.session.nombre) {
        next();
    }
    else {
        res.status(401).json({ error: 'no autorizado!' });
    }
}
exports.apiAuth = apiAuth;
