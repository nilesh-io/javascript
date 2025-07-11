// Array and array method practice

const orders = [
  {
    id: 1,
    items: [
      { name: "Book", price: 200, qty: 2 },
      { name: "Pen", price: 20, qty: 5 },
    ],
  },
  { id: 2, items: [{ name: "Bag", price: 500, qty: 1 }] },
];
const totalRevenue = (array) => {
  return array
    .map((item) =>
      item.items.reduce((itemSum, value) => {
        return itemSum + value.price * value.qty;
      }, 0)
    )
    .reduce((total, value) => total + value, 0);
};
console.log(totalRevenue(orders));

const users = [
  { name: "Alice", country: "India" },
  { name: "Bob", country: "USA" },
  { name: "Charlie", country: "India" },
];
const groupByCountry = (array) => {
  return array.reduce((acc, val) => {
    const country = val.country;
    if (acc[country]) {
      acc[country].push(val.name);
    } else {
      acc[country] = [val.name];
    }
    return acc;
  }, {});
};
console.log(groupByCountry(users));

const products = [
  { name: "Shirt", category: "Clothing" },
  { name: "Laptop", category: "Electronics" },
  { name: "Pants", category: "Clothing" },
  { name: "Headphones", category: "Electronics" },
  { name: "Keyboard", category: "Electronics" },
];
const mostFrequent = (array) => {
  const orderSum = array.reduce((acc, value) => {
    acc[value.category] = (acc[value.category] || 0) + 1;
    return acc;
  }, {});
  return Object.entries(orderSum).reduce((a, b) => {
    return b > a ? b : a;
  });
};
console.log(mostFrequent(products));

const users1 = [
  { name: "Nina", email: "nina@example.com", isActive: true },
  { name: "Raj", email: "", isActive: true },
  { name: "Sara", email: "sara@example.com", isActive: false },
  { name: "Lee", email: "lee@example.com", isActive: true },
];
const isActive = (array) => {
  return array.filter((item) => item.isActive && item.email);
};
console.log(isActive(users1));

const orders1 = [
  { id: 1, items: [{ name: "Notebook" }, { name: "Pen" }] },
  { id: 2, items: [{ name: "Pencil" }] },
];
const flat = (array) => {
  return array.map((item) =>
    item.items.reduce((acc, init) => {
      acc[init.name] = [init.name];
      return acc;
    }, {})
  );
};
console.log(flat(orders1));

const students = [
  { name: "Arun", marks: 75 },
  { name: "Neha", marks: 45 },
  { name: "Kiran", marks: 30 },
];
const addStatus = (array) => {
  return array.map((item) => {
    if (item.marks >= 50) {
      item.status = "passed";
    } else {
      item.status = "failed";
    }
    return item;
  });
};
console.log(addStatus(students));

const users2 = [
  { id: 101, name: "Aman" },
  { id: 102, name: "Sara" },
];
const group = (array) => {
  return array.reduce((acc, value) => {
    acc[value.id] = [value];
    return acc;
  }, {});
};
console.log(group(users2));

const studentss = [
  { name: "John", marks: 92 },
  { name: "Amy", marks: 86 },
  { name: "Brian", marks: 95 },
  { name: "Zara", marks: 78 },
];
const topTwo = (array) => {
  return array
    .sort((a, b) => b.marks - a.marks)
    .slice(0, 2)
    .map(
      (item) => `Top 2 scores : ${item.name} their scores are ${item.marks}`
    );
};
console.log(topTwo(studentss));
