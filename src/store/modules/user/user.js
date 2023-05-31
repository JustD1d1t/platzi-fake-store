// import axios from "axios";
export default {
  namespaced: true,
  state() {
    return {
      email: "test@example.com",
      favorite: {},
      addedToCart: {},
      // user: {},
      user: {
        email: "test@example.com",
        password: "Test123",
        passwordConfirm: "Test1234",
        firstName: "Dawid",
        lastName: "Starzyk",
        street: "Testowa",
        streetNumber: "23",
        houseNumber: "55",
        zipCode: "01-500",
        country: "Poland",
        city: "Warsaw",
        mobile: "731773391",
        orders: [],
        favorite: {},
        addedToCart: {},
        promocodes: [
          {
            name: "Promocode one",
            code: "pr0m0c0d3",
            discount: 0.15,
            condition: "You have to spend at least 5000",
          },
          {
            name: "Promocode two",
            code: "pr0m0c0d3 ch1na",
            discount: 0.1,
            condition: "You have to buy scooter from china",
          },
          {
            name: "Promocode three",
            code: "pr0m0c0d3 3l3ctr1c1ty",
            discount: 0.05,
            condition: "You have to buy electric scooter",
          },
          {
            name: "Promocode four",
            code: "pr0m0c0d3 fu3l",
            discount: 0.25,
            condition: "You have to buy fuel scooter",
          },
          {
            name: "Promocode five",
            code: "pr0m0c0d3 n3w",
            discount: 0.05,
            condition: "Promocode for new users for all orders",
          },
        ],
        addresses: [
          {
            name: "Main",
            firstName: "Dawid",
            lastName: "Starzyk",
            street: "Testowa",
            streetNumber: "23",
            houseNumber: "55",
            zipCode: "01-500",
            country: "Poland",
            city: "Warsaw",
            default: true,
          },
          {
            name: "Second",
            firstName: "Dawid2",
            lastName: "Starzyk2",
            street: "Ulicowa",
            streetNumber: "55",
            houseNumber: "65",
            zipCode: "01-900",
            country: "Poland",
            city: "Cracow",
            default: false,
          },
          {
            name: "Third",
            firstName: "Dawid3",
            lastName: "Starzyk3",
            street: "Jakaś fajna",
            streetNumber: "11",
            houseNumber: "66",
            zipCode: "55-900",
            country: "Poland",
            city: "Lublin",
            default: false,
          },
        ],
        activePromocode: "pr0m0c0d3",
        loyaltyPoints: 950,
      },
    };
  },
  mutations: {
    toggleFavorite(state, payload) {
      if (!Object.keys(state.user).length) {
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
      } else {
        const favoriteVariantId =
          payload.scooter.variants[payload.selectedVariant].variantId;
        if (state.user.favorite[favoriteVariantId]) {
          delete state.user.favorite[favoriteVariantId];
        } else {
          const favoriteScooter = { ...payload.scooter };
          favoriteScooter.variants = favoriteScooter.variants.filter(
            (variant) => variant.variantId === favoriteVariantId
          );
          state.user.favorite[favoriteVariantId] = favoriteScooter;
        }
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
    removeAddress(state, payload) {
      state.user.addresses = state.user.addresses.filter(
        (address) => address.name !== payload.address.name
      );
    },
    setAddressAsDefault(state, payload) {
      const user = { ...state.user };
      const address = user.addresses.find(
        (address) => address.name === payload.address.name
      );
      if (address) {
        const currDefaultAddress = user.addresses.find(
          (address) => address.default === true
        );
        currDefaultAddress.default = false;
        address.default = true;
      }
      state.user = {
        ...user,
      };
    },
    addNewAddress(state, payload) {
      state.user.addresses.push(payload.address);
    },
    setNewPromocodeActive(state, payload) {
      state.user.activePromocode = payload.promocode;
    },
  },
  actions: {},
  getters: {},
};
