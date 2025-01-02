class Book{
    title;
    author;
    isbn;
    constructor(title,author,isbn){
        this.title=title;
        this.author=author;
        this.isbn=isbn;
        
    }
    checkout(){
        console.log(this.title,"Checked the book");
    }
    returnBook(){
        console.log(this.title,"return the book");
    }
    UpdateTitle(newTitle){
        this.title=newTitle;
        console.log(this.title,"Title has been changed");
    }

}
var bb=new Book("Inner","sadhuguru","101");
console.log(bb);
bb.checkout();
bb.returnBook();
bb.UpdateTitle("engineering");