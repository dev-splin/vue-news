import * as api from "@/api";

export default {
    FETCH_NEWS({commit}) {
        api.fetchNewsList()
            .then(response => commit('SET_NEWS', response.data))
            .catch(error => console.log(error));
    },
    FETCH_JOBS({commit}) {
        api.fetchJobsList()
            .then(response => commit('SET_JOBS', response.data))
            .catch(error => console.log(error));
    },
    FETCH_ASKS({commit}) {
        api.fetchAskList()
            .then(response => commit('SET_ASKS', response.data))
            .catch(error => console.log(error));
    }
}