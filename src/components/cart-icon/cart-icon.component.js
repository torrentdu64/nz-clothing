import React from 'react';

import { connect } from 'react-redux';
import { toggleCartHidden  } from '../../redux/cart/cart.action';

import { selectCartItemCount } from '../../redux/cart/cart.selected';

import './cart-icon.styles.scss';

import { ReactComponent as ShoppingIcon }  from '../../assets/shopping-bag.svg';


const CartIcon = ({toggleCartHidden, itemCount}) =>{
    return (
        <div className='cart-icon' onClick={toggleCartHidden}> 
         <ShoppingIcon className='shopping-icon' />
         <span className='item-count'>{itemCount}</span>
        </div>

    );
};

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = (state) => ({
    itemCount: selectCartItemCount(state)
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);