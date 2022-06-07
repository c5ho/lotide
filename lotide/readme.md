# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @c5ho/lotide`

**Require it:**

`const _ = require('@c5ho/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(arr)`: returns the 'head' (first element) of an array
* `tail(arr)`: returns the 'tail' (index 1 to last element) of an array
* `middle()`: returns (in an array) the middle value of an array if there are an odd number of elements, otherwise returs the middle two values of an array from an arry of even number elements
* `assertEqual(actual, expected)`: returns if an Assertion is passed or failed for primitive data types
* `eqArray(arr1, arr2)`: returns true if arr1 is deeply equivalent to arr2
* `assertArraysEqual(actual, expected)`: Assertion for a deep comparison of two arrays, used with `eqArray(arr1, arr2)` 
* `eqObjects(obj1, obj2)`: returns true if obj1 is deeply equivalent to obj2
* `assertObjectsEqual(actual, expected)`: Assertion for a deep comparison of two objects, used with `eqObjects(obj1, obj2)` 
* `countLetters(string)`: returns (in an object) the number of occurences of each letter in a given string
* `countOnly(listArr, itemsToCountObj)`: returns an object of key:value pairs of item:occurences given a list of items in an array and an object with key:value pairs being itemToCount:boolean; count the item if true
* `findKey(obj, callback)`: takes in an object and a callback function and returns the first key for which the callback returns a truthy value; if no key is found, undefined is returned
* `findKeyByValue(obj, valueToFind)`: takes in an object and value and returns the first key of the corresponding value; if no key exists for that given value, return undefined
* `letterPositions(string)`: given a string, return an object of showing each letter in the string and it's position(s) in the string
* `map(arr, callback)`: given an array and a callback function, return a new array based on the results of the callback function
* `takeUntil(arr, callback)`: given an array and a callback function, return a 'slice' of the array from the beginning until the callback provides a truthy value
* `without(sourceArr, subsetArr)`: given a source array and subset array, return a new array that only includes items from the source array that are not in the subset array