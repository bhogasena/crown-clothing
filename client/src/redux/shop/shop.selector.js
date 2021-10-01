import { createSelector } from "reselect";


const selectShop = state => state.shop;

export const selectShopData = createSelector(
    [selectShop],
    shop => shop.shop
);

export const selectShopDataForPreview = createSelector(
    [selectShopData],
    shop => shop? Object.keys(shop).map(key => shop[key]): []
)
export const selectCollection = collectionUrlparam => createSelector(
    [selectShopData],
    collections => collections ? collections[collectionUrlparam] :null
);

export const selectIsCollectionFetching = createSelector(
    [selectShop],
    shop => shop.isFetching
)

export const selectIsCollectionLoaded = createSelector(
    [selectShop],
    shop => !!shop.shop
)