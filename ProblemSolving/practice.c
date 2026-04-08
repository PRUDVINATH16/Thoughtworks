/*

// MISSING VALUE IN A SECQUENCE

  int numbers[10] = { 11, 12, 13, 15, 16, 17, 18, 19, 20};

  for(int i = 11; i < 21; i++) {
      if(i != numbers[i-11]) {
          printf("%d is missing\n", i);
          break;
      }
  }
*/

/*

// ARRAY SORTED

#include <stdio.h>
#include <stdbool.h>

int numbers[7] = {10, 20, 40, 50, 88, 90,8999999};
  bool isSorted = true;

  for(int i = 0; i < sizeof(numbers)/sizeof(int)-1; i++) {
      printf("%d %d\n", numbers[i], numbers[i+1]);
      if(numbers[i] >= numbers[i+1]) {
          isSorted = false;
          break;
      }
  }

  if(isSorted) printf("Array is Sorted");
  else printf("Array is not Sorted");

  1. In this program am checking is the given array is sorted or not.
  2. So for that i need to check the consecutive [side by side] elements.
  3. So if any left side number is greater than right side number then i will declare that, this array is not sorted, because the left number should be smaller than right side number like in accending order.
  4. The isSorted flag will manage and represent the sorted status of the Array.
  5. By using the isSorted flag i will display that the array is sorted or not.

  Input: [10, 20, 30, 40];
  Output: Array is Sorted 
*/