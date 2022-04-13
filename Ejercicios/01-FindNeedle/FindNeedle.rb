def FindNeedle (haystack, needle)

    haystack.split("").each.with_index do |hayValue, hayIndex|
        needle.split("").each.with_index do |needleValue, needleIndex|
            if haystack[hayIndex + needleIndex] != needleValue
                break
            end
            if needleIndex == needle.length - 1 
                return hayIndex
            end
        end
    end
    return -1
end


puts FindNeedle("react-redux", "redux") 
# 6

puts FindNeedle("pinky", "puntual")
# -1

puts FindNeedle("rereredux", "reredux")
# 2
