'use strict';

const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
chai.should();
const shokuhinDb = require('../index');

describe('shokuhin-db', function(){
    describe('getNutrition', function(){
        it('should return array of food when the food name is ハンバーグ.', function() {
            return shokuhinDb.getNutrition('ハンバーグ').should.eventually.deep.equal([{"food_id":18013,"food_name":"ハンバーグ　冷凍　　　","calorie":223,"carb":12.3,"protein":13.3,"fat":13.4}]);
        });
        it('should return empty array when the food name is unknown.', function() {
            return shokuhinDb.getNutrition('誰も知らない食品').should.eventually.deep.equal([]);
        });
        it('should reject when food name is not given.', function() {
            return shokuhinDb.getNutrition().should.be.rejected;
        });
    });
});
