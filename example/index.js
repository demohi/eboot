/**
 * Created by mdemo on 14/11/3.
 */
var express = require('express');
var eboot = require('..');

var app = express();

eboot(app, '/example/routers');

app.listen(3000);