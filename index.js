// Code your solution here
//const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];
//const repeated = drivers.filter(function(name) {
//  return name === "Bobby"
//})
//console.log(repeated) 

const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby'];

function findMatching (array,nameLetters) {
    const matchArray = []
    for(let i = 0; i < array.length; i++) {
      const driverName = array[i].toLowerCase()
      if (driverName.includes(nameLetters.toLowerCase())) {
        matchArray.push(array[i])
      }
    }
    return matchArray
  }
  findMatching (drivers,"obb");
  console.log(findMatching (drivers,"obb"));


  function fuzzyMatch (array,nameLetters) {
    const matchArray = []
    for(let i = 0; i < array.length; i++) {
      const driverName = array[i].toLowerCase()
      if (driverName.startsWith(nameLetters.toLowerCase())) {
        matchArray.push(array[i])
      } 
    }
    return matchArray
  }

fuzzyMatch (drivers,"ly");
console.log(fuzzyMatch (drivers,"ly"));

const driversUpgrade = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

  function matchName(array, name) {
    const matchArray = []
      for(let i = 0; i < array.length; i++) {
        const driverName = array[i]
        if (driverName.name.includes(name)) {
          matchArray.push(array[i])
        }
      }
    return matchArray
  }
  
  matchName(driversUpgrade,"Bobby");
  console.log(matchName(driversUpgrade,"Bobby"))

  