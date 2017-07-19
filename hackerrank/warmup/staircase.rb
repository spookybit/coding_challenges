# Consider a staircase of size :
#
#    #
#   ##
#  ###
# ####
# Observe that its base and height are both equal to , and the image is drawn using # symbols and spaces. The last line is not preceded by any spaces.
#
# Write a program that prints a staircase of size .
#
# Input Format
#
# A single integer, , denoting the size of the staircase.
#
# Output Format
#
# Print a staircase of size  using # symbols and spaces.
#
# Note: The last line must have  spaces in it.
#
# Sample Input
#
# 6
# Sample Output
#
#      #
#     ##
#    ###
#   ####
#  #####
# ######

def staircase(n)
    j = n - 1
    res = ""
    n.times do |i|
        res += (" " * j) + ("#" * (i+1)) + "\n"
        j -= 1
    end

    res
end

n = gets.strip.to_i

puts staircase(n)
