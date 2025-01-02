class Vehicle{
    model;
    licensePlate;
    mileage;
    constructor(model,licensePlate,mileage){
        this.model=model;
        this.licensePlate=licensePlate;
        this.mileage=mileage;
    }
    drive(miles){
        
        console.log(miles,"miles Increased");
        this.mileage=this.mileage*miles;
    }
    getMileage(){
        console.log(this.mileage,"geting mileage");
    }
}
var bb=new Vehicle("Inner","18029837762",5000);
bb.drive(100);
bb.getMileage();