import React from 'react';
import {  useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import CollectionItem from '../../components/collection-item/collection-item.component';
import { selectCollection } from '../../redux/shop/shop.selector';
import './collection.styles.scss';

const CollectionPage = () => {

    const {categoryId} = useParams();
    const collection = useSelector(selectCollection(categoryId));


    const {title,items} = collection;
    console.log(collection);
    
    return(
    <div className='collection-page'>
        <h2 className="title">{title}</h2>
        <div className="items">
            {
                items.map(item => (<CollectionItem key={item.id} item={item}/> ))
            }
        </div>
    </div>
);
};

// const mapStateToProps=(state, ownProps1) => ({   
//     collection: selectCollection(ownProps1.match.params.categoryId)(state)
// });

//export default connect(mapStateToProps)(CollectionPage);
export default CollectionPage;