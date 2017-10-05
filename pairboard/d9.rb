# Assume an array of non-negative integers. A second array is formed by shuffling the elements of the first array and deleting a random element. Given these two arrays, find which element is missing in the second array. Do this in linear time with constant memory use.

def find_missing_number(arr1, arr2)
  (arr1.reduce(:+) - arr2.reduce(:+)).abs
end

# Given three strings, return whether the third is an interleaving of the first two. Interleaving means it only contains characters from the other two, no more no less, and preserves their character ordering. "abdecf" is an interleaving of "abc" and "def". Note that the first two strings needn't be in alphabetical order like these.
#
# You may assume that the first two strings do not contain any characters in common.
#
# Next, relax the assumption that the first two strings contain no overlap. Analyze the time-complexity of your solution. You may wish to view this problem recursively.

def is_shuffle?(str1, str2, str3)
  i = 0
  j = 0
  str3.each_char do |letter|
    if i < str1.length && letter == str1[i]
      i += 1
    elsif j < str2.length && letter == str2[j]
      j += 1
    else
      return false
    end
  end

  if (i == str1.length) && (j == str2.length)
    return true
  else
    return false
  end
end
