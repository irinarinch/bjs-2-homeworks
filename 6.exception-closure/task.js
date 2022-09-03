function parseCount(number) {
    if (isNaN(Number.parseInt(number, 10)) === true) {
        throw new Error("Невалидное значение");
    }

    return Number.parseInt(number, 10);
}

function validateCount(number) {
    try {
        return parseCount(number); 
    } catch (error) {
        return error;
    } 
}

class Triangle {
    constructor(a, b, c) { 
        this.a = a;
        this.b = b;
        this.c = c;

        if ((a > (b + c)) || (b > (a + c)) || (c > (a + b))) {
            throw new Error("Треугольник с такими сторонами не существует"); 
        }
    }    

    getPerimeter() {
        let result = this.a + this.b + this.c;
        return + result.toFixed(3);
    }

    getArea() {
        let a = this.a;
        let b = this.b;
        let c = this.c;
        let p = this.getPerimeter() / 2;
        let result = Math.sqrt(p*(p - a)*(p - b)*(p - c));

        return + result.toFixed(3); 
    }
}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch {
        return {
            getPerimeter: () => "Ошибка! Треугольник не существует",
            getArea: () => "Ошибка! Треугольник не существует",
        }
    }    
}

