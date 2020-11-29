var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
console.log("TypeSctipt Works");
// let age = 10;
// console.log("age =",age);
// console.log(typeof(age));
// let arr = [1,4,7];
// console.log(arr);
// let arr2 = [true,"bob",45];
// console.log(arr2);
/*створення масиву з типом даних number -  number[]. Тобто це масив який може мати тільки числові значення */
// let numArr: number[] = [1, 2, 3, 4, 5];
// console.log(numArr);
// numArr.push(100500);
// console.log(numArr);
/*створення масиву з типом даних string -  string[]. Тобто це масив який може мати тільки строкові значення */
// let strArr: string[] = ["C++", "JS", ".NET"];
// console.log(strArr);
/* Створили змішаний масив, тобто окремо кожному елементу масиву вказали який то буде тип даних*/
// let mixedArr: [boolean, number, string, string] = [
//   true,
//   44,
//   "Stiven",
//   "Sinior",
// ];
// console.log(mixedArr);
/*Створили свій тип даних Person за допомогою команди type */
// type Person = {
//   name: string;
//   age: number;
//   skills: string[];
//   showSkills: () => string[];// Створення метода
//   showPerson?: () => void;// знак питання біля оголошення метода означає що даний метод не обовязково вказувати при оголошенні обєкта використовуючи даний тип даних(Person)
// };
// /*створили обєкт використавши для його оголошення тип даних Person */
// let person: Person = {
//   name: "Bill",
//   age: 56,
//   skills: [],
//   showSkills(): string[] {
//     return this.skills;
//   },
//   showPerson(): void {
//     console.log("Name: ",this.name,"\nAge: ",this.age,"\nSkills: ",this.skills);
//   },
// };
// person.skills = ["C++", "JS", "CSS"];
// person.showSkills();
// person.showPerson();
/*Створили свій тип даних USER, який має 2 значення і вони обидва стірнгові */
// type User = { login: string; password: string };
// /*Створили обєкт user,який є типм даних User(вище створений) */
// const user: User = {
//   login: "bob",
//   password: "qwertywefewfwef",
// };
// /*створення функції в середину якої ми передаємо значення user і вказуємо що воно має тип даних User */
// function LogIn(user: User): void {
//   console.log("Login: ", user.login, "\nPassword: ", user.password);
// }
// LogIn(user);
/*Створили змінну давши їй тип "any", що означає цій змінній можна присвоїти будь-який тип даних */
// let test: any = 10;
// console.log("test = ", test);
// test = "Rest";
// console.log("test = ", test);
// 
//  OOP
//Створили клас Driver
var Driver = /** @class */ (function () {
    //Метод constructor служить для того щоб ініціалізувати наш обєкт. Всередину нього ми передаємо поля які потрібно ініціалізувати.Тобто ми ініціалізуємо властивості класу за допомогою конструктору
    function Driver(name, age) {
        this.name = name;
        this.age = age;
        this.name = name; //Це дані які прийшли ззовні
        this.age = age; //Це дані які прийшли ззовні
    }
    ;
    Object.defineProperty(Driver.prototype, "Age", {
        //Стоврили Гетер(geter) - метод який може доступатись до private полів, тобто зчитувати їх
        get: function () {
            return this.age;
        },
        //Створили Сетер(seter) - метод який може доступатись до private полів, тобто змінювати їхні значення
        set: function (age) {
            if (age <= this.age) {
                console.log("Error");
            }
            else {
                this.age = age;
            }
        },
        enumerable: false,
        configurable: true
    });
    Driver.prototype.getDriverInfo = function () {
        console.log("Driver name:", this.name, "\nAge", this.age);
    };
    return Driver;
}());
/*Створили клас,який унаслідував з абстрактного класу поля name,age. І створили нове поле в цьому класі expirience */
var TruckDriver = /** @class */ (function (_super) {
    __extends(TruckDriver, _super);
    function TruckDriver(name, age, expirience) {
        var _this = _super.call(this, name, age) || this;
        _this.name = name;
        _this.age = age;
        _this.expirience = expirience;
        _this.category = "E";
        _this.permit = true;
        _this.expirience = expirience;
        return _this;
    }
    TruckDriver.prototype.prisonCheck = function () {
        return true;
    };
    TruckDriver.prototype.getDriverInfo = function () {
        console.log("Driver name:", this.name, "\nAge", this.age, "\nExpirience", this.expirience, "\nCategory", this.category, "\nPermit", this.permit);
    };
    TruckDriver.prototype.checkWorkingDay = function (data) {
        console.log("to diner left...", data, " hours");
    };
    return TruckDriver;
}(Driver));
var dimas = new TruckDriver("Dimas", 56, 61);
dimas.getDriverInfo();
console.log("PrisonCkeck = ", dimas.prisonCheck());
dimas.checkWorkingDay(2);
