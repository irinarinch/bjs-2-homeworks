class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    fix() {
        this.state *= 1.5;
    } 

    set state(newState) {
        if (newState <= 0) {
            this._state = 0;
        } else if (newState >= 100) {
            this._state = 100;
        } else {
            this._state = newState;                  
        }
    }  

    get state() {
        return this._state;
    }    
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super (name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super (name, releaseDate, pagesCount);
        this.type = "book";
        this.author = author;
    }    
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super (author, name, releaseDate, pagesCount);
        this.type = "novel";      
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super (author, name, releaseDate, pagesCount);
        this.type = "fantastic";      
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super (author, name, releaseDate, pagesCount);
        this.type = "detective";      
    }
}

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }        
    }

    findBookBy(type, value) {       
        return this.books.find(book => book[type] === value) || null;      
    }

    giveBookByName(bookName) {  
        let bookIndex = this.books.indexOf(this.findBookBy("name", bookName));
        
        if (bookIndex !== -1) {            
            return this.books.splice(bookIndex,1)[0];
        } else {
            return null;
        }   
    }
}

class Student {
    constructor(name) {
        this.name = name;
        this.journal = {};
    }

    addMark(mark, subject) {
        if (mark >= 1 && mark <= 5) {
            if (this.journal[subject] === undefined) {
                this.journal[subject] = [mark];
            } else {
                this.journal[subject].push(mark);
            }            
        } else {
            console.log("Ошибка, оценка должна быть числом от 1 до 5");
        } 
    }

    getAverageBySubject(subject) { 
        if (this.journal[subject] === undefined) {
            console.log("Несуществующий предмет");            
        } else {
            let avgBySubject = this.journal[subject].reduce((acc, mark) => acc + mark, 0) / this.journal[subject].length;
            console.log(`Средний балл по предмету ${subject} ${avgBySubject}`);  
        }
    }
    
    getAverage() {
        let sum = 0;

        for (let i = 0; i < Object.values(this.journal).length; i += 1) {
            sum += Object.values(this.journal)[i].reduce((acc, mark) => acc + mark, 0) / Object.values(this.journal)[i].length;
        }

        let avg = sum / Object.values(this.journal).length;

        console.log(`Средний балл по всем предметам ${avg}`);    
    }


    /*       
    getAverageBySubject(subject) { 
        if (this.journal[subject] === undefined) {
            console.log("Несуществующий предмет");            
        } else {
            return this.journal[subject].reduce((acc, mark) => acc + mark, 0) / this.journal[subject].length;            
        }
    }
    
    getAverage() {
      return Object.keys(this.journal).reduce((acc, subject) => acc + this.getAverageBySubject(subject), 0) / Object.keys(this.journal).length
    }
    */

    exclude(reason) {
        delete this.marks;
        delete this.subject;
        return reason;
    }
}
