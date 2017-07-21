describe('longestRun', function () {

  it('should exist', function () {
    should.exist(longestRun);
  });

  it('should be a function', function () {
    longestRun.should.be.a.Function;
  });

  it('should return an array', function () {
    longestRun('abc').should.be.an.Array;
  });

  it('should return an array with only two elements', function() {
    // the length of the result array should always have exactly two elements.
    // that contain the `start` and `end` indices in the original string.
    longestRun('abc').length.should.be.equal(2);
    longestRun('aabbbc').length.should.be.equal(2);
  });

  it('should return an array with the `start` and `end` index', function() {
    longestRun('abbbcc').should.eql([1, 3]);
    longestRun('aabbc').should.eql([0, 1]);
    longestRun('abcd').should.eql([0, 0]);
  });

  it('should work for long strings', function() {
    // `repeat` returns a string with the `input` string repeated `n` times
    // ie., repeat('v', 3) would return 'vvv'
    var repeat = function (input, n) {
      var output = '';
      for (var i = 0; i < n; i++) {
        output = output + input;
      }
      return output;
    };
    var aaaa = repeat('a', 342);  // repeat `a` 342 times
    var jjjj = repeat('j', 583);  // repeat `j` 583 times
    var zzzz = repeat('z', 1000); // repeat `z` 1000 times
    var input = aaaa + zzzz + jjjj;
    longestRun(input).should.eql([342, 1341]);
  });

  it('should handle the edge-case of an empty string', function() {
    // watch out for edge-cases! There is no longest run of an empty string.
    should.not.exist(longestRun(''));
  });
});
