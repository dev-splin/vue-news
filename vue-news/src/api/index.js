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
async function fetchList(pageName) {
    try {
        return await axios.get(`${config.baseUrl}/${pageName}/1.json`);
    } catch (error) {
        console.log(error);
    }
}

/**
 * User 정보 가져오기
 * @param userId
 * @returns {Promise<AxiosResponse<any>>}
 */
async function fetchUserInfo(userId) {
    try {
        return await axios.get(`${config.baseUrl}/user/${userId}.json`);
    } catch (error) {
        console.log(error);
    }
}

/**
 * Item 정보 가져오기
 * @param itemId
 * @returns {Promise<AxiosResponse<any>>}
 */
async function fetchItemInfo(itemId) {
    try {
        return await axios.get(`${config.baseUrl}/item/${itemId}.json`);
    } catch (error) {
        console.log(error);
    }
}

export {
    fetchList,
    fetchUserInfo,
    fetchItemInfo
}