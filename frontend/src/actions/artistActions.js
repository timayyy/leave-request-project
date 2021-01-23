import axios from "axios";
import {
  ARTIST_LIST_REQUEST,
  ARTIST_LIST_SUCCESS,
  ARTIST_LIST_FAIL,
  ARTIST_DETAILS_REQUEST,
  ARTIST_DETAILS_SUCCESS,
  ARTIST_DETAILS_FAIL,
  ARTIST_DELETE_REQUEST,
  ARTIST_DELETE_SUCCESS,
  ARTIST_DELETE_FAIL,
  ARTIST_CREATE_REQUEST,
  ARTIST_CREATE_SUCCESS,
  ARTIST_CREATE_FAIL,
  ARTIST_UPDATE_REQUEST,
  ARTIST_UPDATE_SUCCESS,
  ARTIST_UPDATE_FAIL,
  ARTIST_TAG_REQUEST,
  ARTIST_TAG_SUCCESS,
  ARTIST_TAG_FAIL,
} from "../constants/artistConstants.js";

export const listArtists = (keyword = "", pageNumber = "") => async (
  dispatch
) => {
  try {
    dispatch({ type: ARTIST_LIST_REQUEST });

    const { data } = await axios.get(
      `/api/artists?keyword=${keyword}&pageNumber=${pageNumber}`
    );

    dispatch({
      type: ARTIST_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ARTIST_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const tagArtists = () => async (dispatch) => {
  try {
    dispatch({ type: ARTIST_TAG_REQUEST });

    const { data } = await axios.get(`/api/artists/tag`);

    dispatch({
      type: ARTIST_TAG_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ARTIST_TAG_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// export const shopProducts = () => async (dispatch) => {
//   try {
//     dispatch({ type: PRODUCT_SHOP_REQUEST });

//     const { data } = await axios.get(`/api/products/shop`);

//     dispatch({
//       type: PRODUCT_SHOP_SUCCESS,
//       payload: data,
//     });
//   } catch (error) {
//     dispatch({
//       type: PRODUCT_SHOP_FAIL,
//       payload:
//         error.response && error.response.data.message
//           ? error.response.data.message
//           : error.message,
//     });
//   }
// };

export const listArtistDetails = (slug) => async (dispatch) => {
  try {
    dispatch({ type: ARTIST_DETAILS_REQUEST });

    const { data } = await axios.get(`/api/artists/gallery/${slug}`);

    dispatch({
      type: ARTIST_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ARTIST_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const deleteArtist = (slug) => async (dispatch, getState) => {
  try {
    dispatch({
      type: ARTIST_DELETE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    dispatch({
      type: ARTIST_DELETE_SUCCESS,
    });

    await axios.delete(`/api/artists/${slug}`, config);
  } catch (error) {
    dispatch({
      type: ARTIST_DELETE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const createArtist = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: ARTIST_CREATE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.post(`/api/artists`, {}, config);

    dispatch({
      type: ARTIST_CREATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ARTIST_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const updateArtist = (artist) => async (dispatch, getState) => {
  try {
    dispatch({
      type: ARTIST_UPDATE_REQUEST,
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
      `/api/artists/${artist.slug}`,
      artist,
      config
    );

    dispatch({
      type: ARTIST_UPDATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ARTIST_UPDATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// export const createArtistReview = (ArtistId, review) => async (
//   dispatch,
//   getState
// ) => {
//   try {
//     dispatch({
//       type: Artist_CREATE_REVIEW_REQUEST,
//     });

//     await axios.post(`/api/Artists/${productId}/reviews`, review);

//     dispatch({
//       type: PRODUCT_CREATE_REVIEW_SUCCESS,
//     });
//   } catch (error) {
//     dispatch({
//       type: PRODUCT_CREATE_REVIEW_FAIL,
//       payload:
//         error.response && error.response.data.message
//           ? error.response.data.message
//           : error.message,
//     });
//   }
// };
