"use strict";

var DiscoveryV1 = require("watson-developer-cloud/discovery/v1");

var discovery = new DiscoveryV1({
  username: process.env.WATSON_USERNAME,
  password: process.env.WATSON_PASSWORD,
  version_date: DiscoveryV1.VERSION_DATE_2017_04_27
});

exports.runQuery = (queryText, callback) => {
  discovery.query(
    {
      environment_id: process.env.ENVIRONMENT_ID,
      collection_id: process.env.COLLECTION_ID,
      query: queryText
    },
    function(err, response) {
      if (err) {
        console.error(err);
      } else {
        callback(response);
      }
    }
  );
};
