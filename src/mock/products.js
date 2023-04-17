import black from "@/assets/img/scooters/catalog/black.png";
import blueWhiteCustom from "@/assets/img/scooters/catalog/blue-white-custom.png";
import green2 from "@/assets/img/scooters/catalog/green-2.png";
import green from "@/assets/img/scooters/catalog/green.png";
import orange2 from "@/assets/img/scooters/catalog/orange-2.png";
import orange from "@/assets/img/scooters/catalog/orange.png";
import redIvory125cc from "@/assets/img/scooters/catalog/red-ivory-125cc.png";
import redWhite from "@/assets/img/scooters/catalog/red-white.png";
import RoyalAlloyGP200LCRed from "@/assets/img/scooters/catalog/Royal-Alloy-GP-200-LC-Red.png";
import UltraBlueIvory125cc from "@/assets/img/scooters/catalog/Ultra-Blue-Ivory-125cc.png";
import white2 from "@/assets/img/scooters/catalog/White-2.png";
import white from "@/assets/img/scooters/catalog/White.png";
export const products = [
  {
    name: "GT 50 AC",
    price: 3455.99,
    manufacturer: "Honda",
    country: "Japan",
    powerType: "petrol",
    engineCapacity: "50",
    wheelSize: "10",
    seats: "1",
    topSpeed: "30",
    variants: [
      {
        id: "1",
        rating: 5,
        numberOfVotes: 10,
        color: "orange",
        image: orange,
        description:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae repellendus dolorum voluptate iure illo labore minus aut ducimus atque sapiente distinctio magni, vero doloremque error, ut dolorem odio eius iste omnis ab provident dignissimos culpa. Voluptate, magni iure possimus eius reiciendis accusantium pariatur itaque, ab ea natus quidem perspiciatis unde.",
        deliveryDate: "4-5 days",
      },
      {
        id: "2",
        rating: 5,
        numberOfVotes: 15,
        color: "green",
        image: green,
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus natus vero ab velit deserunt provident ullam placeat, nostrum minus dignissimos nam voluptatibus voluptatum minima repudiandae, fugiat exercitationem eveniet veritatis illum? Perspiciatis error nostrum quis. Fugiat.",
        deliveryDate: "1 week",
      },
    ],
  },
  {
    name: "ARS 770S",
    price: 5499,
    manufacturer: "Forte",
    country: "China",
    powerType: "petrol",
    engineCapacity: "80",
    wheelSize: "10",
    seats: "1",
    variants: [
      {
        rating: 5,
        numberOfVotes: 15,
        color: "black",
        image: black,
      },
      {
        rating: 5,
        numberOfVotes: 15,
        color: "red",
        image: redWhite,
      },
    ],
  },
  {
    name: "HY 888Y",
    price: 3799,
    manufacturer: "Moto Tech",
    country: "Japan",
    powerType: "petrol",
    engineCapacity: "100",
    wheelSize: "12",
    seats: "2",
    variants: [
      {
        rating: 5,
        numberOfVotes: 15,
        color: "green",
        image: green2,
      },
      {
        rating: 5,
        numberOfVotes: 15,
        color: "white",
        image: white,
      },
    ],
  },
  {
    name: "TG 300S LC",
    price: 3455.99,
    manufacturer: "Mustang",
    country: "China",
    powerType: "petrol",
    engineCapacity: "125",
    wheelSize: "12",
    seats: "2",
    variants: [
      {
        rating: 5,
        numberOfVotes: 15,
        color: "white",
        image: white2,
      },
      {
        rating: 5,
        numberOfVotes: 15,
        color: "orange",
        image: orange2,
      },
    ],
  },
  {
    name: "TG 125S LC",
    price: 9077,
    manufacturer: "Spark",
    country: "Japan",
    powerType: "petrol",
    engineCapacity: "150",
    wheelSize: "10",
    seats: "1",
    variants: [
      {
        rating: 5,
        numberOfVotes: 15,
        color: "blue",
        image: blueWhiteCustom,
      },
      {
        rating: 5,
        numberOfVotes: 15,
        color: "red",
        image: redIvory125cc,
      },
    ],
  },
  {
    name: "GP 125 LC",
    price: 9899,
    manufacturer: "Suzuki",
    country: "Japan",
    powerType: "petrol",
    engineCapacity: "50",
    wheelSize: "12",
    seats: "2",
    variants: [
      {
        rating: 5,
        numberOfVotes: 15,
        color: "red",
        image: RoyalAlloyGP200LCRed,
      },
      {
        rating: 5,
        numberOfVotes: 15,
        color: "blue",
        image: UltraBlueIvory125cc,
      },
    ],
  },
  {
    name: "GT 50 AC",
    price: 3455.99,
    manufacturer: "Viper",
    country: "China",
    powerType: "petrol",
    engineCapacity: "80",
    wheelSize: "10",
    seats: "2",
    variants: [
      {
        rating: 5,
        numberOfVotes: 10,
        color: "orange",
        image: orange,
      },
      {
        rating: 5,
        numberOfVotes: 15,
        color: "green",
        image: green,
      },
    ],
  },
  {
    name: "ARS 770S",
    price: 5499,
    manufacturer: "Yiben",
    country: "Japan",
    powerType: "petrol",
    engineCapacity: "100",
    wheelSize: "12",
    seats: "2",
    variants: [
      {
        rating: 5,
        numberOfVotes: 15,
        color: "black",
        image: black,
      },
      {
        rating: 5,
        numberOfVotes: 15,
        color: "red",
        image: redWhite,
      },
    ],
  },
  {
    name: "HY 888Y",
    price: 3799,
    manufacturer: "Yamaha",
    country: "China",
    powerType: "petrol",
    engineCapacity: "150",
    wheelSize: "10",
    seats: "2",
    variants: [
      {
        rating: 5,
        numberOfVotes: 15,
        color: "green",
        image: green2,
      },
      {
        rating: 5,
        numberOfVotes: 15,
        color: "white",
        image: white,
      },
    ],
  },
  {
    name: "TG 300S LC",
    price: 3455.99,
    manufacturer: "Yamaha",
    country: "China",
    powerType: "electric",
    wheelSize: "10",
    seats: "2",
    variants: [
      {
        rating: 5,
        numberOfVotes: 15,
        color: "white",
        image: white2,
      },
      {
        rating: 5,
        numberOfVotes: 15,
        color: "orange",
        image: orange2,
      },
    ],
  },
  {
    name: "TG 125S LC",
    price: 9077,
    manufacturer: "Forte",
    country: "Japan",
    powerType: "electric",
    wheelSize: "12",
    seats: "2",
    variants: [
      {
        rating: 5,
        numberOfVotes: 15,
        color: "blue",
        image: blueWhiteCustom,
      },
      {
        rating: 5,
        numberOfVotes: 15,
        color: "red",
        image: redIvory125cc,
      },
    ],
  },
  {
    name: "GP 125 LC",
    price: 9899,
    manufacturer: "Suzuki",
    country: "China",
    powerType: "electric",
    wheelSize: "10",
    seats: "1",
    variants: [
      {
        rating: 5,
        numberOfVotes: 15,
        color: "red",
        image: RoyalAlloyGP200LCRed,
      },
      {
        rating: 5,
        numberOfVotes: 15,
        color: "blue",
        image: UltraBlueIvory125cc,
      },
    ],
  },
];
