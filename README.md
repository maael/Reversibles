# Reversibles

Set by [Tom Smith](https://github.com/iamsmith/) and [Mike Cronnelly](https://github.com/cronnelly)

## Languages Allowed

JavaScript, PHP, Java

## Problem

Some positive integers n have the property that the sum of (n  + reverse(n)) consists entirely of odd digits.

For instance:

  When n = 36 then 36 + 63 = 99
  When n = 409 then 409 + 904 = 1313

We will call such numbers reversible; so 36, 63, 409, and 904 are reversible.

If the reverse of n has a leading zero then n is not considered reversible.

For instance:

10 + 01 is ignored and 10 is not considered reversible

There are 120 reversible numbers below 1000.

## What you need to do

Develop a solution that can take any integer as an upper limit and return all the reversible numbers from 1 to the upper limit, as an array.


Your class/module should have the following interface, some language implementation will provide a interface for you to implement.

* listReversible(upperLimit) - Return an array of all the reversibles between 1 and **upperLimit**
* reverseNumber(number) - Returns the reverse of **number**. When number = 36 will return 63 and when number = 10 will return 1
* isOdd(number) - Returns true if **number** is odd
