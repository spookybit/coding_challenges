test = [[1,4],[9,10],[6,7]]
ran = [1,12]

def getRanges(arr, target)
  map = ['str']
  arr.each do |range|
    i = range[0]
    until i == range[1] + 1
      map[i] = true
      i += 1
    end
  end

  if target[1] > map.length - 1
    map[target[1]] = nil
  end

  res = []
  i = 1
  range = []
  while i < map.length
    if !map[i] && range.empty?
      range[0] = (i - 1)
    elsif map[i] && range.any?
      range << i
      res << range
      range = []
    elsif range.any? && i = map.length - 1
      range << i
      res << range
    end
    i+= 1
  end

  res
end

getRanges(test, ran)
