var Person = function() {};
Person.prototype.initialize=function(name,age)
{
    this.name=name;
    this.age=age;
}
// TODO: create the class Teacher and a method teach
class Teacher extends Person{
    teach(sub){
        this.sub=sub;
        console.log(this.name +' '+ 'is now teaching'+' ' + this.sub);


    }
}
him = new Teacher();
him.initialize("Adam",45);
him.teach("Inheritance");
//Adam is now teaching Inheritance
him.initialize("Sumit",45);
him.teach("JavaScript");
