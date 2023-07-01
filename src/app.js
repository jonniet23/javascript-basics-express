const express = require('express');

const app = express();

app.use(express.json());
const {
  sayHello,
  uppercase,
  lowercase,
  firstCharacter,
  firstCharacters,
} = require('./lib/strings');

const { add, subtract, multiply, divide, remainder } = require('./lib/numbers');
const { negate, truthiness, isOdd, startsWith } = require('./lib/booleans');
const {
  getNthElement,
  arrayToCSVString,
  addToArray2,
  elementsStartingWithAVowel,
  removeNthElement2,
} = require('./lib/arrays');

app.get('/strings/hello/:string', (req, res) => {
  return res.status(200).json({ result: sayHello(req.params.string) });
});

app.get('/strings/upper/:string', (req, res) => {
  res.status(200).json({ result: uppercase(req.params.string) });
});

app.get('/strings/lower/:string', (req, res) => {
  res.status(200).json({ result: lowercase(req.params.string) });
});

app.get('/strings/first-characters/:string', (req, res) => {
  const { string } = req.params;
  const { length } = req.query;
  if (length === undefined) {
    res.json({ result: firstCharacter(string) });
  } else {
    res.status(200).json({ result: firstCharacters(string, length) });
  }
});

app.get('/numbers/add/:a/and/:b', (req, res) => {
  // eslint-disable-next-line radix
  const a = parseInt(req.params.a);
  // eslint-disable-next-line radix
  const b = parseInt(req.params.b);

  if (Number.isNaN(a) || Number.isNaN(b)) {
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  } else {
    res.status(200).json({ result: add(a, b) });
  }
});

app.get('/numbers/subtract/:b/from/:a', (req, res) => {
  // eslint-disable-next-line radix
  const a = parseInt(req.params.a);
  // eslint-disable-next-line radix
  const b = parseInt(req.params.b);

  if (Number.isNaN(a) || Number.isNaN(b)) {
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  } else {
    res.status(200).json({ result: subtract(a, b) });
  }
});

app.post('/numbers/multiply', (req, res) => {
  const a = parseInt(req.body.a, 10);
  const b = parseInt(req.body.b, 10);

  if (!req.body.a || !req.body.b) {
    res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  } else if (Number.isNaN(a) && Number.isNaN(b)) {
    res.status(400).json({ error: 'Parameters "a" and "b" must be valid numbers.' });
  } else {
    res.status(200).json({ result: multiply(a, b) });
  }
});

app.post('/numbers/divide', (req, res) => {
  const a = Number(req.body.a);
  const b = Number(req.body.b);

  if (b === 0) {
    res.status(400).json({ error: 'Unable to divide by 0.' });
  } else if ((!req.body.a && req.body.a !== 0) || !req.body.b) {
    res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  } else if (Number.isNaN(a) || Number.isNaN(b)) {
    res.status(400).json({ error: 'Parameters "a" and "b" must be valid numbers.' });
  } else {
    res.status(200).json({ result: divide(a, b) });
  }
});

app.post('/numbers/remainder', (req, res) => {
  const a = parseInt(req.body.a, 10);
  const b = parseInt(req.body.b, 10);

  if (b === 0) {
    res.status(400).json({ error: 'Unable to divide by 0.' });
  } else if ((!req.body.a && req.body.a !== 0) || !req.body.b) {
    res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  } else if (Number.isNaN(a) || Number.isNaN(b)) {
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  } else {
    res.status(200).json({ result: remainder(a, b) });
  }
});

app.post('/booleans/negate', (req, res) => {
  const { value } = req.body;

  return res.status(200).json({ result: negate(value) });
});

app.post('/booleans/truthiness', (req, res) => {
  const { value } = req.body;

  res.status(200).json({ result: truthiness(value) });
});

app.get('/booleans/is-odd/:number', (req, res) => {
  const number = parseInt(req.params.number, 10);
  if (Number.isNaN(number)) {
    return res.status(400).json({ error: 'Parameter must be a number.' });
  }
  return res.status(200).json({ result: isOdd(number) });
});
app.get('/booleans/:string/starts-with/:char', (req, res) => {
  const { string } = req.params;
  const { char } = req.params;
  if (char.length > 1) {
    return res.status(400).json({ error: 'Parameter "character" must be a single character.' });
  }
  return res.status(200).json({ result: startsWith(char, string) });
});

app.post('/arrays/element-at-index/:index', (req, res) => {
  const index = parseInt(req.params.index, 10);
  const { array } = req.body;

  return res.status(200).json({ result: getNthElement(index, array) });
});

app.post('/arrays/to-string', (req, res) => {
  const { array } = req.body;

  return res.status(200).json({ result: arrayToCSVString(array) });
});

app.post('/arrays/append', (req, res) => {
  const { value } = req.body;
  const { array } = req.body;

  return res.status(200).json({ result: addToArray2(value, array) });
});

app.post('/arrays/starts-with-vowel', (req, res) => {
  const { array } = req.body;

  return res.status(200).json({ result: elementsStartingWithAVowel(array) });
});

app.post('/arrays/remove-element', (req, res) => {
  const { array } = req.body;
  const index = parseInt(req.query.index, 10);

  if (!index) {
    // as we are told it removes the first element can we assume index = 0?
    return res.status(200).json({ result: removeNthElement2(0, array) });
  }
  return res.status(200).json({ result: removeNthElement2(index, array) });
});

module.exports = app;
