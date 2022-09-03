function parseCount(number) {
    let result = Number.parseInt(number, 10);

    if (isNaN(result) === true) {
        throw new Error("Невалидное значение");
    }

    return result;
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
        return this.a + this.b + this.c;
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

