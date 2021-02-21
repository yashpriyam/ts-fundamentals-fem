// /*
// create a promise that resolves after sometime
// @param n number of miliseconds before the promise resolves
// */

// function timeout(n: number) {
//     return new Promise((res) => setTimeout(res, n));
//   }
  
//   /*
//   add 3 numbers
//   @param a first number
//   @param b second number
//   */
  
//   export async function addNumber(a: number, b: number) {
//     await timeout(500);
//     return a + b;
//   }
  
//   (async () => {
//     console.log(await addNumber(3, 5));
//   })();


//   let xyz: number
// //   xyz = "new string"
//   xyz = 89
//   console.log(xyz)

/**************** not allowed in ts **********/
// let xyz = {
//     foo: "some string",
//     num: 123
// }
// xyz.num = 'new string'

/**************** not allowed in ts **********/
// let xyz = {
//     foo: 'string'
// }
// xyz.num = 123

// console.log(xyz);



//  "z" her is top type
//   const newFunc = (z: any) => {
//     switch (true) {
//       case 3 === z:
//         z = "new string";
//         break;
//       case 5 === z:
//         z = 45;
//         break;
//       default:
//         z = true;
//         return z;
//     }
//     return z
//   };
//   console.log(newFunc(5));
  
// let arr: number[] = []
// arr.push(12)
// arr.push("str")

// let arr = [34]
// arr.push(23)
// arr.push("str")
// console.log(arr);

// let tup: [number, string, string, number] = [13, "asda", "sadas", 3422342]

// let tup: [number, string] = [] //error

// Objects
// let obj: { firstProp: string, secondprop: number } = {} //not allowed
// let obj2: { firstProp: string, secondprop: number } = { firstProp: "12", secondprop: 12312 } //works

// let obj3: { first: string, second: number } = { first: "were" } //doesn't works
// let obj4: { first: string, second?: number } = { first: "were" } //works
// let obj5: { first: string, second?: number } = { first: "were", second: 23 } //works
// console.log(obj4, obj5);


// Interfaces
export interface HasName {
    name: string,
    phone?: number
}

export interface HasEmail {
    name: string,
    email: string
}
// we can assign the contactinfo variable to either of the two type of interfaces based on some conditional

// Intersection: using the | (or) operator 
// let contactInfo: HasEmail | HasName = Math.random() * 10 > 5 ? { 
//     name: "asdsd",
//     phone: 2312313
//  } : { 
//     name: "string",
//     email: "email"
//   }
// console.log(contactInfo);
// console.log(contactInfo.name);
// console.log(contactInfo.phone); //won't work, not the intersecting property
// console.log(contactInfo.email); //wont work, not the intersecting property

// Union type, using the & operator:
// let contactInfo: HasEmail & HasName = {
//     name: "asdasd",
//     phone: 12313123,
//     email: "sdasdasdad"
// }
// console.log(contactInfo.name);
// console.log(contactInfo.phone);
// console.log(contactInfo.email);


// Functions------------------------------------
// input args type defined, return type defined
// function sendEmail(to: HasEmail): { recipient: string, body: string }{
//     return {
//         recipient: `${to.email}`,
//         body: `${to.name}`
//     }
// }
// console.log(sendEmail({name: "killer", email: "dfdfsdfdf"}));

// Arrow function equivalent

// const sendEmail = (to: HasEmail): { recipient: string, body: string } => {
//     return {
//         recipient: `${to.email}`,
//         body: `${to.name}`
//     }
// }
// console.log(sendEmail({name: "killer", email: "dfdfsdfdf"}));

// only input type defined return type not defined
// function sendEmail(to: HasName){
//     return {
//         recipient: `${to.email}`,
//         body: `${to.phone}`
//     }
// }
// console.log(sendEmail({name: "killer", phone: 231231}));

// const sendEmail = (...to: number[]): { recipient: string, body: string } => {
//     console.log(to);
    
//     return {
//         recipient: "asdasdas",
//         body: "asdasdas"
//     }
// }
// console.log(sendEmail(1,2,3));


// function contactInfo(method: "email" | "phone", ...people: (HasName | HasEmail)[]): void {
//     if (method === "email"){
//         (people as HasEmail[]).forEach(sendEmail)
//     } else {
//         (people as HasName[]).forEach(sendTextMessage)
//     }
// }

// // Function signatures: ways of calling this function:
// console.log(function contactInfo(method: "email", ...people: HasEmail[]): void);

