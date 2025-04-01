const express = require('express');
const router = express.Router();

// Allows using separate route files for different destinations and merging them into a single file.
const pageRoutes = require('./page-routes');
const controllerRoutes = require('./controller-routes');

router.use(pageRoutes);         // Handles page navigation
router.use(controllerRoutes);   // Handles business logic

module.exports = router;