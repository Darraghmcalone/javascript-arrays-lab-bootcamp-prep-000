var kittens = ['Milo', 'Otis', 'Garfield']
function destructivelyAppendKitten(kitten){
  kittens.push(kitten)
  return kittens
}
function destructivelyPrependKitten(kitten){
  kittens.unshift(kitten)
  return kittens
}
functions destructivelyRemoveLastKitten(kitten){
  kittens.shift(kitten)
  return kittens
}