// function contactInfo(method: "phone", ...people: HasName[]): void
// overloading the signatures

// function sendMessage(
//     this: HasEmail & HasName,
//     prefferredMethod: "pone" | "email"
// ) {
//     if(prefferredMethod === "email") {
//         console.log("sendEmail");
//         sendEmail(this)
//     } else {
//         console.log("sendMessage");
//         sendTextMessage(this)        
//     }
// }
// const c = { name: "somename", phone: 21321312321, email: "dsdfsdfsdfsf" }

// function invokeSoon(cb: any, timeout: number){
//     setTimeout(() => cb.call(null), timeout)
// }

// invokeSoon(() => sendMessage('email'), 500) // this function won't work because we haen't deined what "this" will point to
// const bound = () => sendMessage.bind(c, 500) // here we're passing an object for "this"
// // since this: HasEmail & HasName
// // thus c = { name: "somename", phone: 21321312321, email: "dsdfsdfsdfsf" }
// invokeSoon(() => bound(), 600)

// // with call/apply
// invokeSoon(() => sendMessage.apply(c, ["phone"]), 500)

/**Type aliases------------------ */
// const x = [1,2,3,[5,6,7]]
// type numVal = 1|2|3|numArr
// type numArr = numVal[]  //numVal is defined as numArr and numArr is defined as numVal
// ts compiler prevents you from creating self-referential type
// solution is:
// interface NumArr extends Array<numVal>
//instead of creating a type Alias, create an interface which extends the type alias


// interface extending another interface
interface ContactMessenger1 {
    (contact: HasEmail | HasName, message: string): void
}

// type alias extending interface
type ContactMessenger2 = (
    contact: HasEmail | HasName,
    message: string
) => void

// for emailer function, we're using ContactMessenger1 interface, 
// so we don't need to define the type of _contact and _message 
// and the type of return of the emailer function
// this is called as getting contextual reference from function types
// const emailer: ContactMessenger1 = (_contact, _message) => {
//     /* code */
// }

// construct signatures: similar to function/call signatures, except for using the "new" keywrd

interface ContactMessenger3 {
    new (...args: any[]): HasEmail | HasName
}

// interface over array

/*erroneous*/
// interface PhoneNumberDict {
//     [numberName: string]: { areaCode: number, num: number }
// }

// const d: PhoneNumberDict = {}
// if we do
// d.abc // ts doesn't gives error here but it's an error, it is a hard to track down error in ts

/*correct approach*/
// by adding undefined, we force a check on d.abc

// this is called index signatures:
// you can have 1 string index signature and 1 number index signature
interface PhoneNumberDict1 {
    [numberName: string]: undefined | { areaCode: number; num: number; }
}

// const c: PhoneNumberDict1 = {}
// c.abc
// if (c.abc) {
//     c.abc
// }
// // or
// if (typeof c.abc === 'object') {
//     c.abc
// }
// // or
// if (typeof c.abc === 'string') {
//     c.abc //the type of c.abc is shown as "never" means this could 
//     // never be defined because any property
//     // on object c can be either undefined or object { areaCode: number, num: number }
// }

// using the index signature interface

// const phoneDict: PhoneNumberDict1 = {
//     office: { areaCode: 321, num: 131232 },
//     home: { areaCode: 21233, num: 2312323} //you can't have anyother name
//     // in the object, make a spel mistake and ts will warn
// }

// redefining the PhoneNumberDict1 interface to add stuff to it:
// interface PhoneNumberDict1 {
//     home: {
//         areaCode: number,
//         num: number
//     },
//     office: {
//         areaCode: number,
//         num: number
//     }
// }
// after doing this somehow magically we can add any new prop to phoneDict
// const phoneDict1: PhoneNumberDict1 = {
//     office: { areaCode: 321, num: 131232 },
//     home: { areaCode: 21233, num: 2312323},
//     iphone: { areaCode: 123131, num: 1231313} //this "iphone would not throw error"
// }

// --------Classes in typescript
// export class Contact implements HasEmail {
//     email: string;
//     name: string;
//     constructor(name: string, email: string) {
//         this.email = email;
//         this.name = name;
//     }
// }

// class ParamPropContact implements HasEmail {
//     constructor(
//         public name: string,
//         public email: string = "no email"
//     ){
//         //no-code
//     }
// }

// const x = new ParamPropContact('a', 'b')
// x.name
// x.email
 
