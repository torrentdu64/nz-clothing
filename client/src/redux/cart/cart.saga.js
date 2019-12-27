import { all, call, put , takeLatest } from 'redux-saga/effects';

import userActionTypes from '../user/user.type';
import { clearCart } from './cart.actions';

export function* clearCartOnSignOut(){
    yield put(clearCart());
}


export function* onSignOutSuccess() {
    yield takeLatest( userActionTypes.SIGN_OUT_SUCCESS , clearCartOnSignOut )
}

export function* cartSaga(){
    yield all([call(onSignOutSuccess) ])
}