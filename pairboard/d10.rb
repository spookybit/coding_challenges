# Write a function that takes an integer and returns it in binary form.

def binary(num)
  result = ""

  until num == 0
    result.unshift(num % 2)
    num /= 2
  end

  result.empty? ? "0" : result.to_i
end
