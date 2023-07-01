function negate(a) {
  return !a;
}

function both(a, b) {
  if (a === true && b === true) {
    return true;
  }

  return false;
}

function either(a, b) {
  if (a === false && b === false) {
    return false;
  }

  return true;
}

function none(a, b) {
  if (a === true || b === true) {
    return false;
  }

  return true;
}

function one(a, b) {
  if (a === b) {
    return false;
  }

  return true;
}

function truthiness(a) {
  if (Boolean(a) === true) {
    return true;
  }

  return false;
}

function isEqual(a, b) {
  if (a === b) {
    return true;
  }

  return false;
}

function isGreaterThan(a, b) {
  if (a > b) {
    return true;
  }
  return false;
}

function isLessThanOrEqualTo(a, b) {
  if (a <= b) {
    return true;
  }

  return false;
}

function isOdd(a) {
  if (a % 2 === 1) {
    return true;
  }
  return false;
}

function isEven(a) {
  if (a % 2 === 0) {
    return true;
  }

  return false;
}

function isSquare(a) {
  if (Math.sqrt(a) % 1 === 0) {
    return true;
  }

  return false;
}

function startsWith(char, string) {
  if (string.charAt(0) === char) {
    return true;
  }

  return false;
}

function containsVowels(string) {
  if (string.match(/[aeiou]/gi)) {
    return true;
  }

  return false;
}

function isLowerCase(string) {
  if (string === string.toLowerCase()) {
    return true;
  }

  return false;
}

module.exports = {
  negate,
  both,
  either,
  none,
  one,
  truthiness,
  isEqual,
  isGreaterThan,
  isLessThanOrEqualTo,
  isOdd,
  isEven,
  isSquare,
  startsWith,
  containsVowels,
  isLowerCase,
};
