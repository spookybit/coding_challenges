https://www.hackerrank.com/challenges/camelcase

def numWords(s)
    caps = ("A".."Z").to_a
    counter = 1
    s.chars.each do |letter|
        counter += 1 if caps.include?(letter)
    end
    counter
end

s = gets.strip
puts numWords(s)
