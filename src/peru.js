let string= ''
const solve = (arr) => {
 const arr2 = arr.map(item => {
    //   string = item[0] > item[item.length - 1]
    if(item[0] > item[item.length -1]) {
        string += item[0]
    }
    return string
  })
  return arr2
}

console.log(solve(['E>R', 'R>U', 'P>E'] ))
