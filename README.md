Learning Typescript fundamentals with Mike North from LinkedIn

Typescript is superset to javascript,
capable of doing what javscript can do, and with
a lot of strict implications upon on the developer
to minimize bugs and side effects and random 
function outputs!!

### Code 1. create a promise that resolves after sometimeCode
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

[![Yash's GitHub stats](https://github-readme-stats.vercel.app/api?username=yashpriyam&repo=ts-fundamentals-fem&hide=stars&show_icons=true&theme=onedark)](https://github.com/anuraghazra/github-readme-stats)

[![Top Langs](https://github-readme-stats.vercel.app/api/top-langs/?username=yashpriyam&hide=stars&show_icons=true&theme=onedark&langs_count=8)](https://github.com/anuraghazra/github-readme-stats)
