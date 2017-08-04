def subsets(arr)
  return [[]] if arr.empty?

  first = arr[0]
  rest = arr.drop(1)

  subs = subsets(rest)
  subs + subs.map {|sub| sub + [first]}
end

require 'set'

def fast_intersection(arr1, arr2)
  arr_set = arr1.to_set
  intersections = []

  arr2.each do |num|
    intersections << num if arr_set.include?(num)
  end

  intersections
end
