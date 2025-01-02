class Product{
    name;
    price;
    category;
    constructor(name,price,category){
        this.name=name;
        this.price=price;
        this.category=category;
        
    }
    Applydisc(amount){
        console.log(amount,"original Amount");
    }
    getpriceaftreDisc(amount){
        var a=this.price-amount;
        console.log(a,"After apply discount");
    }
 

}
var bb=new Product("Inner",110,"level1");
bb.Applydisc(110);
bb.getpriceaftreDisc(10);