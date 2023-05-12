class Operations {
    constructor(n1,n2) {
        this.n1 = n1;
        this.n2 = n2;
    }
    sum() {
        let result = this.n1 + this.n2;
        return result;
    }
    sub() {
        let result = this.n1 - this.n2;
        return result;
    }
    mult() {
        let result = this.n1 * this.n2;
        return result;
    }
    div() {
        let result = this.n1 / this.n2;
        return result;
    }
    getResult() {
        console.log(`Addition: ${this.sum()}`);
        console.log(`Subtraction: ${this.sub()}`);
        console.log(`Multiplication: ${this.mult()}`);
        console.log(`Division: ${this.div()}`);
    }
}

let operations = new Operations(2,3);
operations.getResult();

