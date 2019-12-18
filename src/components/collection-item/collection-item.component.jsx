import React from 'react';
import {connect} from 'react-redux'

import './collection-item.styles.scss';

import CustomeButton from '../custom-button/custom-button.component';
import { addItem } from '../../redux/cart/cart.action';

const CollectionItem = ({ item, addItem }) => {
  const {  imageUrl,name,price} = item;
  return(
    <div className='collection-item'>
      <div
        className='image'
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className='collection-footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <CustomeButton onClick={() => addItem(item)} inverted >Add TO CART</CustomeButton> 
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);