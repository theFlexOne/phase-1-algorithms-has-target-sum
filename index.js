function hasTargetSum(array, target) {
  const previousNums = {};
  for (let i = 0; i < array.length; i++) {
    // console.log(previousNums, target); <- how I checked to make sure the object wasn't adding numbers that were themselves greater than the target sum.
    const currentNum = array[i];
    const winningNum = target - currentNum;
    if (currentNum >= target) continue;
    if (winningNum in previousNums) return true;
    previousNums[currentNum] = i;
  }
  return false;
}

/* 
  Speed = O of N
*/

/* 
  pseudo-code:
  A) 
*/

/*
  I've seen a YouTube video, or two, on this problem, and others, so I'm aware that using an object to
    record previous iteration data is a fast solution. I'm under the impression that, unless there's
    no other way around it, a time complexity of O of N^2 is bad. Even O of log(N^2) is considered way more acceptable.
    But, trying the brute force method is a good place to start, if no other solutions come to mind.

  The explanation is pretty simple, I created an object to record previous iterations with dynamic key:value pairs,
    and checked to see if the number needed for the pair to equal the target was in the object each iteration.
  If the number was in the object, I immediately returned true and stopped iterating, but if the loop came to an end,
    it meant that there were no pairs with a sum that equalled the target, so I returned false.

  I also added a guard clause that immediately continued the for loop if the current number was greater than or 
    equal to the target sum, to technically save some time, I think. Still a time complexity of O of N.
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
