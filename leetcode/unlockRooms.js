// There are N rooms and you start in room 0.  Each room has a distinct number in 0, 1, 2, ..., N-1, and each room may have some keys to access the next room.
//
// Formally, each room i has a list of keys rooms[i], and each key rooms[i][j] is an integer in [0, 1, ..., N-1] where N = rooms.length.  A key rooms[i][j] = v opens the room with number v.
//
// Initially, all the rooms start locked (except for room 0).
//
// You can walk back and forth between rooms freely.
//
// Return true if and only if you can enter every room.

function unlockRooms(rooms) {
  let map = [];
  for (let i = 0, len = rooms.length; i<len; i++) {
    map.push(false)
  }

  map[0] = true;
  let keyQueue = rooms[0];

  while (keyQueue.length > 0) {
    let key = keyQueue.shift();
    if (!map[key]) {
      map[key] = true;
      keyQueue = keyQueue.concat(rooms[key]);
    }
  }
  return map.every(function(room) {return room})
}

// let rooms = [[1,3],[3,0,1],[2],[0]] //false
// [[1],[2],[3],[]] //true
// unlockRooms(rooms)
