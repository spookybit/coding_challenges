# https://www.hackerrank.com/challenges/birthday-cake-candles?h_r=next-challenge&h_v=zen

def birthdayCakeCandles(n, ar)
    # Complete this function
    max = ar.max
    ar.select {|x| x == max}.count
end

n = gets.strip.to_i
ar = gets.strip
ar = ar.split(' ').map(&:to_i)
result = birthdayCakeCandles(n, ar)
puts result;
