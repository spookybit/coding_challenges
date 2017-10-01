# Noncomparison Sort
#
# Part 1: Say that I gave you an array of length n, containing the numbers 1..n in jumbled order. "Sort" this array in O(n) time. You should be able to do this without looking at the input.

def sort1(arr)
  (1..arr.length).to_a
end

# Part 2: Say that I give you an array of length n with numbers in the range 1..N (N >= n). Sort this array in O(n + N) time. You may use O(N) memory.

def sort2(arr, max)
  arr.sort
end

# Part 3: Say I give you an array of n strings, each of length k. I claim that, using merge sort, you can sort this in O(knlog(n)), since comparing a pair of strings takes O(k) time.
#
# I want you to beat that. Sort the strings in O(kn). Hint: do not compare any two strings. You may assume all strings contain only lowercase letters a..z without whitespace or punctuation.

# Given an array, write a function that will return a random index of the array. The probability of an index being returned is weighted by the value at that index against the sum of the array values. For example, for the array [4, 6, 8], index 0 should be returned with 4 in 18 odds, index 1 should be returned with 6 in 18 odds, and index 2 should be return with 8 in 18 odds. Implement this in O(n) time.

def weighted_random_index(arr)
  total = arr.inject(:+)
  goal = rand(total)

  count = 0
  arr.each_index do |idx|
    count += arr[idx]
    return idx if count > goal
  end
end

# Given an array, move all zeros to the end. The order of non-zero elements does not matter.
# move_zeros([1, 2, 0, 3, 4, 0, 5, 6, 0]) == [1, 2, 6, 3, 4, 5, 0, 0, 0]
# Algorithm should be O(n); use O(1) extra space.

def move_zeros(arr)
  idx = 0
  num_zeros = 0

  while idx < arr.length - num_zeros
    if arr[idx] != 0
      idx += 1
      next
    end

    back = arr.length - 1 - num_zeros
    arr[idx], arr[back] = arr[back], arr[idx]
    num_zeros += 1
  end

  arr
end
