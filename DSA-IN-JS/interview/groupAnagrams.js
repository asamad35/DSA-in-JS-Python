/**
 * @param {string[]} str
 * @return {string[][]}
 */
var groupAnagrams = function (str) {
  const map = new Map();

  for (let i = 0; i < str.length; i++) {
    // Convert each string into an array of characters,
    // sort them alphabetically, then join back into a string.
    // This sorted string will serve as the "signature key"
    // for all anagrams (since anagrams have the same sorted form).
    //
    // Example: "eat" -> "aet", "tea" -> "aet", "ate" -> "aet"
    //
    // Default .sort() is fine for single characters ('a'–'z'),
    // but if you had sort multi-character strings,
    // you’d want .localeCompare for consistent ordering (not required here since all array elemet has single character string):
    //   [...str[i]].sort((a,b)=> a.localeCompare(b)).join("")
    const key = [...str[i]].sort().join("");

    // Add the original string to the corresponding group in the map.
    // If this key doesn’t exist yet, initialize with an empty array.
    map.set(key, [...(map.get(key) || []), str[i]]);
  }

  // Return all grouped anagrams as an array of arrays
  return Array.from(map.values());
};
