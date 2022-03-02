//call
var obj={name:'Tom',
        age: 23,
        email:'Tom@email.com',
};

var Showage = function(){
    console.log(this.name);
    return this.age;
};

console.log(Showage.call(obj));


//apply
var numb={num:10};
var numb1={num:1}
var numberfn = function(a,b,c){
    return this.num+a+b+c;
}
var arr=[10,20,30];
console.log(numberfn.apply(numb,arr))
console.log(numberfn.apply(numb1,arr))