import * as api from "@/api";

export default {
    /**
     * list 데이터 api 호출
     * @param commit
     * @param pageName
     * @constructor
     */
    FETCH_LIST({ commit }, pageName) {
        api.fetchList(pageName)
            .then(response => commit('SET_LIST', response.data))
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