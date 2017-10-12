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

# Consider a linked list. Each link in the list holds a next reference to the next item in the list, except for the final link, which points to nil.
#
# It is possible to have a "list" without any end, which loops back on itself. Possibilities:
#
# A -> B -> C -> A -> ...
# A -> B -> C -> B -> ...
# Write a method cyclic?(first_link), which will return true if a list is cyclic. Your first version may use O(n) memory. Next, write a version which uses O(1) memory; you'll probably need a different approach.

# def cyclic?(link)
#   set = Set.new
#
#   until link.nil?
#     return true if set.include?(link)
#     set << link
#
#     link = link.next
#   end
#
#   false
# end

def cyclic?(link)
  fast = link
  slow = link

  while true
    2.times do
      fast = fast.next

      return false if fast.nil?
      return true if fast == slow
    end
    slow = slow.next?
  end
end
