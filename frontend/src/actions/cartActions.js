import axios from "axios";
import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_SAVE_SHIPPING_ADDRESS,
  CART_SAVE_PAYMENT_METHOD,
} from "../constants/cartConstants";

export const addToCart = (id, qty, color, sizeCart) => async (
  dispatch,
  getstate
) => {
  const { data } = await axios.get(`/api/products/${id}`);

  let price;
  let sizeValue;

  data.product.sizes.forEach((size) => {
    if (size._id === sizeCart) {
      sizeValue = size.size;
      price = size.price;
    }
  });

  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      product: data.product._id,
      name: data.product.name,
      images: data.product.images,
      price,
      countInStock: data.product.countInStock,
      qty,
      color,
      sizeValue,
      sizeCart,
    },
  });

  localStorage.setItem("cartItems", JSON.stringify(getstate().cart.cartItems));
};

export const removeFromCart = (id, color, sizeCart) => (dispatch, getState) => {
  dispatch({
    type: CART_REMOVE_ITEM,
    payload: { id, color, sizeCart },
  });

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

export const saveShippingAddress = (data) => (dispatch) => {
  dispatch({
    type: CART_SAVE_SHIPPING_ADDRESS,
    payload: data,
  });

  localStorage.setItem("shippingAddress", JSON.stringify(data));
};

export const savePaymentMethod = (data) => (dispatch) => {
  dispatch({
    type: CART_SAVE_PAYMENT_METHOD,
    payload: data,
  });

  localStorage.setItem("paymentMethod", JSON.stringify(data));
};
