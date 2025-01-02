class Student{
    name;
    grade;
    constructor(name,grade){
        this.name=name;
        this.grade=grade;
       
    }
    setGrade(newGrade){
        console.log(this.grade,"grade");
        this.grade=newGrade;
    }
    getGrade(){
        console.log(this.grade,"after the update Grade");
    }
}
var bb=new Student("Suresh","F");
bb.setGrade("P");
bb.getGrade();