import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import persistStore from 'redux-persist/lib/storage/session';
import hotelReducer from './Hotels/hotels.reducer';


const persistConfig = {
  key: 'root',
  storage: persistStore,
  whitelist: ['hotels']
}

const rootReducer = combineReducers({
  hotels: hotelReducer
});


export default persistReducer(persistConfig, rootReducer);