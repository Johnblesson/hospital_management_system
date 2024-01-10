const express = require('express');
const router = express.Router()

const services = require('../services/render');
const controller = require('../controller/controller');
// const ensureAuthenticated = require('../middleware/auth');

/**
 *  @description Root Route
 *  @method GET /
 */
router.get('/', services.homeRoutes);
// router.get('/', services.super_admin);
// router.post('/', services.super_admin);

/**
 *  @description add users
 *  @method GET /add-user
 */

router.get('/add-user', services.add_user)

/**
 *  @description for update user
 *  @method GET /update-user
 */
router.get('/update-user', services.update_user)

// API
router.post('/api/users', controller.create);
router.get('/api/users', controller.find);
router.put('/api/users/:id', controller.update);
router.delete('/api/users/:id', controller.delete);
// router.post('/api/admin/login', controller.login);

// router.get('index', (req, res) => {
//     res.render('index');
// });
// router.get('/', (req, res) => {
//     res.render('superAdmin_login');
// });
module.exports = router