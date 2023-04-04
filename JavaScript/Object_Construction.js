class Backpack{
    constructor(
        name,
        volume,
        color,
        pocketNum,
        strapLengthL,
        strapLengthR,
        lidOpen
    ){
        this.name = name;
        this.volume = volume;
        this.color = color;
        this.pocketNum = pocketNum;
        this.strapLength = {
            left: strapLengthL,
            right: strapLengthR
        };
        this.lidOpen = lidOpen;
        this.dateAcquired = this.dateAcquired;
    }
    toggleLid(lidStatus){
        this.lidOpen = lidStatus;
    }
    newStrapLength(lengthLeft, lengthRight){
        this.strapLength.left = lengthLeft;
        this.strapLength.right = lengthRight;
    }


}

// create a new instance of the Backpack class
const everydayPack = new Backpack(
    "Everyday Backpack",
    30,
    "grey",
    15,
    26,
    26,
    false
);

// create a new object type
class Book{
    constructor(
        title,
        author,
        pages,
        read
    ){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
    readBook(){
        this.read = true;
    }
}

class car{
    constructor(
        make,
        model,
        color,  
        year,
        isRunning
    ){
        this.make = make;
        this.model = model;
        this.color = color;
        this.year = year;
        this.isRunning = isRunning;
    }
    turnOn(){
        this.isRunning = true;
    }
    turnOff(){
        this.isRunning = false;
    }
    make(){
        return this.make;
    }
}