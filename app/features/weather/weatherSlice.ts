import { useEffect } from 'react';
import { createSlice } from '@reduxjs/toolkit';
import { useSelector, useDispatch } from 'react-redux';
import { getWeather } from '../../utils/map';
import { FORECAST } from './weatherInter';
// eslint-disable-next-line import/no-cycle
import { RootState, AppThunk } from '../../store';
// eslint-disable-next-line import/no-cycle
import { selectCity } from '../city/citySlice';

const weatherSlice = createSlice({
  name: 'weather',
  initialState: ((): FORECAST => ({
    casts: [],
  }))(),
  reducers: {
    updateWeather: (_state, action) => {
      return action.payload;
    },
  },
});

export const { updateWeather } = weatherSlice.actions;

export const selectWeather = (state: RootState) => state.weather;

const getAsyncInfo = (adcode: string): AppThunk => (dispatch) => {
  getWeather(adcode)
    .then((res) => {
      if (res) {
        dispatch(updateWeather(res.data.forecasts[0]));
      }
      return res;
    })
    .catch((e) => {
      throw new Error(e);
    });
};

export const useGetWeather = () => {
  const dispatch = useDispatch();
  const weatherInfo = useSelector(selectWeather);
  const cityInfo = useSelector(selectCity);

  useEffect(() => {
    if (cityInfo.adcode) {
      dispatch(getAsyncInfo(cityInfo.adcode));
    }
  }, [cityInfo, dispatch]);

  return weatherInfo;
};

export default weatherSlice.reducer;
