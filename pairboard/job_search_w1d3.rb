# Given: a string of stars (rocks) and tildas (water)....
#
# **~~*~*~~*~***~~~*
#
# Given: You start at index 0 and your speed is 0.
#
# Given: At each step you can only do one of three things: speed += 0; speed += 1, speed -=1 ...e.g. if your speed = 2, you will advance 2 indices on the string.

def skiphop(str, speed)
  return true if str == ""
  return false if str[0] == "~"

  possibleSpeeds = [speed -1, speed, speed + 1]
  successArr = [false, false, false]

  possibleSpeeds.each do |s|
    next if s <= 0

    success[i] = skiphop(str[s..-1], s)
  end
  success.any? {|result| result}
end
