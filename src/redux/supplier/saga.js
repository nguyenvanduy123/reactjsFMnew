import { all, call, fork, put, takeEvery } from '@redux-saga/core/effects';
import actions from './action';
import factories from './factory';


function* watchSample1()
{

    yield takeEvery(actions.FETCH_SAMPLE_1, function* (payload)
    {
        // đạt test
        // console.log('====================================');
        // console.log("watchSample1", payload);
        // console.log('====================================');
        try {
            const response = yield call(() =>
                factories.fetchSample(payload),
            );

            yield put({
                type: actions.FETCH_SAMPLE_1_SUCCESS,
                payload: response.Data,
            });
            // đạt test
            // console.log('====================================');
            // console.log("watchSample1 response", response);
            // console.log('====================================');
        } catch (error) {

        } finally {
        }
    });
    // console.log('====================================');
    // console.log("watchSample1");
    // console.log('====================================');
}
function* watchSample2()
{
    // console.log('====================================');
    // console.log("watchSample2");
    // console.log('====================================');
    yield takeEvery(actions.FETCH_SAMPLE_2, function* (payload)
    {
        try {
            const response = yield call(() =>
                factories.updateSample(payload),
            );
            yield put({
                type: actions.FETCH_SAMPLE_2_SUCCESS,
                payload: response.Data,
            });
        } catch (error) {

        } finally {
        }
    });
}
function* watchGetData(){
    yield takeEvery(actions.FETCH_GET_DATA, function* (payload){
        try{
            const response = yield call(()=>
                factories.fetchSample(payload),
            );
            yield put({
                type: actions.FETCH_GET_DATA_SUCCESS,
                payload:response.Data,
            })
        }catch(error){

        }finally{

        }
    });
}
export default function* AppSaga()
{
    yield all([
        fork(watchSample1),
        fork(watchSample2),
        fork(watchGetData),
    ]);
}