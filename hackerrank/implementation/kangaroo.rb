# https://www.hackerrank.com/challenges/kangaroo

def kangaroo(x1, v1, x2, v2)
    # Complete this function
    if x1 > x2
        furtheri = x1
        velocityi = v1
        behindj = x2
        velocityj = v2
    else
        furtheri = x2
        velocityi = v2
        behindj = x1
        velocityj = v1
    end

    until behindj > furtheri || velocityj <= velocityi
        behindj += velocityj
        furtheri += velocityi

        if behindj == furtheri
            return "YES"
        end
    end

    return "NO"

end

x1, v1, x2, v2 = gets.strip.split(' ')
x1 = x1.to_i
v1 = v1.to_i
x2 = x2.to_i
v2 = v2.to_i
result = kangaroo(x1, v1, x2, v2)
puts result;
