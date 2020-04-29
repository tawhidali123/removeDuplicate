// Given a sorted array nums, remove the duplicates in-place such that each element appear only once and return the new length.

// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

// EXAMPLE 
// Given nums = [0,0,1,1,1,2,2,3,3,4],

// Your function should return length = 5, with the first five elements of nums being modified to 0, 1, 2, 3, and 4 respectively.

// It doesn't matter what values are set beyond the returned length.

// GAMEPLAN
// if number is appearing more than once, those are the ones we are focusing on
// we want pointers to find




function removeDuplicate(arr) {
  let pointer1 = 0
  let pointer2 = 1
  let currentNumComparing = 0
  let duplicates = 0

  while(pointer2 < arr.length){
    if(arr[pointer1] === arr[pointer2]){
      duplicates++
      pointer1++
      pointer2++
    }else{
      pointer1++
      pointer2++
    }
  }
  return duplicates
}

removeDuplicate([0,0,1,1,1,2,2,3,3,4,4])