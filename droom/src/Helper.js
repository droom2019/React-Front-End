import axios from 'axios';

export default () => {
    return axios.create(
    {
        headers: {
            "content-type": "application/json",
            authorization: localStorage.getItem("token")
        }
    }
)};