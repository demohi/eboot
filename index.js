/**
 * Created by mdemo on 14/11/3.
 */
var rd = require('rd');
var path = require('path');
var strip = require('strip-path');

var eboot = function(app, dir){
    return function(req, res, next){
        var routers = dir || 'routers';
        var dirs = rd.readDirSync(path.join(__dirname , routers));
        dirs.forEach(function(dir){
            var base = '/' +strip(dir,routers);
            app.use(base, require('./' + path.join(routers, base)));
        });
        next();
    }
};

module.exports = eboot;


