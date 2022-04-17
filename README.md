Learning Typescript fundamentals with Mike North from LinkedIn

Typescript is superset to javascript,
capable of doing what javscript can do, and with
a lot of strict implications upon on the developer
to minimize bugs and side effects and random 
function outputs!!

### Code 1. create a promise that resolves after sometime
```typescript

@param n number of miliseconds before the promise resolves
*/

function timeout(n: number) {
    return new Promise((res) => setTimeout(res, n));
}
  
/*
add 3 numbers
@param a first number
@param b second number
*/
  
export async function addNumber(a: number, b: number) {
  await timeout(500);
  return a + b;
}
  
(async () => {
  console.log(await addNumber(3, 5));
})();
```
### Code 2. Initializing variables with types
```typescript
 let xyz: number
 xyz = "new string" // not allowed as xyz is number
 xyz = 89
 console.log(xyz)
```

### Code 3. Deciding variable types based on value/conditionals:
```typescript
// "any" is a top type

  const newFunc = (z: any) => {
    switch (true) {
      case 3 === z:
        z = "new string";
        break;
      case 5 === z:
        z = 45;
        break;
      default:
        z = true;
        return z;
    }
    return z
  };
```

### Code 4. Objects:
```typescript
/**************** Object property's types cannot be changed **********/
let xyz = {
    foo: "some string",
    num: 123
}
xyz.num = 'new string' // not allowed
xyz.num = 123 // allowed

/**************** New props cannnot be set in object using . notation **********/
let xyz = {
    foo: 'string'
}
xyz.num = 123 // not allowed

/**************** Props declared as required in type, need to be present in obj **********/

let obj: { firstProp: string, secondprop: number } = {} // not allowed
let obj1: { first: string, second: number } = { first: "were" } // not allowed
let obj3: { first: string, second: number } = { first: "were", second: '123' } // not allowed

let obj2: { firstProp: string, secondprop: number } = { firstProp: "12", secondprop: 12312 } // allowed


/**************** Optional props using '?' **********/
let obj4: { first: string, second?: number } = { first: "were" } // allowed
let obj5: { first: string, second?: number } = { first: "were", second: 23 } // allowed
```

### Code 5. Arrays:
```typescript

let arr: number[] = [] // arr initialized asempty array, can contain only numbers
arr.push(12)
arr2.push("str") // not allowed

let arr2: string[] = [] 
arr2.push("str")

let arr: any[] = []
arr.push(2113)
arr.push("asfssds")
arr.push({a: 'a'})
```

### Code 6. Tuples (Arrays with fixed length):
```typescript
let tup: [number, string, string, number] = [13, "asda", "sadas", 3422342] // allowed

let tup: [number, string] = [] //not allowed
```

### Code 7. Interfaces: for reusing types. --- interfaces are objects.
```typescript
interface HasName {
    name: string,
    phone?: number
}
//or
export interface HasEmail {
    name: string,
    email: string
}
/**************** Using Interfaces to declare types for objects **********/
let newObject: HasName = { name: 'some name', phone: 1231313 }
let newObject1: HasName = { name: 'some name' }

let newObject2: HasEmail = { name: 'some name', email: 'some@mail.com' }
```

### Definitions:

 - Type inferences: means typeScript itself picks p the type of any variable based on the initial value assigned to it. Eg: let x = 5; ts will infer x is of type number.
 - Literal Types: a set of specific allowed values for a variable.
Eg:
```typescript
/*
here x is assigned to number 
and since it’s declared with const
it can’t be reassigned to anything else other than 6.
*/
const x = 6;

// if y is of type see it’s value can only be the string ’dish’
type sweet = ‘dish'
let y: sweet = ‘dish’
let y: sweet = ‘potato’
```
 - Type Annotations: adding inline type to variables. 

Eg:-
```typescript
function add (a: number, b: number) {
    return a + b
}
// the return type is infered as number by ts.
```
 - Typing Functions:
```typescript
function add (a: number, b: number): number {
    return a+b
}
```
