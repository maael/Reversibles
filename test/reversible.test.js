var should = require('should')
  , reversible = require('../reversible')

describe('reversible', function () {

  describe('#listReversible()', function() {
    it('should return a list of reversible', function() {
      reversible.listReversible(7).should.eql([])
      reversible.listReversible(12).should.eql([12])
      reversible.listReversible(1000).should.eql([12, 14, 16, 18, 21, 23, 25, 27, 32, 34, 36, 41, 43, 45, 52, 54, 61, 63, 72, 81, 209, 219, 229, 239, 249, 308, 318, 328, 338, 348, 407, 409, 417, 419, 427, 429, 437, 439, 447, 449, 506, 508, 516, 518, 526, 528, 536, 538, 546, 548, 605, 607, 609, 615, 617, 619, 625, 627, 629, 635, 637, 639, 645, 647, 649, 704, 706, 708, 714, 716, 718, 724, 726, 728, 734, 736, 738, 744, 746, 748, 803, 805, 807, 809, 813, 815, 817, 819, 823, 825, 827, 829, 833, 835, 837, 839, 843, 845, 847, 849, 902, 904, 906, 908, 912, 914, 916, 918, 922, 924, 926, 928, 932, 934, 936, 938, 942, 944, 946, 948])
    })
  })

  describe('#reverseNumber()', function() {

    it('should remove the trailing 0s and reverse a number passed', function () {
      reversible.reverseNumber(10).should.equal(1)
      reversible.reverseNumber(160).should.equal(61)
      reversible.reverseNumber(9060).should.equal(609)
    })

    it('should reverse a number passed', function () {
      reversible.reverseNumber(36).should.equal(63)
      reversible.reverseNumber(99).should.equal(99)
      reversible.reverseNumber(102).should.equal(201)
      reversible.reverseNumber(3456).should.equal(6543)
    })

  })

  describe('#isOdd()', function () {
    it('should return true only is a number is odd', function () {
      reversible.isOdd(1).should.be.true
      reversible.isOdd(3).should.be.true
      reversible.isOdd(5).should.be.true
      reversible.isOdd(7).should.be.true
      reversible.isOdd(111).should.be.true
    })

    it('should return false if a number is not odd', function () {
      reversible.isOdd(0).should.be.false
      reversible.isOdd(2).should.be.false
      reversible.isOdd(4).should.be.false
      reversible.isOdd(6).should.be.false
      reversible.isOdd(110).should.be.false
    })
  })
})