Gotta Love GatewayScript and V7
https://www.ibm.com/developerworks/community/forums/html/topic?id=0eb577f8-5824-4725-b3f6-baca4bd9a745
Examples:
Stylesheet Parameters
String Find and Replace

var targetString = session.parameters.targetString;


GatewayScript with timers in v7.1.0 firmware
https://www.ibm.com/developerworks/community/blogs/HermannSW/entry/gatewayscript_with_timers_in_v7_1_0_firmware?lang=en

timeOut / delay

/*global session, clearTimeout, setTimeout*/  //JSLinted, http://jslint.com
session.input.readAsJSON(function (error, jsonObj) {
    'use strict';
    if (error) {
        session.reject("Unexpected error in readAsJSON(): " + error);
        return;
    }

    var i = 0, ticket2;

    setTimeout(function () {
        i += 1;
        clearTimeout(ticket2);
    }, jsonObj.ms1);

    ticket2 = setTimeout(function () {
        i += 1;
        session.output.write('timer2 is not canceled! ' + i);
    }, jsonObj.ms2);

    session.output.write(i);
});

Following used in In SOAP-Mock-MPGW:

// This demonstrates GatewayScript (ECMA) to make delay.
// Author: Steve Edwards, Escala Ltd.
// Date  : 2017-02-27.
// Note  : this code is for demonstration purposes only, not production - level.

// Taken from
//    https://www.ibm.com/developerworks/community/blogs/HermannSW/entry/gatewayscript_with_timers_in_v7_1_0_firmware?lang=en

// Parameter in action definition
var delayMs = session.parameters.delayMs;
var logMsg = "SOAP-Mock-MPGW_delay.js__delayMs = " + delayMs;

setTimeout(function () {
	console.options({'category':'wsrr'}).critical(logMsg);
}, parseInt(delayMs));

session.output.write("End");
-
