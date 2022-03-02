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

//new object created for testing
var student={name:'Tom',
            age: 20,
            email:'Tom@email.com',
        };

//apply
var Showuser= function(){
    console.log( this.name);
    return this.age;
}
console.log(`Age = ${Showuser.apply(student)}`)

//bind
var studentBound=Showuser.bind(student);
console.log(`Age = ${studentBound()} `)