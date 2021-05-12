import {combineReducers} from 'redux';
import AuthReducers from './Authreduces';
import Productreducer from '../Reducers/Productreducer'
//import ProductReducers from './productreducers';
import Cartreducers from '../Reducers/Cartreducers'
const rootReducer=combineReducers(
{
	authData:AuthReducers,
	Productdata:Productreducer,
	CartData:Cartreducers
}
)

export default rootReducer;