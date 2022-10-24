export default {
    /**
     * news 데이텨 반환
     * @param state
     * @returns {[]}
     */
    fetchedNewsItems(state) {
        return state.newsItems;
    },
    /**
     * user 데이터 반환
     * @param state
     * @returns {[]}
     */
    fetchedUserInfo(state) {
        return state.userInfo;
    },
    /**
     * item 데이터 반환
     * @param state
     * @returns {[]}
     */
    fetchedItemInfo(state) {
        return state.itemInfo;
    }
}