import { useEffect } from 'react';
import { createSlice } from '@reduxjs/toolkit';
import { useSelector, useDispatch } from 'react-redux';
import { getCity } from '../../utils/map';
// eslint-disable-next-line import/no-cycle
import { RootState, AppThunk } from '../../store';

const citySlice = createSlice({
  name: 'city',
  initialState: {
    province: '',
    city: '',
    adcode: '',
  },
  reducers: {
    updateCity: (_state, action) => {
      return action.payload;
    },
  },
});

export const { updateCity } = citySlice.actions;

export const selectCity = (state: RootState) => state.city;

const getAsyncInfo = (): AppThunk => (dispatch) => {
  getCity()
    .then((res) => {
      if (res) {
        dispatch(updateCity(res.data));
      }
      return res;
    })
    .catch((e) => {
      throw new Error(e);
    });
};

export const useGetCity = () => {
  const dispatch = useDispatch();
  const cityInfo = useSelector(selectCity);

  useEffect(() => {
    dispatch(getAsyncInfo());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return cityInfo;
};

export type CITYINFO = ReturnType<typeof useGetCity>;
export default citySlice.reducer;
