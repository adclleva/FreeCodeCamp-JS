const bitToNum = bitString => {
  let sum = 0;
  let bitArr = [];

  // starting at the end of the string
  for (let i = bitString.length - 1; i >= 0; i--) {
    let bit = parseInt(bitString[i]);
    bitArr.push(bit);

    if (bit) {
      let num = Math.pow(2, bitArr.length -1);
      console.log(num)
      sum += num;
    }
  }
  console.log(bitArr)
  return sum;
}

console.log(bitToNum("111"));
console.log(bitToNum("101"));
console.log(bitToNum("1110"));
