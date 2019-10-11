const bitToNum = bitString => {
  let sum = 0;
  let bitArr = [];

  // starting at the end of the string
  for (let i = bitString.length - 1; i >= 0; i--) {
    let bit = parseInt(bitString[i]);
    bitArr.push(bit);

    if (bit == 1) {
      let num = Math.pow(2, bitArr.length -1);
      console.log(num)
      sum += num;
    } else if (bit == 0) {
      continue;
    } else {
      return 'please enter a series of bits'
    }
  }
  return sum;
}

console.log(bitToNum("1"));
console.log(bitToNum("101"));
console.log(bitToNum("100"));
console.log(bitToNum("1000"));
console.log(bitToNum("100100"));
