const router = require('express').Router();
const userRoutes = require('./api/user-routes');
const thoughtRoutes = require('./api/thought-routes');

// add prefix of `/users` to routes created in `user-routes.js`
router.use('/api/users', userRoutes);
router.use('/api/thoughts', thoughtRoutes);
router.use((req, res) => {
    res.status(404).send('<h1>😝 404 Error!</h1>');
})
module.exports = router;