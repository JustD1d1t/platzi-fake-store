// import axios from "axios";
export default {
  namespaced: true,
  state() {
    return {
      favorite: [],
      addedToCart: {},
    };
  },
  mutations: {
    addToFavorite(state, payload) {
      state.favorite = [...state.favorite, payload.scooterId];
    },
    removeFromFavorite(state, payload) {
      state.favorite = [
        ...state.favorite.filter((id) => id !== payload.scooterId),
      ];
    },
    addToCart(state, payload) {
      const scooter = payload.scooter;
      const scooterId = payload.scooter.variants[payload.selectedVariant].id;
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
          id: scooter.variants[payload.selectedVariant].id,
          image: scooter.variants[payload.selectedVariant].image,
          numberOfVotes:
            scooter.variants[payload.selectedVariant].numberOfVotes,
          rating: scooter.variants[payload.selectedVariant].rating,
          quantity: 1,
        };
      }
    },
  },
  actions: {},
  getters: {},
};
