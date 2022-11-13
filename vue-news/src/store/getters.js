export default {
    /**
     * 리스트 데이터 반환
     * @param state
     * @returns {[]}
     */
    fetchedList(state) {
        return state.list;
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