const createPerson = (name, age) => {
  return {name, age
  };
};

const getName = object => {
  return object.name;
};

const getProperty = (property, object) => {
  return object[property];
};

const hasProperty = (property, object) => {
  if (object.hasOwnProperty(property)){
  return true;
  }
  else {
    return false;
  }
  };


const isOver65 = person => {
  if (person.age > 65) {
    return true;
  } else if(person.age <= 65) {
    return false;
  }
  };

const getAges = people => {
  return people.map(person => person.age);
  };

const findByName = (name, people) => {
  const person = people.find(someone => someone.name === name);
  return person;
    
  };


const findHondas = cars => {
   return cars.filter(type => type.manufacturer ==='Honda');
  };


const averageAge = people => {
  return people.reduce((previous, person) => previous + person.age, 0) / people.length;
};

const createTalkingPerson = (name, age) => {
  const person ={
    name,
    age
  };

    person.introduce = newPerson => {
    return `Hi ${newPerson}, my name is ${name} and I am ${age}!`;
  };
  return person;
};

module.exports = {
  createPerson,
  getName,
  getProperty,
  hasProperty,
  isOver65,
  getAges,
  findByName,
  findHondas,
  averageAge,
  createTalkingPerson
};
