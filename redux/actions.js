redux/actions.js
export const SET_MAJOR = 'SET_MAJOR';

export const setSelectedMajor = (major) => ({
    type: SET_MAJOR,
    payload: major,
});