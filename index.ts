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
 abstract class Driver{
//Метод constructor служить для того щоб ініціалізувати наш обєкт. Всередину нього ми передаємо поля які потрібно ініціалізувати.Тобто ми ініціалізуємо властивості класу за допомогою конструктору
    constructor(protected name:string, protected age:number) {
        this.name = name;//Це дані які прийшли ззовні
        this.age = age;//Це дані які прийшли ззовні
    };
//Стоврили Гетер(geter) - метод який може доступатись до private полів, тобто зчитувати їх
    get Age(): number{
        return this.age;
    }
//Створили Сетер(seter) - метод який може доступатись до private полів, тобто змінювати їхні значення
    set Age(age: number) {
        if (age <= this.age) {
            console.log("Error");
        } else { 
        this.age = age;
    }
    }

    public getDriverInfo(): void{
        console.log("Driver name:", this.name, "\nAge", this.age);
    }
}
/*Стоврили driver1, який буде екземпляром класу Driver */
// const driver1 = new Driver("Boby", 35);
// driver1.getDriverInfo();
// driver1.age = 100500;
// driver1.getDriverInfo();
// const driver2 = new Driver("Derek", 40);
// driver2.getDriverInfo();
// driver2.Age = 70;
// console.log("Age driver2 =", driver2.Age);



//Інтерфейс це щось схоже на клас, який можна імплементувати(унаслідувати) іншим класам, але В інтерфейсах тільки опис того всього що реалізовано в насліднику(того хто його імплементує)
interface ILicense{
    category: string,
    permit: boolean,
    prisonCheck(): boolean,
 
}

interface ItTest{
    test:string,
}

/*Створили клас,який унаслідував з абстрактного класу поля name,age. І створили нове поле в цьому класі expirience */
class TruckDriver extends Driver implements ILicense, ItTest{
    constructor(
        protected name: string,
        protected age: number,
        private expirience:number,
    ) {
        super(name, age);//Так ми вказали що унаслідували поля з абрстактного класу і які саме поля
        this.expirience = expirience;
    }
    test: string;
    category= "E";
    permit= true;
    prisonCheck(): boolean { 
        return true;
    }
    public getDriverInfo(): void{
        console.log("Driver name:", this.name, "\nAge", this.age, "\nExpirience", this.expirience,"\nCategory", this.category,"\nPermit", this.permit);
    }
    checkWorkingDay<T>(data :T): void{//Шаблонна функція, може приймати будь-який тип даних
           console.log("to diner left...",data, " hours")
       }
}

let dimas = new TruckDriver("Dimas", 56, 61);
dimas.getDriverInfo();
console.log("PrisonCkeck = ", dimas.prisonCheck());
dimas.checkWorkingDay(2);