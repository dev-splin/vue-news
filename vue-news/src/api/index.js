import axios from "axios";

/**
 * HTTP Request && Response에 관련된 기본 설정
 * @type {{baseUrl: string}}
 */
const config = {
    baseUrl:  'https://api.hnpwa.com/v0',
};

/**
 * 리스트 데이터 가져오기
 * @param pageName
 * @returns {Promise<AxiosResponse<any>>}
 */
function fetchList(pageName) {
    return axios.get(`${config.baseUrl}/${pageName}/1.json`);
}

/**
 * User 정보 가져오기
 * @param userId
 * @returns {Promise<AxiosResponse<any>>}
 */
function fetchUserInfo(userId) {
    return axios.get(`${config.baseUrl}/user/${userId}.json`);
}

/**
 * Item 정보 가져오기
 * @param itemId
 * @returns {Promise<AxiosResponse<any>>}
 */
function fetchItemInfo(itemId) {
    return axios.get(`${config.baseUrl}/item/${itemId}.json`);
}

export {
    fetchList,
    fetchUserInfo,
    fetchItemInfo
}