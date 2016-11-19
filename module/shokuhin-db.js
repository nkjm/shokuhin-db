'use strict';

const request = require('request');
const Promise = require('bluebird');
const apiBase = 'https://apex.oracle.com/pls/apex/evangelist/shokuhindb';

module.exports = class shokuhinDb {

    static getNutrition(foodName){
        if (typeof foodName != 'string' || foodName == null || foodName.trim() == ''){
            return Promise.reject('foodName not set');
        }
        return new Promise(function(resolve, reject){
            const headers = {
                'Content-Type': 'application/json'
            };
            const url = apiBase + '/food/' + encodeURIComponent(foodName);
            request({
                url: url,
                method: 'GET',
                headers: headers,
                json: true
            }, function (error, response, body) {
                if (error){
                    reject(error);
                    return;
                }
                if (typeof body.items == 'undefined' || response.statusCode != 200){
                    reject({message:'Failed to get nutrition.'});
                    return;
                }
                resolve(body.items);
                return;
            });
        });
    }
};
