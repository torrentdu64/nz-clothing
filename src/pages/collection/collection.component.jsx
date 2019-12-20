import React from 'react';
import {connect} from 'react-redux';


// import CollectionItem from '../../components/collection-item';

import { selectCollection} from '../../redux/shop/shop.selector';

import './collection.styles.scss';


const CollectionPage = ({collection}) => {
    return (
        <div className='collection-page'>
            <h1>Collection page</h1>
        </div>
    );
};
const mapStateToProps = (state, ownProps) => (
    {
    collection: selectCollection(ownProps.match.params.collectionId)(state)
    }
);


export default connect(mapStateToProps)(CollectionPage);

