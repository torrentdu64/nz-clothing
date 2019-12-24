import { createSelector } from 'reselect';



const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
);

export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    collections => collections ? Object.keys(collections).map( key => collections[key]) : []
)

export const selectCollection = collectionUrlParams => 
    createSelector(
        [selectCollections],
    //    collections => collections.find( collection => collection.id === COLLECTION_ID_MAP[collectionUrlParams])
        collections => collections ? collections[collectionUrlParams] : []
    )


export const selectIsCollectionsFetching = createSelector(
    [selectShop],
    shop => shop.isFetching
)

export const selectIsCollectionsLoaded = createSelector(
    [selectShop],
    shop => !!shop.collections
)