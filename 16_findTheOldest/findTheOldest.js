const findTheOldest = function(obj) {
    return obj.reduce( (old, current) => {

    const older = getAge(old.yearOfBirth, old.yearOfDeath);
    const currenter = getAge(current.yearOfBirth, current.yearOfDeath);
    
    if(older>currenter){
        return old;
    } else {
       return current;
    }

        

    });
    

};

const getAge = function (birth, death) {
  if (!death) {
    death = new Date().getFullYear();
  }
  return death - birth;
};


// Do not edit below this line
module.exports = findTheOldest;
