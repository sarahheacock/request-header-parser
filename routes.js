'use strict';

var express = require("express");
var router = express.Router();

router.get("/", function(req,res,next){
  var ip = req.headers['x-forwarded-for'] ||
     req.connection.remoteAddress ||
     req.socket.remoteAddress ||
     req.connection.socket.remoteAddress;

  var soft = req.headers["user-agent"];
  var start = soft.indexOf('(');
  var stop = soft.indexOf(')') + 1;

  var lang = req.headers["accept-language"].split(',');

  res.json({"ip": ip,
    "language": lang[0],
    "software": soft.slice(start, stop),
  });
});



module.exports = router;
