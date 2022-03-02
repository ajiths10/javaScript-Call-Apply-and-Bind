//Testing object creation
var numb={num:10};
var numb1={num:1}

//call
var Showage = function(){
    console.log(this.name);
    return this.age;
};
console.log(Showage.call(obj));


//apply
var numberfn = function(a,b,c){
    return this.num+a+b+c;
}
var arr=[10,20,30];
console.log(numberfn.apply(numb,arr))
console.log(numberfn.apply(numb1,arr))

//bind
var bound=numberfn.bind(numb);
console.log(bound(1,2,3));

//object created for testing
var obj={name:'Tom',
        age: 23,
        email:'Tom@email.com',
};
