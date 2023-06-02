console.log("Person1: Shows Ticket");
console.log("Person2: Shows Ticket");

const preMovie = async () => {
  const promiseWifeBringsTickets = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Ticket"), 3000);
  });

  const getPopcorn = new Promise((resolve, reject) => resolve(`Popcorn`));

  const getButter = new Promise((resolve, reject) => resolve(`Butter`));

  const getColdDrinks = new Promise((resolve, reject) => resolve("Cold Drink"));

  let [popcorn, butter, coldDrinks] = await Promise.all([
    getPopcorn,
    getButter,
    getColdDrinks,
  ]);

  console.log(`${popcorn}, ${butter}, and ${coldDrinks}.`);

  return promiseWifeBringsTickets;
};

preMovie().then((m) => console.log(`Person3: Shows ${m}`));

console.log("Person4: Shows Ticket");
console.log("Person5: Shows Ticket");