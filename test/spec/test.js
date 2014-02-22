(function() {
  'use strict';

  var pf = new Pathfinder();

  describe('Pathfinder object', function () {
    describe('Constructor', function() {

      it('should return Pathfinder object', function () {
        pf.should.be.an.instanceof(Pathfinder); 
      });

      it('should have a path property', function () {
        pf.should.have.property('path');
      });

      it('path property should be an Array', function () {
        pf.path.should.be.an('array');
      });

    });

    describe('main methods', function() {

      it('should return the reversed directions', function() {
        pf.reverseDirection('LEFT').should.equal('RIGHT');
        pf.reverseDirection('RIGHT').should.equal('LEFT');
        pf.reverseDirection('UP').should.equal('DOWN');
        pf.reverseDirection('DOWN').should.equal('UP');
      });

      it('should return the same path', function() {
        pf.push('LEFT')
          .push('RIGHT')
          .push('UP')
          .push('DOWN')
          .getPath()
        .should.eql(['LEFT', 'RIGHT', 'UP', 'DOWN']);
      });

      it('should return the path reversed', function() {
        pf.getReturnPath()
          .should.eql(['UP', 'DOWN', 'LEFT', 'RIGHT']);
      });
        
    });
  });

})();

