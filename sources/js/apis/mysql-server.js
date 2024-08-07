/**
 * @file mysql-server.js
 * @description API that interacts with the mysql-server database.
 */

'use strict';
import axios from 'axios';

import config from '../configs/mysql-server';
import { APIResponse as Response } from '../utility/api';
const { url, endpoints } = config;

/**
 * Get test posts.
 * @param {Number} page Pagination.
 * @returns {Promise<APIResponse>} Returns the API response object.
 */
async function getTestPosts(page = 1) {
    try {
        const result = await axios.get(`${url}${endpoints.posts}`, {
            params: {
                page,
            },
        });
        const { message, data } = result.data;

        return new Response(message, true, data);
    } catch (error) {
        if (error.response) {
            const status_code = error.response.status;
            return new Response(
                error.response.data.message,
                false,
                null,
                status_code === 401
            );
        } else {
            console.error(error);
            return new Response('Unexpected server error occurred.');
        }
    }
}

/**
 * Register a user.
 * @param {String} email Email.
 * @param {String} username Username.
 * @param {String} password Password.
 * @returns {Promise<APIResponse>} Returns the API response object.
 */
async function register(email, username, password) {
    try {
        const result = await axios.post(`${url}${endpoints.register}`, {
            email,
            username,
            password,
        });
        const { message } = result.data;
        if (result.status !== 201)
            throw new Error(
                `Expected a successful status code '201' but got a status code '${result.status}'.`
            );

        return new Response(message, true);
    } catch (error) {
        if (error.response) {
            const status_code = error.response.status;
            return new Response(
                error.response.data.message,
                false,
                null,
                status_code === 401
            );
        } else {
            console.error(error);
            return new Response('Unexpected server error occurred.');
        }
    }
}

/**
 * Send a user authorization request and receive the access token.
 * @param {String} username Username.
 * @param {String} password Password.
 * @returns {Promise<APIResponse>} Returns the API response object.
 */
async function authorize(username, password) {
    try {
        const result = await axios.post(`${url}${endpoints.authorize}`, {
            username,
            password,
        });
        const { message, email, role, token } = result.data;
        if (result.status !== 200)
            throw new Error(
                `Expected a successful status code '200' but got a status code '${result.status}'.`
            );
        else if (!token)
            throw new Error(
                `Expected a valid authentication token but got '${token}' value.`
            );

        return new Response(message, true, { username, email, role, token });
    } catch (error) {
        if (error.response) {
            const status_code = error.response.status;
            return new Response(
                error.response.data.message,
                false,
                null,
                status_code === 401
            );
        } else {
            console.error(error);
            return new Response('Unexpected server error occurred.');
        }
    }
}

/**
 * Get user information.
 * @param {String} username Username.
 * @param {String} token Access token.
 * @returns {Promise<APIResponse>} Returns the API response object.
 */
async function getUserInfo(username, token) {
    try {
        const result = await axios.get(`${url}${endpoints.user}/${username}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        const { message, data } = result.data;

        return new Response(message, true, data);
    } catch (error) {
        if (error.response) {
            const status_code = error.response.status;
            return new Response(
                error.response.data.message,
                false,
                null,
                status_code === 401
            );
        } else {
            console.error(error);
            return new Response('Unexpected server error occurred.');
        }
    }
}

/**
 * Verify user authentication session.
 * @param {Object} sessionData Session data.
 * @returns {Promise<APIResponse>} Returns the API response object.
 */
async function verifySession(sessionData) {
    try {
        const result = await axios.post(
            `${url}${endpoints.verifySession}`,
            {},
            {
                headers: {
                    Authorization: `Bearer ${sessionData.token}`,
                },
            }
        );
        const { message, data } = result.data;

        return new Response(message, true, data);
    } catch (error) {
        if (error.response) {
            const status_code = error.response.status;
            return new Response(
                error.response.data.message,
                false,
                null,
                status_code === 401
            );
        } else {
            console.error(error);
            return new Response('Unexpected server error occurred.');
        }
    }
}

/**
 * Get chairs.
 * @param {Number} floor Floor.
 * @param {Number} page Pagination.
 * @returns {Promise<APIResponse>} Returns the API response object.
 */
async function getChairs(floor, page = 1) {
    try {
        const result = await axios.get(`${url}${endpoints.chair}`, {
            params: {
                floor,
                page,
            },
        });
        const { message, data } = result.data;

        return new Response(message, true, data);
    } catch (error) {
        if (error.response) {
            const status_code = error.response.status;
            return new Response(
                error.response.data.message,
                false,
                null,
                status_code === 401
            );
        } else {
            console.error(error);
            return new Response('Unexpected server error occurred.');
        }
    }
}

export {
    getTestPosts,
    register,
    authorize,
    getUserInfo,
    verifySession,
    getChairs,
};
