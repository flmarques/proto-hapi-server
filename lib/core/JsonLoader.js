/**
 * Copyright (c) 2015, YourNameHere. All rights reserved.
 *
 * This source code is licensed under the MIT-style license found in the
 * LICENSE file in the root directory of this source tree.
 */
"use strict";
/* global module,require,__filename */
var fs = require('fs'),
    P = require('bluebird'),
    logError = require('./LogError')(__filename);

module.exports = function (jsonFileName) {

    return new P(function (resolve, reject) {
        fs.readFile(jsonFileName, function (readFileErr, data) {
            if (readFileErr) {

                return reject(logError('fs.readFile', readFileErr));
            } else {
                var jsonData;
                try {
                    jsonData = JSON.parse(data);
                } catch (parseError) {

                    return reject(logError('JSON.parse', parseError));
                }
                resolve(jsonData);
            }
        });
    });
};