/**
 * Created by mdemo on 14/11/3.
 */

var express = require('express');
var router = express.Router();
router.get('/', function(req, res){
    res.send('hello cart');
});

module.exports = router;