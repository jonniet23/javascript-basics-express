const getNthElement = (index, array) => {
  const newIndex = 0;
  if( index < array.length) {
    return array[index];
  }
    else if (index >= array.length){
      return array[newIndex + (index - array.length)]
    }
 };


const arrayToCSVString = array => {
  return array.join();
};

const csvStringToArray = string => {
  return string.split(',');
};

const addToArray = (element, array) => {
  array.push(element);
};

const addToArray2 = (element, array) => {
  const myArray = array.slice();
  myArray.push(element);
  return myArray;
}

const removeNthElement = (index, array) => {
  return array.splice(index, 1);
};

const numbersToStrings = numbers => {
  return numbers.toString().split(',');
};

function uppercaseWordsInArray(strings) {
  return String(strings).toUpperCase().split(",");
}

const reverseWordsInArray = strings => {
  return strings.map(item => item.split('').reverse().join(''));
};

function onlyEven(numbers) {
  const evenNumbers = numbers.filter((num) => num % 2 === 0);
  return evenNumbers;
}

const removeNthElement2 = (index, array) => {
   return array.slice(0,index).concat(array.slice(index+1))
};

const elementsStartingWithAVowel = strings => {
   return strings.filter(str => /^[aeiou]/i.test(str));
};

const removeSpaces = string => {
  return string.replace(/\s+/g, '');
};

const sumNumbers = numbers => {
  return numbers.reduce((a, b) => a + b, 0);
};

const sortByLastLetter = strings => {
  return strings.sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1)); 
  
}; 

module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter
};
