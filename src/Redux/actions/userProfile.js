import { USER_DATA } from '../constants';

export function userProfile(userData) {
    return {
        type: USER_DATA,
        payload: userData
    }
}