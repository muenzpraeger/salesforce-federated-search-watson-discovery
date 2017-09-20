"use strict";

var request = require("request");
var watson = require("./watsonDiscovery");
var Mustache = require("mustache");
var fs = require("fs");

let mustacheTemplate = "./resources/response.mustache";

exports.processGet = (req, res) => {
  watson.runQuery(req.query.q, function(response) {
    fs.readFile(mustacheTemplate, function(err, data) {
      if (err) throw err;
      var output = Mustache.render(data.toString(), response);
      res
        .header("content-type", "application/xml")
        .status(200)
        .send(output);
    });
  });
};
