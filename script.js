// async function getData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(455);
//     }, 3000);
//   });
// }

async function getData() {
    let x = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
          title: 'foo',
          body: 'bar',
          userId: 1,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
    let data = await x.json()
    console.log(data)
    
  }

async function main() {

console.log("loading one");
console.log("loading one");
console.log("loading one");

console.log("Load data");

let data = await getData();

console.log(data);
console.log("after await data...")
console.log("after await data...")
}

main()




// data.then((v) => {
//   console.log("process one");

//   console.log("loading one");
//   console.log("loading two");
// });
