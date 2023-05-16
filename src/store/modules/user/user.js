// import axios from "axios";
export default {
  namespaced: true,
  state() {
    return {
      email: "test@example.com",
      favorite: {},
      addedToCart: {},
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
    setUserMail(state, payload) {
      state.email = payload.email;
    },
  },
  actions: {},
  getters: {},
};
