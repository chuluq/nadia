import { v4 as uuidv4 } from "uuid";

export const menus = [
  {
    id: uuidv4(),
    name: "Snack x Salads",
    subMenu: [
      {
        id: uuidv4(),
        name: "Croque monsieur",
        desc: "Not your average ham and cheese toasty.",
        price: "$5.00",
      },
      {
        id: uuidv4(),
        name: "Caesar salad",
        desc: "Leaves, chicken, croutons, and love.",
        price: "$9.00",
      },
      {
        id: uuidv4(),
        name: "Beet salad",
        desc: "You don’t have to be Russian to enjoy this fresh delight.",
        price: "$9.00",
      },
      {
        id: uuidv4(),
        name: "Fries and pickles",
        desc: "Double fried potatoes with fresh pickles.",
        price: "$6.00",
      },
      {
        id: uuidv4(),
        name: "Salad nicoise",
        desc: "This salad is really Nice. ",
        price: "$9.00",
      },
      {
        id: uuidv4(),
        name: "Tempura veg",
        desc: "A selection of fried veg with a surprising dip.",
        price: "$9.00",
      },
    ],
  },
  {
    id: uuidv4(),
    name: "Mains",
    subMenu: [
      {
        id: uuidv4(),
        name: "Dumpling stew",
        desc: "Warm, filling, and delicious.",
        price: "$10.00",
      },
      {
        id: uuidv4(),
        name: "Catch of the day",
        desc: "A seafood platter with whatever’s good.",
        price: "$15.00",
      },
      {
        id: uuidv4(),
        name: "Couscous salad",
        desc: "More interesting than it sounds. ",
        price: "$10.00",
      },
      {
        id: uuidv4(),
        name: "Mushroom quiche",
        desc: "We look after our vegetarian friends.",
        price: "$12.00",
      },
    ],
  },
  {
    id: uuidv4(),
    name: "Pastry",
    subMenu: [
      {
        id: uuidv4(),
        name: "Scones and cream",
        desc: "An English classic with a modern twist.",
        price: "$4.00",
      },
      {
        id: uuidv4(),
        name: "Almond croissant",
        desc: "Nutty, rich, and fabulous.",
        price: "$2.00",
      },
      {
        id: uuidv4(),
        name: "Cinnamon bun",
        desc: "Dirty fingers means it’s delicious",
        price: "$4.00",
      },
      {
        id: uuidv4(),
        name: "Lemon cake",
        desc: "Drizzly goodness.",
        price: "$2.00",
      },
    ],
  },
  {
    id: uuidv4(),
    name: "Our specials",
    subMenu: [
      {
        id: uuidv4(),
        name: "Lamb casserole",
        desc: "A hearty meal for the hungry.",
        price: "$10.00",
      },
      {
        id: uuidv4(),
        name: "Dried hake and new potatoes",
        desc: "Fresh fish served with a yummy sauce.",
        price: "$10.00",
      },
    ],
  },
];
