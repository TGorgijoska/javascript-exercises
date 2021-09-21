const findTheOldest = function(people) {

    let oldestPerson = people.reduce((personA, personB) => {  
        let yearsA, yearsB; 
        if("yearOfDeath" in personA) {
            yearsA = personA.yearOfDeath - personA.yearOfBirth ;
        }    
        else {
            yearsA = (new Date()).getFullYear() - personA.yearOfBirth;
        }
        if("yearOfDeath" in personB) {
            yearsB = personB.yearOfDeath - personB.yearOfBirth ;
        }    
        else {
            yearsB = (new Date()).getFullYear() - personB.yearOfBirth;
        }

        if(yearsA < yearsB ){
            return personB;
        }
        return personA;
    })

    return oldestPerson;
};
/* const findTheOldest = function(array) {
    return array.reduce((oldest, currentPerson) => {
      const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath)
      const currentAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath)
      return oldestAge < currentAge ? currentPerson : oldest
    })
  };
  
  const getAge = function(birth, death) {
    if (!death) {
      death = new Date().getFullYear();
    }
    return death - birth;
  }; 
*/
module.exports = findTheOldest;
