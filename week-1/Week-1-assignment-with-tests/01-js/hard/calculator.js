class Calculator {
  constructor() {
    this.result = 0;
  }

  add(number) {
    if (typeof number !== "number") {
      throw new Error("Invalid input");
    }
    this.result += number;
  }

  subtract(number) {
    if (typeof number !== "number") {
      throw new Error("Invalid input");
    }
    this.result -= number;
  }

  multiply(number) {
    if (typeof number !== "number") {
      throw new Error("Invalid input");
    }
    this.result *= number;
  }

  divide(number) {
    if (typeof number !== "number") {
      throw new Error("Invalid input");
    }
    if (number === 0) {
      throw new Error("Division by zero");
    }
    this.result /= number;
  }

  clear() {
    this.result = 0;
  }

  getResult() {
    return this.result;
  }

  calculate(expression) {
    if (typeof expression !== "string") {
      throw new Error("Invalid input");
    }

    const sanitizedExpression = expression.replace(/\s/g, "");

    if (sanitizedExpression.includes("/0")) {
      throw new Error("Division by zero");
    }

    const result = eval(sanitizedExpression);

    if (isNaN(result)) {
      throw new Error("Invalid expression");
    }

    this.result = result;
  }
}

module.exports = Calculator;