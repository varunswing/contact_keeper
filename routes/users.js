const express = require('express');
const router = express.Router();

// @route      POST api/auth
// @desc       Register a user
// @access     Private
router.post('/', (req, res) => {
    res.send('Register a user');
});

module.exports = router;