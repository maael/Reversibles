/* Returns true if number is odd */
var isOdd = function (number) {
  /* Check odd, as mod of an odd equals 1 */
  return ((number % 2) === 1);
};
/* Reverse number, dropping leading zeros */
var reverseNumber = function (number) {
  /* 
  * Make number string, and split into character array
  * Then reverse character array and join them
  * Then use parseInt in radix 10 to get integer from String
  * This drops any starting 0's off number
  */
  return parseInt(number.toString().split("").reverse().join(""), "10");
};
/* Find valid reversible numbers between 1 and an upperlimit, inclusive*/
var listReversible = function (upperLimit) {
  /* Initial variable declerations */
  var i = 1,
    reversed = null,
    sum = 0,
    parts = null,
    j = 0,
    isReversible = true,
    reversibleNumbers = [];

  /* Loop through possible numbers */
  for (i = 1; i <= upperLimit; i++) {
    /* Only do calculation if number isn't found already */
    if (reversibleNumbers.indexOf(i) === -1) {
      isReversible = true;
      /* Get reversed number */
      reversed = reverseNumber(i);
      /* 
      * Check that the length is the same
      * If it isn't we dropped some zeros, so not reversible
      */
      if (!(reversed.toString().length < i.toString().length)) {
        /* Add up number and reversed number */
        sum = i + reversed;
        /* Split number into characters */
        parts = sum.toString().split("");
        /* Loop through characters of sum check if they're all odd*/
        for (j = 0; j < parts.length; j++) {
          /* If a character in the sum isn't odd, the number isn't reversible, ending the check */
          if (!isOdd(parseInt(parts[j], "10"))) {
            isReversible = false;
            break;
          }
        }
      } else {
        isReversible = false;
      }
      /*
      * If the number is reversible, so is its reverse
      * Store them both in the results if reverse is under the limit
      */
      if (isReversible) {
        reversibleNumbers.push(i);
        if (reversed <= upperLimit) {
          reversibleNumbers.push(reversed);
        }
      }
    }
  }
  /* Sort and return list */
  return reversibleNumbers.sort();
};

/* Include functions in exports */
module.exports = {
  listReversible: listReversible,
  reverseNumber: reverseNumber,
  isOdd: isOdd
};