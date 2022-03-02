//Testing object creation
var numb={num:10};
var numb1={num:1}

//call
var Shownum = function(){
    return this.num;
};
console.log(Shownum.call(numb));
console.log(Shownum.call(numb1));

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
var student={name:'Tom',
            age: 23,
            email:'Tom@email.com',
        };
