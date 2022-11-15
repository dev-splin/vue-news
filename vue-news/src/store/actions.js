import * as api from "@/api";

export default {
    /**
     * list 데이터 api 호출
     * @param commit
     * @param pageName
     * @returns {Promise<* | void>}
     * @constructor
     */
    FETCH_LIST({ commit }, pageName) {
        return api.fetchList(pageName)
            .then(response => commit('SET_LIST', response.data))
            .catch(error => console.log(error));
    },
    /**
     * user 데이터 api 호출
     * @param commit
     * @param userId
     * @returns {Promise<* | void>}
     * @constructor
     */
    FETCH_USER_INFO({ commit }, userId) {
        return api.fetchUserInfo(userId)
            .then(response => commit('SET_USER_INFO', response.data))
            .catch(error => console.log(error));
    },
    /**
     * item 데이터 api 호출
     * @param commit
     * @param itemId
     * @returns {Promise<* | void>}
     * @constructor
     */
    FETCH_ITEM_INFO({ commit }, itemId) {
        return api.fetchItemInfo(itemId)
            .then(response => commit('SET_ITEM_INFO', response.data))
            .catch(error => console.log(error));
    }
}