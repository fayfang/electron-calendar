import { createSlice } from '@reduxjs/toolkit';
import { useSelector, useDispatch } from 'react-redux';
// eslint-disable-next-line import/no-cycle
import { RootState } from '../../store';

const now = new Date();

const initialState = {
  current: {
    year: now.getFullYear(),
    month: now.getMonth() + 1,
  },
  showType: 'month',
};

export type STATE = typeof initialState;

const calendarSlice = createSlice({
  name: 'calendar',
  initialState,
  reducers: {
    updateCurrent: (state, action) => {
      return {
        ...state,
        current: action.payload,
      };
    },
    updateType: (state, action) => {
      return {
        ...state,
        showType: action.payload,
      };
    },
  },
});

export const selectCalendar = (state: RootState) => state.calendar;

export const useGetCalendar = () => {
  const calendarInfo = useSelector(selectCalendar);

  return calendarInfo;
};

export const useDispatchCalendar = () => {
  const dispatch = useDispatch();

  const dispatchFn = {
    updateCurrent: (year: number, month: number) => {
      dispatch(
        calendarSlice.actions.updateCurrent({
          year,
          month,
        })
      );
    },
    updateType: (payload: string) => {
      dispatch(calendarSlice.actions.updateType(payload));
    },
  };

  return dispatchFn;
};

export default calendarSlice.reducer;
