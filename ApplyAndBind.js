var obj={name:'Tom',
        age: 23,
        email:'Tom@email.com',
};

var Showage = function(a){
    console.log(this.name);
    return this.age+a;
};

console.log(Showage.call(obj,10));