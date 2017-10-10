# Write a method that takes an array and returns all its permutations. Time/memory complexity should be proportional to the number of permutations; what is this?
#
# Example:
#
# permutations([1,2,3])
# => [[1, 2, 3], [2, 1, 3], [2, 3, 1], [1, 3, 2], [3, 1, 2], [3, 2, 1]]
# Bonus:
#
# Write a class, PermutationIterator, that will iterate through permutations of an array. It should use O(n) memory, and return the "next" permutation in O(1) time. It can iterate through permutations in whatever order you desire.

def permutations(arr)
  return [arr] if arr.length <= 1

  first = arr.shift
  perms = permutations(arr)

  result = []

  perms.each do |perm|
    (0..perm.length).each do |i|
      result << perm[0...i] + [first] + perm[i...-1]
    end
  end

  result
end
