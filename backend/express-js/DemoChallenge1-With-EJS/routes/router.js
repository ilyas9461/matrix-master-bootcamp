const express = require('express');
const router = express.Router();


const pageRoutes = require('./page-routes');
const controllerRoutes = require('./controller-routes');

router.use(pageRoutes);         // Handles page navigation
router.use(controllerRoutes);   // Handles business logic

module.exports = router;