(function() {
  'use strict';

  var 
  pf = new Pathfinder(),
  dir = {
    L: 'LEFT',
    R: 'RIGHT',
    U: 'UP',
    D: 'DOWN'
  },
  paths = [
    [ dir.L, dir.R, dir.U, dir.D ],
    [ ],
    [ ],
  ];
  

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
      it('should return the same path', function() {
        pf.push(dir.L)
          .push(dir.R)
          .push(dir.U)
          .push(dir.D).getPath()
        .should.eql(['LEFT', 'RIGHT', 'UP', 'DOWN']);
      });
      it('should return the path reversed', function() {
        pf.getReturnPath()
          .should.eql(['UP', 'DOWN', 'LEFT', 'RIGHT']);
      });
    });

  });

})();

