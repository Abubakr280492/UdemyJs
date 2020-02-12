



//function construction 
var abdi = {
        name: "Abdi",
        yearOfBirth: 1992,
        job: 'student'
};

var Person = function(name,yearOfBirth,job){
    this.name = name;
    this.yearOfBirth= yearOfBirth;
    this.job = job;
    
}

Person.prototype.calculateAge = function(){
    console.log(2020 - this.yearOfBirth);
};

var abdi = new Person("Abdi",1992,'student');
var azizbek = new Person("Azizbek",1998,'Student');
var john = new Person("john", 1965, "retired");

abdi.calculateAge();
azizbek.calculateAge();
john.calculateAge();


//Object.create 

var personProto = {
    calculateAge: function(){
        console.log(2020-this.yearOfBirth);
    }

};

var jon = Object.create(personProto);

jon.name = "Jon";
jon.yearOfBirth = 1988;
jon.job = 'teacher';

var jane = Object.create(personProto,{
    name: {value: "Jane"},
    yearOfBirth: {value:1969},
    job: {value:'designer'} 
});
jon.calculateAge();
jane.calculateAge();
