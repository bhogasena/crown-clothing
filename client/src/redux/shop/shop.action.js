import ShopActionTypes from "./shop.types";
import { firestore, convertCollectionsSnapshotToMap } from "../../firebase/firebase.utils";

export const fetchCollectionsStart = () => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_START

})

export const fetchCollectionsSuccess = (collections) => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collections

})


export const fetchCollectionsFailure = (errormessage) => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload: errormessage

})

export const fetchCollectionsStartAsync = () => {
    return dispatch => {
        const collectionRef = firestore.collection('collections');
        dispatch(fetchCollectionsStart());
        collectionRef.get().then((snapshot) => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
            //console.log(collectionsMap);
            //updateCollections(collectionsMap);
            dispatch(fetchCollectionsSuccess(collectionsMap));
          }).catch(error => {dispatch(fetchCollectionsFailure(error.message))});
          
        }
    }

