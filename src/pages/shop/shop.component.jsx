import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import WithSpinner from '../../components/with-spinner/with-spinner.component';

import CollectionsOverview from '../../components/collection-overview/collection-overview.component';
import CollectionPage from '../collection/collection.component';

import { firestore, convertCollectionsSapshotToMap } from '../../firebase/firebase.utils';
import {updateCollection} from '../../redux/shop/shop.actions';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);


class ShopPage extends React.Component {
    state ={ loading: true }
     unsubscribeFromSnapShot = null; 

     componentDidMount(){
       const { updateCollection } = this.props;
        const collectionRef = firestore.collection('collections');
        collectionRef.onSnapshot(async snapshot => {
          const collectionMap = convertCollectionsSapshotToMap(snapshot);
          updateCollection(collectionMap);
          this.setState({ loading: false});
        });
     }

  render(){
    const { match} = this.props;
    const { loading } = this.state;
    return (
      <div className='shop-page'>
        <Route exact path={`${match.path}`} render={(props) => <CollectionsOverviewWithSpinner isLoading={loading} {...props} /> }  />
        <Route path={`${match.path}/:collectionId`} render={ (props) => <CollectionPageWithSpinner  isLoading={loading}  {...props} /> } />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  updateCollection: collectionMap => dispatch(updateCollection(collectionMap))
})

export default connect(null, mapDispatchToProps)(ShopPage);