import {takeLatest,put, call} from 'redux-saga/effects';
import ShopActionTypes from './shop.types';
import { firestore, convertCollectionsSnapshotToMap } from "../../firebase/firebase.utils";
import {
    fetchCollectionsSuccess,
    fetchCollectionsFailure
  } from './shop.action';

export function* fetchCollectionsAsync(){
    try{
        const collectionRef = firestore.collection('collections');    
        const snapshot = yield collectionRef.get();
        const collectionsMap = yield call(convertCollectionsSnapshotToMap,snapshot);
        yield put(fetchCollectionsSuccess(collectionsMap));
    }
    catch(error){
        yield put(fetchCollectionsFailure(error.message));
    }
}
export function* onFetchCollectionStart(){
    yield takeLatest(ShopActionTypes.FETCH_COLLECTIONS_START,fetchCollectionsAsync)
}