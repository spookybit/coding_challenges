def subsets(arr)
  return [[]] if arr.empty?

  first = arr[0]
  rest = arr.drop(1)

  subs = subsets(rest)
  subs + subs.map {|sub| sub + [first]}
end
