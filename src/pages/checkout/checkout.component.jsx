import React from 'react';
import {connect} from 'react-redux';
import { createStructuredSelector} from 'reselect';

import { selectCartItems, selectCartToTal} from '../../redux/cart/cart.selected';

import './checkout.styles.scss';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeButtonCheckout from '../../components/stripe-button/stripe-button.component';

const CheckoutPage = ({cartItems, total}) => {
    return (
        <div className='checkout-page'>
            <div className='checkout-header'>
                <div className='hearder-block'>
                    <span>Product</span>
                </div>
                <div className='hearder-block'>
                    <span>Description</span>
                </div>
                <div className='hearder-block'>
                    <span>Quantity</span>
                </div>
                <div className='hearder-block'>
                    <span>Price</span>
                </div>
                <div className='hearder-block'>
                    <span>Remove</span>
                </div>
            </div>
            {cartItems.map( cartItem => <CheckoutItem  key={cartItem.id} cartItem={cartItem} /> )}
            <div className='total'>TOTAL: ${total}</div>
            <StripeButtonCheckout price={total}/>
        </div>
    )
}


const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartToTal
})

export default connect(mapStateToProps)(CheckoutPage);