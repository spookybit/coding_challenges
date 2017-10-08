# Write a function that takes an integer and returns it in binary form.

def binary(num)
  result = ""

  until num == 0
    result.unshift(num % 2)
    num /= 2
  end

  result.empty? ? "0" : result.to_i
end

# Implement factorial with and without recursion. What is a potential disadvantage of the recursive way?
#
# What is tail-recursion? Does Ruby have tail-call optimization? Pretend it did; write a tail-recursive version of rec_fac.

def factorial(num)
  total = 1
  until num == 0
    total *= num
    num -= 1
  end

  total
end
