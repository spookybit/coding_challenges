# https://www.hackerrank.com/challenges/grading

def solve(grades)
    # Complete this function
    grad = []
    grades.each do |x|
        if x >= 35
            if x % 5 >= 3
                y = x % 5
                z = 5 - y
                grad << (x + z)
            else
                grad << x
            end
        else
            grad << x
        end
    end
    grad
end

n = gets.strip.to_i
grades = Array.new(n)
for grades_i in (0..n-1)
    grades[grades_i] = gets.strip.to_i
end
result = solve(grades)
print result.join("\n")
