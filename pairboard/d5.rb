def matrix_region_sum(matrix, top_left, bottom_right)
  total = 0

  (top_left[0]..bottom_right[0]).each do |num1|
    (top_left[1]..bottom_right[1]).each do |num2|
      total += matrix[num1][num2]
    end
  end

  total
end

def merge_sort(arr)
  return arr if arr.length <= 1

  midd = arr.length/2
  left = arr.take(midd)
  right = arr.drop(midd)

  sort_left = merge_sort(left)
  sort_right = merge_sort(right)

  merge(sort_left, sort_right)
end

def merge(left, right)
  merged = []

  until left.empty? || right.empty?
    if left.first < right.first
      merged << left.shift
    else
      merged << right.shift
    end
  end

  merged + left + right
end
