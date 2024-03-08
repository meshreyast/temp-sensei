import { call, put, takeEvery } from 'redux-saga/effects'
import axios from 'axios';
import { fetchParentsFailure, fetchParentsRequest, fetchParentsSuccess } from '../slice/parentSlice';

function* getParentsDataSaga(action) {
    try {
        const { phoneNum } = action.payload;
        const res = yield call(axios.get, `https://sensei-app-c8da1e59e645.herokuapp.com/sensei/api/v1/details/parent/${phoneNum}`)
        yield put(fetchParentsSuccess(res.data))
    } catch (error) {
        yield put(fetchParentsFailure(error.message))
    }
}

function* watchAsyncData() {
    yield takeEvery(fetchParentsRequest.type, getParentsDataSaga);
}

export default watchAsyncData;