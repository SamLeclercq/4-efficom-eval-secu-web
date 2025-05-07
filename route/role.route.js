const express = require('express');
const router = express.Router();
const roleController = require('../controller/role.controller.js');
const auth = require('../middleware/auth.middleware.js');

router.get('/',limiter, roleController.getAll);
router.get('/:id',limiter, roleController.getById);

router.post('/',auth,limiter, roleController.create);

router.put('/:id',auth,limiter, roleController.update);
router.delete('/:id',auth, limiter,roleController.remove);



module.exports = router;