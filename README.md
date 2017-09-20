# salesforce-federated-search-watson-discovery

This example application showcases how to incorporate a REST service like IBM Watson Discovery Service with Salesforce Federated Search.

# Prerequisites

For running the app on your own you'll need to fulfill the following requirements:

* Access to a Salesforce org, i. e. a Developer Edition (You can [signup here for free](https://developer.salesforce.com/signup) if you don't have one).
* An IBM Bluemix account with IBM Watson Disovery Service.

# Implementation

## Set up an example IBM Watson Discovery Service

Follow the IBM instructions 1-4 as described [here](https://console.bluemix.net/docs/services/discovery/getting-started-tool.html#getting-started-with-the-tooling).

## Deploy the app to Heroku

The easiest way to test the application on your own is deploying it to [Heroku](https://www.heroku.com) via the Deploy button.

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/muenzpraeger/salesforce-federated-search-watson-discovery)

After the deployment you have to enter the configuration values for the app as following:

* *WATSON_USERNAME* - enter the Watson service username
* *WATSON_PASSWORD* - enter the Watson service password
* *ENVIRONMENT_ID* - enter the environment id of your Discovery service
* *COLLECTION_ID* - enter the collection id of your Discovery service

Wait till the node.js server has started.

You can test if your implementation was successful by opening this URL in your browser:

https://your-custom-hostname.herokuapp.com/ossInterface?interface=op


## Enabled Federated Search

Follow the instructions (section "Setting up federated search") in [this blog post](https://developer.salesforce.com/blogs/isv/2017/08/federated-search-for-salesforce-isvs.html). Replace the OpenSearch Description URL with this URL.

https://your-custom-hostname.herokuapp.com/resources/oss.xml


# License

For licensing see the included [license file](https://github.com/muenzpraeger/salesforce-ibm-workspace-bot/blob/master/LICENSE.md).