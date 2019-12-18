import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';

import './cart-dropdown.styles.scss';

import CartItem from '../cart-item/cart-item.component';
import { selectCartItemCount } from '../../redux/cart/cart.selected';


const CartDropdown = ({cartItems}) => {
    return (
            <div className='cart-dropdown'>
                <div className='cart-items'>
                  {
                    cartItems.map( cartItem => <CartItem key={cartItem.id} item={cartItem} />)
                  }
                 <CustomButton>Go to checkout</CustomButton>
                </div>
            </div>
    );
};

const mapStateToProps = (state) => ({
    cartItems: selectCartItemCount(state)
});

export default connect(mapStateToProps)(CartDropdown);