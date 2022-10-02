
import { useRouter } from 'vue-router';
import { http } from '../conifgs/axios';

const router = useRouter();

/**
 * Http Response Error Handler Configuration
 * @param {*} error 
 */
 const httpResponseHandler = (error) => {
    
    if(error.response && error.response.status === 0) {
        return;
    }

    if(error.response && error.response.status === 401) {
        localStorage.removeItem('token');
        router.push('/auth/login');
        return;
    }
}

/**
 * Http Get Request
 * @param {*} path 
 * @param {*} params 
 * @returns 
 */
export const getRequest = async (path, params) => {
    return await http.get(path, params).then(
        response => response,
        error => httpResponseHandler(error)
    );
}

/**
 * Http Create Request
 * @param {*} path 
 * @param {*} body 
 * @param {*} params 
 * @returns 
 */
export const postRequest = async (path, body, params) => {
    return await http.post(path, body, params).then(
        response => response,
        error => httpResponseHandler(error)
    );
}

/**
 * Http Update Request
 * @param {*} path 
 * @param {*} body 
 * @param {*} params 
 * @returns 
 */
export const putRequest = async (path, body, params) => {
    return await http.put(path, body, params).then(
        response => response,
        error => httpResponseHandler(error)
    );
}

/**
 * Http Delete Request
 * @param {*} path 
 * @param {*} body 
 * @param {*} params 
 * @returns 
 */
export const delRequest = async (path, body, params) => {
    return await http.delete(path, body, params).then(
        response => response,
        error => httpResponseHandler(error)
    );
}