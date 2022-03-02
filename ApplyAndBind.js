var obj={name:'Tom',
        age: 23,
        email:'Tom@email.com',
};

var Showage = function(){
    console.log(this.name);
    return this.age;
};

console.log(Showage.call(obj));