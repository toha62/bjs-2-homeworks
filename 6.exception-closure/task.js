function parseCount(count) {
  if (Number.isNaN(Number.parseInt(count))) {
    throw new Error('Невалидное значение');
  }
  return Number.parseInt(count);
}

function validateCount (count) {
  try {
    return parseCount(count);
  } catch(error) {    
    return error;
  }
}

class Triangle {
  constructor(sideA, sideB, sideC) {
    if (sideA >= sideB + sideC || sideB >= sideC + sideA || sideC >= sideB + sideA) {
      throw new Error('Треугольник с такими сторонами не существует');
    }
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
    this.perimeter = this.sideA + this.sideB + this.sideC;
  }

  getPerimeter() {
    return this.perimeter;
  }

  getArea() {
    return +(Math.sqrt((this.perimeter / 2) * (this.perimeter / 2 - this.sideA) * (this.perimeter / 2 - this.sideB) * 
      (this.perimeter / 2 - this.sideC))).toFixed(3);
    
  }
}

function getTriangle(sideA, sideB, sideC) {
  try {
    return new Triangle(sideA, sideB, sideC);
  } catch {
    return {
      getPerimeter() {
        return 'Ошибка! Треугольник не существует';
      },    
      getArea() {
        return 'Ошибка! Треугольник не существует';
        
      },
    }
  }
}