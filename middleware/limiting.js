const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,     
  max: 100,                      
  keyGenerator: (req) => {
    return req.user?.id ? String(req.user.id) : req.ip;
  },
  message: {
    status: 429,
    error: 'Nombre de requête max atteint'
  },
  standardHeaders: true,        
  legacyHeaders: false         
});

module.exports = limiter;