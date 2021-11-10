const users = [{name: 'yagnesh',age: 30,gender: 'male'},{name: 'virat',age: 28,gender: 'male'},{name: 'rohit',age: 32,gender: 'male'},{name: 'dipika',age: 34,gender: 'female'},{name: 'alia',age: 19,gender: 'female'},{name: 'rekha',age: 64,gender: 'female'},{name: 'Taimur',age: 8,gender: 'male'}]

const someData =users.reduce((p,c)=>{
    if (c.name === 'rohit'){
        return true;
    }
    return p;
}, false);
console.log(someData);
const findData =users.reduce((p,c)=>{
    if (c.name === 'rohit'){
        return c;
    }
    return p;
}, {});
console.log(findData);
const everyData =users.reduce((p,c)=>{
    console.log(c);
    if (c.age > 18 && p) {
        return true;
    } else {
        return false;
    }    
    return p;
}, true);
console.log(everyData);

