#O(n^3)

def uniq_subs(str)
  set_store = Set.new
  str.length.times do |i|
    (i...str.length).each do |j|
      set_store.add(str[i..j])
    end
  end
  set_store
end

def largest_contiguous_sum(arr)
  largest_sum = 0
  running_total = 0

  arr.each do |num|
    if running_total + num > 0
      running_total += num
      largest_sum = running_total if running_total > largest_sum
    else
      running_total = 0
    end
  end

  if largest_sum > 0
    return largest_sum
  else
    return arr.max
  end

end
