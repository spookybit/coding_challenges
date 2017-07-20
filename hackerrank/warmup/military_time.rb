# https://www.hackerrank.com/challenges/time-conversion?h_r=next-challenge&h_v=zen

def timeConversion(s)
    # Complete this function
    hour = s[0..1]
    min = s[3..4]
    sec = s[6..7]
    am = s[8..9]

    if am == "AM"
        if hour.to_i == 12
            "00" + ":" + "#{min}" + ":" + "#{sec}"
        else
            "#{hour}" + ":" + "#{min}" + ":" + "#{sec}"
        end
    else
        if hour.to_i == 12
            "#{hour}" + ":" + "#{min}" + ":" + "#{sec}"
        else
           "#{hour.to_i+12}" + ":" + "#{min}" + ":" + "#{sec}"
        end
    end
end

s = gets.strip
result = timeConversion(s)
puts result;
