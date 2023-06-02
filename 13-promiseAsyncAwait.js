console.log("Person1: Shows Ticket");
console.log("Person2: Shows Ticket");

const promiseWifeBringsTickets = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Ticket");
  }, 3000);
});

const getPopcorn = promiseWifeBringsTickets.then((ticket) => {
  console.log("Wife: Here are the tickets.");
  console.log("Husband: We should go in...");
  console.log("Wife: No, I am hungry!");
  return new Promise((resolve, reject) => resolve(`${ticket}, Popcorn`));
});

const getButter = getPopcorn.then((ticket) => {
  console.log("Husband: Here is your popcorn. Let's get in.");
  console.log("Wife: No, I need butter on my popcorn.");
  console.log("Husband: Here is the butter. Let's go.");
  return new Promise((resolve, reject) => resolve(`${ticket}, Butter`));
});

const getColdDrinks = getButter.then((ticket) => {
  console.log("Wife: No, I need cold drink.");
  console.log("Husband: OMG! Here are the drinks.");
  console.log("Wife: Let's go. We are getting late!");
  return new Promise((resolve, reject) =>
    resolve(`${ticket}, and cold drinks.`)
  );
});
getColdDrinks.then((message) => console.log(message));

console.log("Person4: Shows Ticket");
console.log("Person5: Shows Ticket");