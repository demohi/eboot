/**
 * Created by mdemo on 14/11/3.
 */
var express = require('express');
var eboot = require('..');

var app = express();

app.use(eboot(app));

app.listen(3000);