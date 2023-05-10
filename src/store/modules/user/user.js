// import axios from "axios";
export default {
  namespaced: true,
  state() {
    return {
      favorite: {},
      addedToCart: {},
      // addedToCart: {
      //   1: {
      //     country: "Japan",
      //     engineCapacity: "50",
      //     manufacturer: "Honda",
      //     name: "GT 50 AC",
      //     powerType: "petrol",
      //     price: 3455.99,
      //     seats: "1",
      //     topSpeed: "30",
      //     wheelSize: "10",
      //     color: "orange",
      //     deliveryTime: {
      //       Asia: "4-5 days",
      //       Australia: "8-9 days",
      //       America: "9-11 days",
      //       Europe: "4-5 days",
      //     },
      //     description:
      //       "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae repellendus dolorum voluptate iure illo labore minus aut ducimus atque sapiente distinctio magni, vero doloremque error, ut dolorem odio eius iste omnis ab provident dignissimos culpa. Voluptate, magni iure possimus eius reiciendis accusantium pariatur itaque, ab ea natus quidem perspiciatis unde.",
      //     fastestDeliveryTime: "4-5 days",
      //     id: "1",
      //     image: "/img/orange.273ec905.png",
      //     numberOfVotes: 10,
      //     rating: 5,
      //     quantity: 2,
      //   },
      //   2: {
      //     country: "Japan",
      //     engineCapacity: "50",
      //     manufacturer: "Honda",
      //     name: "GT 50 AC",
      //     powerType: "petrol",
      //     price: 3455.99,
      //     seats: "1",
      //     topSpeed: "30",
      //     wheelSize: "10",
      //     color: "green",
      //     deliveryTime: {
      //       Asia: "4-5 days",
      //       Australia: "8-9 days",
      //       America: "9-11 days",
      //       Europe: "4-5 days",
      //     },
      //     description:
      //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus natus vero ab velit deserunt provident ullam placeat, nostrum minus dignissimos nam voluptatibus voluptatum minima repudiandae, fugiat exercitationem eveniet veritatis illum? Perspiciatis error nostrum quis. Fugiat.",
      //     fastestDeliveryTime: "1 week",
      //     id: "2",
      //     image: "/img/green.f6e7b950.png",
      //     numberOfVotes: 15,
      //     rating: 5,
      //     quantity: 1,
      //   },
      //   6: {
      //     country: "Japan",
      //     engineCapacity: "100",
      //     manufacturer: "Moto Tech",
      //     name: "HY 888Y",
      //     powerType: "petrol",
      //     price: 3799,
      //     seats: "2",
      //     topSpeed: undefined,
      //     wheelSize: "12",
      //     color: "white",
      //     deliveryTime: undefined,
      //     description: undefined,
      //     fastestDeliveryTime: undefined,
      //     id: "6",
      //     image: "/img/White.689daeaf.png",
      //     numberOfVotes: 15,
      //     rating: 5,
      //     quantity: 1,
      //   },
      // },
    };
  },
  mutations: {
    toggleFavorite(state, payload) {
      const favoriteVariantId =
        payload.scooter.variants[payload.selectedVariant].variantId;
      if (state.favorite[favoriteVariantId]) {
        delete state.favorite[favoriteVariantId];
      } else {
        const favoriteScooter = { ...payload.scooter };
        favoriteScooter.variants = favoriteScooter.variants.filter(
          (variant) => variant.variantId === favoriteVariantId
        );
        state.favorite[favoriteVariantId] = favoriteScooter;
      }
    },
    addToCart(state, payload) {
      const scooter = payload.scooter;
      const scooterId =
        payload.scooter.variants[payload.selectedVariant].variantId;
      const isInCart = state.addedToCart[scooterId];
      if (isInCart) {
        state.addedToCart[scooterId].quantity =
          state.addedToCart[scooterId].quantity + 1;
      } else {
        state.addedToCart[scooterId] = {
          country: scooter.country,
          engineCapacity: scooter.engineCapacity,
          manufacturer: scooter.manufacturer,
          name: scooter.name,
          powerType: scooter.powerType,
          price: scooter.price,
          seats: scooter.seats,
          topSpeed: scooter.topSpeed,
          wheelSize: scooter.wheelSize,
          color: scooter.variants[payload.selectedVariant].color,
          deliveryTime: scooter.variants[payload.selectedVariant].deliveryTime,
          description: scooter.variants[payload.selectedVariant].description,
          fastestDeliveryTime:
            scooter.variants[payload.selectedVariant].fastestDeliveryTime,
          id: scooter.variants[payload.selectedVariant].variantId,
          image: scooter.variants[payload.selectedVariant].image,
          numberOfVotes:
            scooter.variants[payload.selectedVariant].numberOfVotes,
          rating: scooter.variants[payload.selectedVariant].rating,
          quantity: 1,
        };
      }
    },
    increaseQuantity(state, payload) {
      const id = payload.scooter.id;
      const scooterToIncreaseQuantity = { ...state.addedToCart[id] };
      scooterToIncreaseQuantity.quantity =
        scooterToIncreaseQuantity.quantity + 1;
      state.addedToCart[id] = scooterToIncreaseQuantity;
    },
    decreaseQuantity(state, payload) {
      const id = payload.scooter.id;
      const scooterToIncreaseQuantity = { ...state.addedToCart[id] };
      scooterToIncreaseQuantity.quantity =
        scooterToIncreaseQuantity.quantity - 1;
      if (scooterToIncreaseQuantity.quantity) {
        state.addedToCart[id] = scooterToIncreaseQuantity;
      } else {
        delete state.addedToCart[id];
      }
    },
  },
  actions: {},
  getters: {},
};
