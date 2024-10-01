/**
 * Explanation
 * https://www.youtube.com/watch?v=2JSQIhPcHQg&list=PL_z_8CaSLPWeYfhtuKHj-9MpYb6XQJ_f2&index=21
 * https://www.youtube.com/watch?v=Z0hwjftStI4
 * 
 * 
 * Conditions: student will read books contiguous manner. 
 *             Each studnet should get atleast one book.
 *             1 book can be allocated to only 1 student. 
 * 
 * Atleast 1 student will read maximum number of pages present in the array. 
 * Any student can read pages in the range of:  highest page in array -------> all pages (sum of all elements of array) 
 * [10, 20, 30, 40] in this case it will be 40.
 * So we will start with minimum number of pages i.e maximum element in array.
 * Now we will check if these PAGES can accomodate provided number of students. 
 * Now there can be 2 cases.
 * If number of students required to complete all the books, with provided maximum pages read by each student is more than the provided number of students. 
 * Then it means we should increase provided maximum pages read by each student untill, calculated student count === provided number of students.
 */


function calculateStudents(arr, maxPages) {
  let studentsCount = 1
  let pagesCount = 0

  for (let i = 0; i < arr.length; i++) {
    if (pagesCount + arr[i] <= maxPages) {
      pagesCount += arr[i]
    } else {
      studentsCount++
      pagesCount = arr[i]
    }
  }

  return studentsCount

}


/**
 * Time complexity: O(N x (sum of all pages - max pages)) 
 */
function allocateMinimumPagesNaive(arr, k) {
  // edge case
  if (k < arr.length - 1) return -1

  if (k < arr.length - 1) return -1

  const start = Math.max(...arr)
  const end = arr.reduce((acc, curr) => curr + acc, 0)

  for (let pages = start; pages <= end; pages++) {
    const studentsCount = calculateStudents(arr, pages)
    if (studentsCount === k) return pages
  }
}

// Time complexity O(N x logN)
function allocateMinimumPagesOptimized(arr, k) {
  // edge case
  if (k < arr.length - 1) return -1

  let start = Math.max(...arr)
  let end = arr.reduce((acc, curr) => curr + acc, 0)

  while (start <= end) {
    const mid = Math.floor((start + end) / 2)
    const calcStudentsCount = calculateStudents(arr, mid)

    if (calcStudentsCount > k) {
      // if more students are required to cover all the pages, it means we need to inc the maximum number of pages read by each student.
      // Hence inc start
      start = mid + 1
    } else {
      end = mid - 1
    }
  }
  return start
}

// console.log(allocateMinimumPagesOptimized([25, 46, 28, 49, 24], 4))
console.log(allocateMinimumPagesNaive([25, 46, 28, 49, 24], 4))