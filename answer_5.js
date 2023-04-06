class Car {
    constructor(brand, years, country){
        this.brand = brand;
        this.years = years;
        this.country = country;
    }
    getAge(){
        const currentYear = new Date().getFullYear();
        return currentYear - this.years;
    }
    madeInUS(){
        return this.country=="US";
    }
}

const car = new Car('BYD', 2021, 'China');
console.log(car.brand);
console.log(car.getAge());
console.log(car.madeInUS());
