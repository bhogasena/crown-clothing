import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CollectionPreview from '../../components/collection-preview/collection-preview.coponent'
import { selectShopDataForPreview } from '../../redux/shop/shop.selector';

const CollectionsOverview = ({collections}) => (
            <div>
                {collections.map(({id,...CollectionProps}) => (
                    <CollectionPreview key={id}  {...CollectionProps}/>
                ))}
            </div>
        )
const mapStateToProps = createStructuredSelector({
    collections: selectShopDataForPreview
})
export default connect(mapStateToProps)(CollectionsOverview);