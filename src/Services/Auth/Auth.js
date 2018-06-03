import axios from 'axios';

export default {
    // Get user login data
    user: {
        login: credentials => {
            return axios
                .post('api/auth/login/', credentials)
                .then(res => res.data);
        },
    },
};
