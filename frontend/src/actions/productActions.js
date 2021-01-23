import axios from "axios";
import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
  PRODUCT_DELETE_REQUEST,
  PRODUCT_DELETE_SUCCESS,
  PRODUCT_DELETE_FAIL,
  PRODUCT_CREATE_REQUEST,
  PRODUCT_CREATE_SUCCESS,
  PRODUCT_CREATE_FAIL,
  PRODUCT_UPDATE_REQUEST,
  PRODUCT_UPDATE_SUCCESS,
  PRODUCT_UPDATE_FAIL,
  PRODUCT_CREATE_REVIEW_REQUEST,
  PRODUCT_CREATE_REVIEW_SUCCESS,
  PRODUCT_CREATE_REVIEW_FAIL,
  PRODUCT_TAG_REQUEST,
  PRODUCT_TAG_SUCCESS,
  PRODUCT_TAG_FAIL,
  PRODUCT_SHOP_REQUEST,
  PRODUCT_SHOP_SUCCESS,
  PRODUCT_SHOP_FAIL,
  PRODUCT_SHOP_SHOPBYARTIST_COLLECTION_REQUEST,
  PRODUCT_SHOP_SHOPBYARTIST_COLLECTION_SUCCESS,
  PRODUCT_SHOP_SHOPBYARTIST_COLLECTION_FAIL,
  PRODUCT_CREATE_SIZE_REQUEST,
  PRODUCT_CREATE_SIZE_SUCCESS,
  PRODUCT_CREATE_SIZE_FAIL,
  PRODUCT_SHOP_SHOPBYLIMITED_COLLECTION_REQUEST,
  PRODUCT_SHOP_SHOPBYLIMITED_COLLECTION_SUCCESS,
  PRODUCT_SHOP_SHOPBYLIMITED_COLLECTION_FAIL,
  PRODUCT_SHOP_SHOPBYWALLFRAMESNG_COLLECTION_REQUEST,
  PRODUCT_SHOP_SHOPBYWALLFRAMESNG_COLLECTION_SUCCESS,
  PRODUCT_SHOP_SHOPBYWALLFRAMESNG_COLLECTION_FAIL,
  PRODUCT_SEARCH_REQUEST,
  PRODUCT_SEARCH_SUCCESS,
  PRODUCT_SEARCH_FAIL,
  PRODUCT_DELETE_REVIEW_FAIL,
  PRODUCT_DELETE_REVIEW_SUCCESS,
  PRODUCT_DELETE_REVIEW_REQUEST,
} from "../constants/productConstants.js";

export const listProducts = (keyword = "", pageNumber = "") => async (
  dispatch
) => {
  try {
    dispatch({ type: PRODUCT_LIST_REQUEST });

    const { data } = await axios.get(
      `/api/products?keyword=${keyword}&pageNumber=${pageNumber}`
    );

    dispatch({
      type: PRODUCT_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const searchProducts = (keyword = "", pageNumber = "") => async (
  dispatch
) => {
  try {
    dispatch({ type: PRODUCT_SEARCH_REQUEST });

    const { data } = await axios.get(
      `/api/products/search?keyword=${keyword}&pageNumber=${pageNumber}`
    );

    dispatch({
      type: PRODUCT_SEARCH_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_SEARCH_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const tagProducts = () => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_TAG_REQUEST });

    const { data } = await axios.get(`/api/products/tag`);

    dispatch({
      type: PRODUCT_TAG_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_TAG_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const shopProducts = () => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_SHOP_REQUEST });

    const { data } = await axios.get(`/api/products/shop`);

    dispatch({
      type: PRODUCT_SHOP_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_SHOP_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const shopShopByArtistCollectionProducts = (pageNumber = '') => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_SHOP_SHOPBYARTIST_COLLECTION_REQUEST });

    const { data } = await axios.get(
      `/api/products/shop/collection/shop-by-artist?pageNumber=${pageNumber}`
    );

    dispatch({
      type: PRODUCT_SHOP_SHOPBYARTIST_COLLECTION_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_SHOP_SHOPBYARTIST_COLLECTION_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const shopShopByLimitedCollectionProducts = (pageNumber = '') => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_SHOP_SHOPBYLIMITED_COLLECTION_REQUEST });

    const { data } = await axios.get(
      `/api/products/shop/collection/limited-collection?pageNumber=${pageNumber}`
    );

    dispatch({
      type: PRODUCT_SHOP_SHOPBYLIMITED_COLLECTION_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_SHOP_SHOPBYLIMITED_COLLECTION_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const shopShopByWallframesngCollectionProducts = (pageNumber = '') => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_SHOP_SHOPBYWALLFRAMESNG_COLLECTION_REQUEST });

    const { data } = await axios.get(
      `/api/products/shop/collection/wallframesng?pageNumber=${pageNumber}`
    );

    dispatch({
      type: PRODUCT_SHOP_SHOPBYWALLFRAMESNG_COLLECTION_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_SHOP_SHOPBYWALLFRAMESNG_COLLECTION_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_DETAILS_REQUEST });

    const { data } = await axios.get(`/api/products/${id}`);

    dispatch({
      type: PRODUCT_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const deleteProduct = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: PRODUCT_DELETE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    await axios.delete(`/api/products/${id}`, config);

    dispatch({
      type: PRODUCT_DELETE_SUCCESS,
    });


  } catch (error) {
    dispatch({
      type: PRODUCT_DELETE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const createProduct = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: PRODUCT_CREATE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.post(`/api/products`, {}, config);

    dispatch({
      type: PRODUCT_CREATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const updateProduct = (product) => async (dispatch, getState) => {
  try {
    dispatch({
      type: PRODUCT_UPDATE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.put(
      `/api/products/${product._id}`,
      product,
      config
    );

    dispatch({
      type: PRODUCT_UPDATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_UPDATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const sizeProduct = (sizeAndPrice) => async (dispatch, getState) => {
  try {
    dispatch({
      type: PRODUCT_CREATE_SIZE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.post(
      `/api/products/${sizeAndPrice._id}/size`,
      sizeAndPrice,
      config
    );

    dispatch({
      type: PRODUCT_CREATE_SIZE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_CREATE_SIZE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const createProductReview = (productId, review) => async (
  dispatch,
  getState
) => {
  try {
    dispatch({
      type: PRODUCT_CREATE_REVIEW_REQUEST,
    });

    await axios.post(`/api/products/${productId}/reviews`, review);

    dispatch({
      type: PRODUCT_CREATE_REVIEW_SUCCESS,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_CREATE_REVIEW_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const deleteProductReview = (productId, reviewId) => async (dispatch, getState) => {
  try {
    dispatch({
      type: PRODUCT_DELETE_REVIEW_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    await axios.delete(`/api/products/${productId}/${reviewId}/reviews`, config);

    dispatch({
      type: PRODUCT_DELETE_REVIEW_SUCCESS,
    });


  } catch (error) {
    dispatch({
      type: PRODUCT_DELETE_REVIEW_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