// class ParamPropContact2 implements HasEmail {
//     constructor(
//         public name: string,
//         protected email: string = "no email"
//     ){
//         //no-code
//     }
// }
// const x2 = new ParamPropContact2('c', 'd')
// x2.name
// x2.email // --can't access email from outside as it is protected prop



// class OtherContact implements HasEmail, HasName {
//     protected age: number = 0
//     // or you can also do
//     // readonly age: number = 0
//     constructor(
//         public name: string,
//         public email: string,
//         public phone: number
//     ){
//         this.age = 35
//     }
// }

// class OtherContact2 implements HasEmail, HasName {
//     protected age: number = 0
//     private passwordVal: string | undefined
//     constructor(
//         public name: string,
//         public email: string,
//         public phone: number
//     ){
//         this.age = 35

//     }
//     get password(): string{ //any request to access the password will hit here
//         if(!this.passwordVal){
//             this.passwordVal = "password"
//         }
//         return this.passwordVal
//     }
// }


// -----Abstract classess-------------

// abstract class AbstractContact implements HasEmail, HasEmail {
//     public abstract phone: number; //abstract field
//     constructor (
//         public email: string,
//         public name: string
//     ){}
//     abstract sendEmail(): void //abstract method
// }

// class FinalCount extends AbstractContact{
//     constructor(
//         public phone: number;
//         name: string;
//         email: string
//     ){
//         super(name, email)
//     }
//     // untill abstract method sendEmail is not added
//     // ts gives error on finalCount class
//     sendEmail(){
//         // mandatory
//         console.log("send email");
//     }

// }





// Practicing converting a js file to a ts File

//Generics-------------------------

// a simple wrapper function in js, 
// just wraps the input into something and returns it
// to use
// function wrappedValue(x) {
//     return {
//         value: x
//     }
// }
// similarly we create an interface which is a wrapper for types
// this interface has a "value" and "type" of that value is not fixed
// it is what ever we pass as X,
// so this is a generic (or generic type) can use this interface
// at different places with different "type" for the "value" field inside it
interface WrappedValue<X> {
    value: X
}

// let val: WrappedValue<string[]> = { value: [] }
//here the value is of "type" array of strings
// val.value

// let val2: WrappedValue<string[]> = { value: '' }
// this error occurs
// Type 'string' is not assignable to type 'string[]'
// The expected type comes from property 'value' 
// which is declared here on type 'WrappedValue<string[]>'

let num: WrappedValue<number[]> = { value: [] }
//here the value is of "type" array of numbers

// here we're declaring an interface where input can be
// any type you want and output would be a boolean
interface FilterFunction<T = any> {
    (val: T): boolean
}

const stringFiters: FilterFunction<string> = val => typeof val === 'string'
stringFiters(0) // throws error
stringFiters('abc') // works

// but if we do, without any type for T, it falls back to "any" because of T = any in interface
const stringFiters2: FilterFunction = val => val
stringFiters2(0) // works


// Type parameters:
// We can have a promise which resolves to any value, 
// the type of the value to which the promise resolves to, 
// will become the type of the promise using this implementation:

function resolveOrTimeout<T>(promise: Promise<T>, timeout: number): Promise<T> {
    return new Promise<T>((resolve, reject) => {
        const task = setTimeout(() => reject("time up"), timeout)
        
        promise.then(val => {
            clearTimeout(task)
            resolve(val)
        })
    })
}
resolveOrTimeout(fetch(""), 3000)


// Constraints and scopes:----------------------

function arrayToDict<T extends { id: string }>(array: T[]): { [k: string]: T }{
    // by this line (array: T[]): { [k: string]: T }, we're trying to 
    // transofrm an array of type T to a dictionary
    const out: {[ k: string ]: T } = {}
    array.forEach(val => {
        out[val.id] = val
    })
    return out
}

// we can also use in place of this <T extends { id: string }>(array: T[])
// this: (array: ({ id: string })[])
// we are defining the input arg explicitly to be of type array of objects 
// with atleast the id property
function arrayToDict1(array: ({ id: string })[]): { [k: string]: { id: string} }{
    // by this line (array: T[]): { [k: string]: T }, we're trying to 
    // transofrm an array of type T to a dictionary
    const out: {[ k: string ]: { id: string} } = {}
    array.forEach(val => {
        out[val.id] = val
    })
    return out
}

// scopes of type parameters
function startTuple<T>(a: T) {
    return function finishTuple<U>(b: U){
        return [a, b] as [T, U]
    }
}

const myTuple = startTuple(["first"])(43)