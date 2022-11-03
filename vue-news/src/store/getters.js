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
     * ask 데이터 반환
     * @param state
     * @returns {[]}
     */
    fetchedAskItems(state) {
        return state.askItems;
    },
    /**
     * jobs 데이터 반환
     * @param state
     * @returns {[]}
     */
    fetchedJobsItems(state) {
        return state.jobsItems;
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