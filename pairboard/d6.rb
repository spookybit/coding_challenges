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

def common_subsets(arr1, arr2)
  subsets(fast_intersection(arr1, arr2))
end

def can_find_zero(arr, idx)
  to_visit = [idx]
  visited = Array.new(arr.length, false)
  visited[idx] = true

  until to_visit.empty?
    indx = to_visit.shift
    value = arr[indx]

    return true if value == 0

    visited[indx] = true

    to_visit << indx + value unless visited[indx + value] || (indx + value) >= visited.length
    to_visit << indx - value unless visited[indx - value] || (indx - value) < 0
  end

  false
end
