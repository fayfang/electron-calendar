/* eslint-disable import/no-cycle */
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';
import cityReducer from './features/city/citySlice';
import weatherReducer from './features/weather/weatherSlice';
import counterReducer from './features/counter/counterSlice';
import calendarReducer from './features/calendar/calendarSlice';

export default function createRootReducer(history: History) {
  return combineReducers({
    router: connectRouter(history),
    city: cityReducer,
    weather: weatherReducer,
    counter: counterReducer,
    calendar: calendarReducer,
  });
}
