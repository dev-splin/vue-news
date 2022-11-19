import * as api from "@/api";

export default {
    /**
     * list 데이터 api 호출
     * @param commit
     * @param pageName
     * @returns {Promise<* | void>}
     * @constructor
     */
    async FETCH_LIST({ commit }, pageName) {
        const response = await api.fetchList(pageName);
        commit('SET_LIST', response.data);

        return response;
    },
    /**
     * user 데이터 api 호출
     * @param commit
     * @param userId
     * @returns {Promise<* | void>}
     * @constructor
     */
    async FETCH_USER_INFO({ commit }, userId) {
        const response = await api.fetchUserInfo(userId);
        commit('SET_USER_INFO', response.data);

        return response;
    },
    /**
     * item 데이터 api 호출
     * @param commit
     * @param itemId
     * @returns {Promise<* | void>}
     * @constructor
     */
    async FETCH_ITEM_INFO({ commit }, itemId) {
        const response = await api.fetchItemInfo(itemId);
        commit('SET_ITEM_INFO', response.data);

        return response;
    }
}