const express = require('express');
const router = express.Router();
const {
    getAllBillet,
    createBillet,
    getSingleBillet,
    updateBillet,
    deleteBillet
} = require('../controller/BilletController');

router.route('/api/billets').get(getAllBillet).post();
router.route('/api/billet/:id').get(getSingleBillet).put(updateBillet).delete(deleteBillet);

module.exports = router;