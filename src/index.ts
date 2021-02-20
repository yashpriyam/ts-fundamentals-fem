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

function sendMessage(
    this: HasEmail & HasName,
    prefferredMethod: "pone" | "email"
) {
    if(prefferredMethod === "email") {
        console.log("sendEmail");
        sendEmail(this)
    } else {
        console.log("sendMessage");
        sendTextMessage(this)        
    }
}
const c = { name: "somename", phone: 21321312321, email: "dsdfsdfsdfsf" }

function invokeSoon(cb: any, timeout: number){
    setTimeout(() => cb.call(null), timeout)
}

invokeSoon(() => sendMessage('email'), 500) // this function won't work because we haen't deined what "this" will point to
const bound = () => sendMessage.bind(c, 500) // here we're passing an object for "this"
// since this: HasEmail & HasName
// thus c = { name: "somename", phone: 21321312321, email: "dsdfsdfsdfsf" }
invokeSoon(() => bound(), 600)

// with call/apply
invokeSoon(() => sendMessage.apply(c, ["phone"]), 500)
