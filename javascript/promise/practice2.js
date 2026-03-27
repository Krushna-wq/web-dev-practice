const p1 = new Promise((resolve, reject) => {
  setTimeout(() => reject("Error from p1"), 1000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Success from p2"), 2000);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Success from p3"), 3000);
});

Promise.all([p1, p2, p3])
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });


  const p12 = Promise.resolve("A");
const p22 = Promise.resolve("B");
const p32 = Promise.resolve("C");

Promise.all([p12, p22, p32])
  .then((res) => console.log(res))
  .catch((err) => console.log(err));


  const p13 = new Promise((resolve) => {
  setTimeout(() => resolve("p13 success"), 2000);
});

const p23 = new Promise((resolve) => {
  setTimeout(() => resolve("p23 success"), 1000);
});

Promise.race([p13, p23])
  .then(res => console.log(res))
  .catch(err => console.log(err));


  const p14 = Promise.resolve("A");
const p24 = Promise.reject("Error B");
const p34 = Promise.resolve("C");

Promise.allSettled([p14, p24, p34])
  .then(res => console.log(res));