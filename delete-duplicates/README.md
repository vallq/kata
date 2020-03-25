## Deleting Duplicates
This problem is concerned with *deleting repeated elements from a sorted array*. 

For example, the array [2,3,5,5,7,11,11,11,13] will become [2,3,5,7,11,13,0,0,0] upon deletion. The updated array will then be returned.

Input: 
```js
[2,3,5,5,7,11,11,11,13]
```
Output:
```js
[2,3,5,7,11,13,0,0,0]
```
After deleting repeated elements, there are 6 valid entries. There are no requirements as to the values stored beyond the last valid element.

Write a program which takes a sorted array as input and updates it so that all duplicates have been removed and the remaining elements have been shifted left to fill the emptied indices. 

~~Return the number of valid elements.~~ 
Many languages have library functions for performing this operation—you cannot use these functions