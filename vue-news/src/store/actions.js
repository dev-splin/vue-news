import * as api from "@/api";

export default {
    /**
     * news 데이터 api 호출
     * @param commit
     * @constructor
     */
    FETCH_NEWS({commit}) {
        api.fetchNewsList()
            .then(response => commit('SET_NEWS', response.data))
            .catch(error => console.log(error));
    },
    /**
     * jobs 데이터 api 호출
     * @param commit
     * @constructor
     */
    FETCH_JOBS({commit}) {
        api.fetchJobsList()
            .then(response => commit('SET_JOBS', response.data))
            .catch(error => console.log(error));
    },
    /**
     * asks 데이터 api 호출
     * @param commit
     * @constructor
     */
    FETCH_ASK({commit}) {
        api.fetchAskList()
            .then(response => commit('SET_ASKS', response.data))
            .catch(error => console.log(error));
    },
    /**
     * user 데이터 api 호출
     * @param commit
     * @param userId
     * @constructor
     */
    FETCH_USER_INFO({ commit }, userId) {
        api.fetchUserInfo(userId)
            .then(response => commit('SET_USER_INFO', response.data))
            .catch(error => console.log(error));
    },
    /**
     * item 데이터 api 호출
     * @param commit
     * @param itemId
     * @constructor
     */
    FETCH_ITEM_INFO({ commit }, itemId) {
        api.fetchItemInfo(itemId)
            .then(response => commit('SET_ITEM_INFO', response.data))
            .catch(error => console.log(error));
    }
}