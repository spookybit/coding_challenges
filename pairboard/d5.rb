def matrix_region_sum(matrix, top_left, bottom_right)
  total = 0

  (top_left[0]..bottom_right[0]).each do |num1|
    (top_left[1]..bottom_right[1]).each do |num2|
      total += matrix[num1][num2]
    end
  end

  total
end
