import { v4 as uuidv4 } from "uuid";
import orderCover1 from "@/assets/order-cover-1.png";
import orderCover2 from "@/assets/order-cover-2.png";
import orderCover3 from "@/assets/order-cover-3.png";

export const orders = [
  {
    id: uuidv4(),
    name: "Mushroom quiche",
    price: "$12.00",
    pic: orderCover1,
  },
  {
    id: uuidv4(),
    name: "Cinnamon bun",
    price: "$4.00",
    pic: orderCover2,
  },
  {
    id: uuidv4(),
    name: "Almond croissant",
    price: "$2.00",
    pic: orderCover3,
  },
];
