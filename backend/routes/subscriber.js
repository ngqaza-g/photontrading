const express = require('express');
const router = express.Router();

const newSubscriber=require('../controllers/subscriberController');

router.route('/subscribe').post(newSubscriber);

module.exports = router;
