import axios from "axios";

/**
 * HTTP Request && Response에 관련된 기본 설정
 * @type {{baseUrl: string}}
 */
const config = {
    baseUrl:  'https://api.hnpwa.com/v0',
};

/**
 * News 리스트 가져오기
 * @returns {Promise<AxiosResponse<any>>}
 */
function fetchNewsList() {
    return axios.get(`${config.baseUrl}/news/1.json`);
}

/**
 * Jobs 리스트 가져오기
 * @returns {Promise<AxiosResponse<any>>}
 */
function fetchJobsList() {
    return axios.get(`${config.baseUrl}/jobs/1.json`);
}

/**
 * Ask 리스트 가져오기
 * @returns {Promise<AxiosResponse<any>>}
 */
function fetchAskList() {
    return axios.get(`${config.baseUrl}/ask/1.json`);
}

/**
 * User 정보 가져오기
 * @param userName
 * @returns {Promise<AxiosResponse<any>>}
 */
function fetchUserInfo(userName) {
    return axios.get(`${config.baseUrl}/user/${userName}.json`);
}

export {
    fetchNewsList,
    fetchJobsList,
    fetchAskList,
    fetchUserInfo,
}