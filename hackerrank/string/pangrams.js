function isPangram(str){
  let hashmap = {};
  str.toLowerCase().replace(/[^a-z]/g, '').split('').forEach(function(x){hashmap[x]=true})
  return Object.keys(hashmap).length==26
}
