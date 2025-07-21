import axios from "./axiosInstance";

/**
 * Generic GET request
 * @param {string} url
 * @param {object} config
 */
export function get(url, config = {}) {
  return axios.get(url, config).then((res) => res.data);
}

/**
 * Generic POST request
 * @param {string} url
 * @param {object} data
 * @param {object} config
 */
export function post(url, data = {}, config = {}) {
  return axios.post(url, data, config).then((res) => res.data);
}

/**
 * Generic PUT request
 * @param {string} url
 * @param {object} data
 * @param {object} config
 */
export function put(url, data = {}, config = {}) {
  return axios.put(url, data, config).then((res) => res.data);
}

/**
 * Generic DELETE request
 * @param {string} url
 * @param {object} config
 */
export function del(url, config = {}) {
  return axios.delete(url, config).then((res) => res.data);
}