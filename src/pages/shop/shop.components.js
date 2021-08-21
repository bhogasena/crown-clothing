import React from 'react';
import SHOP_DATA from './shop.data.js';
import CollectionPreview from '../../components/collection-preview/collection-preview.coponent'

class ShopPage extends React.Component{
    constructor() {
        super();
        this.state = {
            collections: SHOP_DATA
        }
    }

    render() {
        //const {collections} = this.state;
        return (
            <div>
                {this.state.collections.map(({id,...CollectionProps}) => (
                    <CollectionPreview key="{id}"  {...CollectionProps}/>
                ))}
            </div>
        )
    }
}

export default ShopPage;