'use server'

import connectionPool from '@/app/config/db.config'

const bcrypt = require('bcrypt');
const saltRounds = 9;

export const checkPassword = async (password, hashed_password) => {
    const isValid = await bcrypt.compare(password, hashed_password);
    return isValid;
}

export const checkEmail = async (email) => {
    try {
        const text = 'SELECT * FROM users WHERE email=$1';
        const value = [email];
        const result = await connectionPool.query(text, value);
        if (result.rows[0] != undefined) {
            return result.rows[0];
        }
        else {
            return false;
        }
    }
    catch (error) {
        console.error(error);
        throw new Error(error);
    }
}

export const saveUser = async (email, username, password) => {
    const hashed_password = await bcrypt.hash(password, saltRounds);
    try {
        const text = 'INSERT INTO users(email, username, hashed_password) VALUES ($1, $2, $3) RETURNING $1';
        const value = [email, username, hashed_password];
        const result = await connectionPool.query(text, value);
        if (result.rows[0] != undefined) {
            return true;
        }
    }
    catch (error) {
        console.log(error);
        throw new Error(error);
    }
}

