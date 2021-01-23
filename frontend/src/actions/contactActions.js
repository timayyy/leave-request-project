import {
    SEND_CONTACT_EMAIL_REQUEST,
    SEND_CONTACT_EMAIL_SUCCESS,
    SEND_CONTACT_EMAIL_FAIL
} from "../constants/contactConstants";
import axios from "axios";

export const sendContactEmailAction = (contactDetails) => async (dispatch) => {
    try {
        dispatch({
            type: SEND_CONTACT_EMAIL_REQUEST,
        });
        const { data } = await axios.post(
            `/api/contact`,
            contactDetails,
        );

        dispatch({
            type: SEND_CONTACT_EMAIL_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: SEND_CONTACT_EMAIL_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};