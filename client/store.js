import { StoreCreator } from 'redux';
import { composeWithDevTools } from '@reduxjs/toolkit/dist/devtoolsExtension';
import reducers from './reducers';

const store = StoreCreator(
    reducers,
    composeWithDevTools
)

export default store;