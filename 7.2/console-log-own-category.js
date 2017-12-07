// This demonstrates GatewayScript (ECMA) use of console to make log entries with specified category.
// Author: Steve Edwards, Escala Ltd.
// Date  : 2014-10-02.
// Note  : this code is for demonstration purposes only, not production - level.
// Uses new feature of 7.2 to allow logging categories other than the default 'gatewayscript-user'

// Taken from IBM knowledgecenter
//    http://www-01.ibm.com/support/knowledgecenter/SS9H2Y_7.2.0/com.ibm.dp.doc/console_js.html

// Service variable module:
var sm = require ('service-metadata');
// Read the client-service-address as a string using the URL notation
// result is of form: 
var domain = sm.getVar ('var://service/domain-name');
var service = sm.getVar ('var://service/processor-name');
var tx_client = sm.getVar ('var://service/transaction-client');

// Now make log entries using built-in category 'wsrr'
console.options({'category':'wsrr'}).error('This will be in any log the has registered to pick up the event wsrr');
console.options({'category':'wsrr'}).critical("Domain: " + domain + ", service: " + service + ", tx-client: " + tx_client);

session.output.write("Output may be seen in System Log and any log target that is looking for event/category 'wsrr'");

// For outputting to other logs see:
//     logtarget 'gatewayscript-log'
// which outputs to:
//     log file: logtemp://gatewayscript-log
// where the log output to this is of form:
/*
Fri Oct 02 2015 16:42:35 [0x8580005c][wsrr][error] mpgw(GatewayScript-Explore-MPGW): tid(224720)[request][192.168.1.101] gtid(224720): This will be in any log the has registered to pick up the event wsrr
Fri Oct 02 2015 16:42:35 [0x8580005c][wsrr][critic] mpgw(GatewayScript-Explore-MPGW): tid(224720)[request][192.168.1.101] gtid(224720): Domain: GatewayScript-Examples, service: GatewayScript-Explore-MPGW, tx-client: 192.168.1.101
*/
