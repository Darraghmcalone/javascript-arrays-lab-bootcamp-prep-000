var kittens = ['Milo', 'Otis', 'Garfield']
function destructivelyAppendKitten(kitten){
  kittens.push(kitten)
  return kittens
}
function destructivelyPrependKitten(kitten){
  kittens.unshift(kitten)
  return kittens
}
function removeLastKitten(kitten){
  kittens.pop(kitten)
  kittens.shift(Otis)
  return kittens
}
