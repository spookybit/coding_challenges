# Write a method to generate a random integer (0...7), given a method that generates a random integer between (0...5). The resulting rand7 distribution must be uniform.

def rand5
  rand(6)
end

def rand7
  while true
    num = 5 * rand5 + rand5
    return (num % 7) if num  < 21
  end
end
