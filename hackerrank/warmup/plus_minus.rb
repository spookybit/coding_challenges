# Given an array of integers, calculate which fraction of its elements are positive, which fraction of its elements are negative, and which fraction of its elements are zeroes, respectively. Print the decimal value of each fraction on a new line.
#
# Note: This challenge introduces precision problems. The test cases are scaled to six decimal places, though answers with absolute error of up to  are acceptable.
#
# Input Format
# 
# The first line contains an integer, , denoting the size of the array.
# The second line contains  space-separated integers describing an array of numbers .
#
# Output Format
#
# You must print the following  lines:
#
# A decimal representing of the fraction of positive numbers in the array compared to its size.
# A decimal representing of the fraction of negative numbers in the array compared to its size.
# A decimal representing of the fraction of zeroes in the array compared to its size.
# Sample Input
#
# 6
# -4 3 -9 0 4 1
# Sample Output
#
# 0.500000
# 0.333333
# 0.166667

def plus_minus(num, arr)
    pos = 0
    neg = 0
    zero = 0

    arr.each do |n|
        if n > 0
            pos += 1
        elsif n < 0
            neg += 1
        else
            zero += 1
        end
    end

#    [(pos/num.to_f).round(6), (neg/num.to_f).round(6), (zero/num.to_f).round(6)]
     ['%.6f' % (pos/num.to_f), '%.6f' % (neg/num.to_f), '%.6f' % (zero/num.to_f)]

end

n = gets.strip.to_i
arr = gets.strip
arr = arr.split(' ').map(&:to_i)

nums =  plus_minus(n, arr)
puts nums[0]
puts nums[1]
puts nums[2]
