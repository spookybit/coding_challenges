# MAIN ASSUMPTION
# The answer will be either hopping every single step every time OR
# skipping the first step to avoid the forbidden step
def jumpingJack(steps, forbidden_step)
  max_steps = (steps * (steps + 1)) / 2
  stepVerifier(forbidden_step) ? max_steps : (max_steps - 1)
end
# def stepVerifier(forbidden_step)
#   curr_speed = 1
#   curr_step = 0
#
#   until curr_step > forbidden_step
#     curr_step += curr_speed
#     curr_speed += 1
#
#     return false if curr_step == forbidden_step
#   end
#
#   true
# end
def stepVerifier(forbidden_step)
  n = (-1 + Math.sqrt(1 + 8 * forbidden_step)) / 2.0
  n % 1 == 0
end

def islands(arr, visited = [], curr_pos = [0, 0])
  island_count = 0
  arr.each_with_index do |subarr, idx1|
    subarr.each_with_index do |spot, idx2|
      if !visited.include?([idx1, idx2]) && spot == 1
        visited += explore(arr, visited, [idx1, idx2])
        island_count += 1
      else
        visited << [idx1, idx2]
      end
    end
  end
  island_count
end
def explore(arr, visited, curr_pos)
  curr_spot = arr[curr_pos[0]][curr_pos[1]]
  return [] if curr_spot.nil? || visited.include?(curr_pos)
  return visited if curr_spot == 0
  dirs = [[0, 1], [0, -1], [1, 0], [-1, 0]]
  if !visited.include?(curr_pos)
    visited << curr_pos
  end
  dirs.each do |dir|
    new_pos = [curr_pos[0] + dir[0], curr_pos[1] + dir[1]]
    next if new_pos.any? { |el| el < 0 } ||
            new_pos[0] >= arr.length ||
            new_pos[1] >= arr[0].length
    new_spot = arr[new_pos[0]][new_pos[1]]
    if arr[new_pos[0]][new_pos[1]] == 1
      explore(arr, visited, new_pos)
    end
  end
  return visited
end
p islands([[1,0,0,0,1], [1,0,0,0,0], [0,0,1,1,0]])
