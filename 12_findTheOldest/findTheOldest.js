const findTheOldest = function(people) {
  const date = new Date();
  const sorted = people.sort(
    (personA, personB) => {
      personALastYear = personA.yearOfDeath || date.getFullYear();
      personBLastYear = personB.yearOfDeath || date.getFullYear();
      const personAAge = personALastYear - personA.yearOfBirth;
      const personBAge = personBLastYear - personB.yearOfBirth;
      return (personAAge < personBAge) ? 1 : -1;
    }
  )
  return sorted[0];
};

// Do not edit below this line
module.exports = findTheOldest;
