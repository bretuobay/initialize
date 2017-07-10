
var assert = require('assert');

var  Initializer = require('../lib').Initializer;

describe('Initializes names', function() {

  describe('#Initialize Module',function(){

    describe('#Initial test for initialize',function(){
      it('should print infor about module', function(){
        var retInit = Initializer.initialize('Festus Yeboah');
         assert.equal(retInit, 'FY', 'is the initials');
      });

      it('should print infor about module', function(){
        var retInit = Initializer.initialize('Festus Yeboah Dr. PhD.');
         assert.equal(retInit, 'FY', 'is the initials');
      });

      it('should print infor about module', function(){
        var retInit = Initializer.initialize('Dr. MBA. Festus Yeboah');
         assert.equal(retInit, 'FY', 'is the initials');
      });


      it('should print infor about module', function(){
          var retInit = Initializer.initialize('Prof. Dr. MBA. Festus Yeboah');
          assert.equal(retInit, 'FY', 'is the initials');
      });

    });
});
});
