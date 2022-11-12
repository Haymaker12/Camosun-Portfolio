const jwt = require('jsonwebtoken');
const config = require('config');

// Middleware function is a function that has access to REQUEST and RESPONSE
// cycles. NEXT moves it to the next piece of middleware
module.exports = function(req, res, next) {
    // Get token from headers
    const token = req.header('x-auth-token');

    // Check if no token
    if (!token) {
        // 401 - not authorized
        return res.status(401).json({ msg: 'No token, authorization denied' });
    }

    // Verify token
    try {
        const decoded = jwt.verify(token, config.get('jwtSecret'));
        // req body { "user": ... }
        req.user = decoded.user;
        next();
        
    } catch(err) {
        res.status(401).json({ msg: 'Invalid token, authorization denied' });
    }
};