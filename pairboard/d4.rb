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
