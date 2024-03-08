import { call, put, takeEvery } from 'redux-saga/effects'
import { fetchParentsFailure, fetchParentsRequest, fetchParentsSuccess } from '../slice/parentSlice';
import { fetchChildrenFailure, fetchChildrenRequest, fetchChildrenSuccess } from '../slice/childrenSlice';
import { getChildrenDataAPI, getParentsDataAPI } from '../../apis';

function* getParentsDataSaga(action) {
    try {
        const { phoneNum } = action.payload;
        const res = yield call(getParentsDataAPI, phoneNum)
        yield put(fetchParentsSuccess(res?.data))
    } catch (error) {
        yield put(fetchParentsFailure(error.message))
    }
}

function* getChildrenDataSaga(action) {
    try {
        const { id } = action.payload;
        const res = yield call(getChildrenDataAPI, id)
        yield put(fetchChildrenSuccess(res?.data))
    } catch (error) {
        yield put(fetchChildrenFailure(error.message))
    }
}

function* watchAsyncData() {
    yield takeEvery(fetchParentsRequest.type, getParentsDataSaga);
    yield takeEvery(fetchChildrenRequest.type, getChildrenDataSaga);
}

export default watchAsyncData;