function recursive(str1, str2, len1, len2, matrix) {
  // If result is already computed, return from memo
  if (matrix[len1][len2] !== -1) return matrix[len1][len2]

  // Base case: if either string is empty, LCS length is 0
  if (len1 === 0 || len2 === 0) return 0

  // If character matches, then we have only 1 choice to count that character and then remove that character from both the string.
  if (str1[len1 - 1] === str2[len2 - 1]) {
    const res = 1 + recursive(str1, str2, len1 - 1, len2 - 1, matrix)
    matrix[len1][len2] = res
    return res
  } else {
    /** If character doesn't match, we have two choices:
   * 1. Skip character from str1 (len1-1, len2)
   * 2. Skip character from str2 (len1, len2-1)
   * But why are we doing this? Make choice diagram for better clarity.
   * 
   * Example: str1 = "AB", str2 = "AF"
    // When comparing 'B' vs 'F' (they don't match):
    // Choice 1: Skip 'B' from str1 -> Compare "A" with "AF"
              // Sub choice 1: Skip 'A' from str1 ---> Compare '' with 'AF' ---> result will be 0 since str1 is empty. 
              // Sub choice 2: Skip 'F' from str2 ---> Compare 'A' with 'A' ---> result will be 1 since str1 & str2 are same. 
    
    // Choice 2: Skip 'F' from str2 -> Compare "AB" with "A"
              // Sub choice 1: Skip 'B' from str1 ---> Compare 'A' with 'A' ---> result will be 1 since str1 & str2 are same. 
              // Sub choice 2: Skip 'A' from str2 ---> Compare 'AB' with '' ---> result will be 0 since str2 is empty. 
  
    // We take max of both choices to find the longest possible subsequence
    */
    const res1 = recursive(str1, str2, len1 - 1, len2, matrix)
    const res2 = recursive(str1, str2, len1, len2 - 1, matrix)
    const res = Math.max(res1, res2)
    matrix[len1][len2] = res
    return res
  }
}

/**
 *  Longest Common Subsequence (LCS) Problem
    Given two strings, find the length of their longest common subsequence
    Example: str1 = "abcde", str2 = "afbcd"
    LCS = "abcd", length = 4
    Note: A subsequence doesn't need to be contiguous, but must maintain relative order
 */


function main() {
  const str1 = 'abcde'
  const str2 = 'afbcd'
  const len1 = str1.length
  const len2 = str2.length
  const matrix = Array(len1 + 1).fill(-1).map(() => Array(len2 + 1).fill(-1))
  console.log(recursive(str1, str2, len1, len2, matrix))
}

main()