function hasTargetSum(array, winningSum) {
  const previousNums = {};
  for (let i = 0; i < array.length; i++) {
    const currentNum = array[i];
    const NumToWin = winningSum - currentNum;
    if (NumToWin in previousNums) return true;
    previousNums[currentNum] = i;
  }
  return false;
}

/* 
  Speed = O of N
*/

/* 
  pseudo-code:
  A) create an object to act as a history of previous numbers.
  B) Loop through the array checking if each number has a winning pair in the history object
  C) if there is one, return true
  D) if not, end the iteration and 
  E) will return false if loop finishes before returning.
*/

/*
  I've seen a YouTube video, or two, on this problem, and others, so I'm aware that using an object to
    record previous iteration data is a fast solution, but, trying the brute force method is a good place to start, if no other solutions come to mind.

  The explanation is pretty simple, I created an object to record previous iterations with dynamic key:value pairs,
    and checked to see if the number needed for the pair to equal the target sum was in the object each iteration.
  If the number was in the object, I immediately returned true and stopped iterating, but if the loop came to an end,
    it meant that there were no pairs with a sum that equalled the target, so I returned false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([1, 2, 13, 3, 24, 10, 16, 8, 19, 29], 4));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 13, 3, 24, 10, 16, 8, 19, 29], 6));
}

module.exports = hasTargetSum;
