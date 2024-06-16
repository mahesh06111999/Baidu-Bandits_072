export const FETCH = 'FETCH';
export const UPDATE = 'UPDATE';
export const ADDTOSCHEDULE = 'ADDTOSCHEDULE';
export const COMPLETE = 'COMPLETE';
export const BOOKAPPOINTMENT = 'BOOKAPPOINTMENT';
export const DELETEAPPOINTMENT = 'DELETEAPPOINTMENT';







// action types
export const SET_WEEKLY_DATA = 'SET_WEEKLY_DATA';
export const SET_EDIT_MODE = 'SET_EDIT_MODE';

// action creators
export const setWeeklyData = (day, data) => ({
  type: SET_WEEKLY_DATA,
  payload: { day, data },
});

export const setEditMode = (day, mode) => ({
  type: SET_EDIT_MODE,
  payload: { day, mode },
});
