import React from 'react';
import { Route } from 'react-router-dom';
import {  createStructuredSelector} from 'reselect'
import {selectIsCollectionsFetching, selectIsCollectionsLoaded } from '../../redux/shop/shop.selectors';
import { connect } from 'react-redux';

import WithSpinner from '../../components/with-spinner/with-spinner.component';

import CollectionsOverview from '../../components/collection-overview/collection-overview.component';
import CollectionPage from '../collection/collection.component';


import {fetchCollectionsStartAsync} from '../../redux/shop/shop.actions';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);


class ShopPage extends React.Component {
   
    componentDidMount() {
      const { fetchCollectionsStartAsync } = this.props;
      fetchCollectionsStartAsync();
    }
    

  render(){
    const { match, isCollectionsFetching, IsCollectionsLoaded} = this.props;
    
    return (
      <div className='shop-page'>
        <Route exact path={`${match.path}`} render={(props) => <CollectionsOverviewWithSpinner isLoading={isCollectionsFetching} {...props} /> }  />
        <Route path={`${match.path}/:collectionId`} render={ (props) => <CollectionPageWithSpinner  isLoading={!IsCollectionsLoaded}  {...props} /> } />
      </div>
    );
  }
}
const mapStateToProps =  createStructuredSelector({
  isCollectionsFetching: selectIsCollectionsFetching,
  IsCollectionsLoaded: selectIsCollectionsLoaded
});

const mapDispatchToProps = dispatch => ({
 fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);