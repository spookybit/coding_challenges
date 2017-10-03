# I give you a scrambled list of n unique integers between 0 and n. Tell me what number is missing.
#
# If I let you use O(nlog(n)) time, what is a naive way of doing this?
#
# Next, what if I require that you solve the problem in O(n) time? What datastructure might you use?
#
# Finally, how could you solve the problem in O(n), and also O(1) space?

def missing_num(arr)
  expected_total = (arr.length + 1) (arr.length/2)
  actual_total = arr.inject(&:+)
  expected_total - actual_total
end
#
# Consider a coordinate system for the Milky Way, in which Earth is at (0,0,0). Model stars as points, and assume distances are in light years. The Milky Way consists of approximately 10^12 stars, and their coordinates are stored in a file. How would you compute the k stars which are closest to Earth?
#
# Hint: Suppose you know the k closest stars in the first n stars. If the (n + 1)th star is to be added to the set of k closest stars, which element in that set should be evicted?

# Solution
#
# We are working with a big dataset!
#
# If we were working with a smaller dataset, there are a few ways we could solve this problem.
#
# We could read the data into an array, then sort the array and take the kth smallest elements.
# We could read the items into an array and use QuickSelect.
# However, both of these solutions would take up O(n) space complexity. Given the vast number of stars in our galaxy, these solutions will simply not do!
#
# To solve this problem in a lower space complexity (teehee, space complexity because we are talking about outer space), we can solve this problem using a priority queue.

# def k_closest_stars(sequence, k)
#   # This we pass our MaxHeap a proc to calculate distance
#   heap = BinaryMaxHeap.new do |el1, el2|
#     distance1 = Math.sqrt(el1[0]**2 + el1[1]**2 + el1[2]**2)
#     distance2 = Math.sqrt(el2[0]**2 + el2[1]**2 + el2[2]**2)
#     distance1 <=> distance2
#   end
#
#   # Start off the heap with k items
#   k.times do
#     heap.push(sequence.pop)
#   end
#
#   # Until we reach the end, push on new items from our sequence and extract the max
#   while sequence.length > 0
#     heap.push(sequence.pop)
#     heap.extract
#   end
#
#   # We can return an array of k closest stars
#   k_closest = []
#
#   until heap.empty?
#     k_closest.push(heap.extract)
#   end
#
#   k_closest
# end
#
# In this solution, we assume that we have a BinaryMaxHeap class that takes in a proc for sorting. In this case, we sort by distance from (0,0,0), earth's position.
#
# We start by pushing k items onto the max heap. Then, until we reach the end of the sequence of stars, we continue reading in each star, adding them to the heap (O(logk)), then extracting the max (O(1)). This will maintain a structure that keeps track of the k closest stars at all times. Finally, when we reach the end of the star stream, we push everything from the heap onto an array, which we ultimately return.
#
# The time complexity is (O(nlogk)) because we must read through each star once, and adding them to the heap is an O(logk) operation. The space complexity (teehee) is a mere O(k).

# Implement a stack with a method max that returns the maximum value of the stack. max should run in O(1) time, no matter what operations are performed on the stack.

class MaxStack
  def initialize
    @values = []
  end

  def push(value)
    if @values.empty?
      @values << [value, value]
    else
      new_max = [value, @values.max].max
      @values << [value, new_max]
    end
  end

  def pop
    @values.pop
  end

  def max
    @values.last[1]
  end
end
