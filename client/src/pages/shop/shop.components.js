import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchCollectionsStart } from '../../redux/shop/shop.action';
import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';
import CollectionsContainer from '../collection/collection.container';
import { useEffect } from 'react';



const ShopPage = ({fetchCollectionsStartAsync,match}) =>  {


    useEffect( () => {
        //const {fetchCollectionsStartAsync} = this.props;
        fetchCollectionsStartAsync();
        },[fetchCollectionsStartAsync]);


        return(

            <div className='shop-page'>
               <Route exact path={`${match.path}`} component={CollectionsOverviewContainer} />
               <Route path={`${match.path}/:categoryId`} component={CollectionsContainer} />
              
            </div>
        );   
}

const mapDispatchToProps = (dispatch) => ({
    fetchCollectionsStartAsync : () => dispatch(fetchCollectionsStart())
  });



export default  connect(null, mapDispatchToProps)(ShopPage);