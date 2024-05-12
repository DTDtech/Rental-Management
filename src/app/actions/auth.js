'use server'

import client_DB from '../config/db.config';

const bcrypt = require('bcrypt');
const saltRounds = 9;

export const checkPassword = async (password, hashed_password) => {
    const isValid = await bcrypt.compare(password, hashed_password);
    return isValid;
}

export const checkEmail = async (email) => {
    const checkDuplicateEmail = {
        "email": email
    }
    try {
        const result = await client_DB.collection('users').findOne(checkDuplicateEmail);
        if (result != undefined) {
            return result;
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
    const account = {
        "email": email,
        "username": username,
        "hashed_password": hashed_password 
    }
    try {
        const result = await client_DB.collection('users').insertOne(account);
        if (result.insertedId != undefined) {
            return true;
        }
    }
    catch (error) {
        console.log(error);
        throw new Error(error);
    }
}

