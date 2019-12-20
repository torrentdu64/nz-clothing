import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeButtonCheckout = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_wRZncdxvPwvZgNqo09x4Gxbx';

    const onToken = token => {
        alert('payment successful');
    }

    return (
        <StripeCheckout 
        label='Pay now'
        name='Nz Clothing Ltd.'
        billingAddress
        shippingAddress
        image='https://sendeyo.com/up/d/f3eb2117da'
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLable='Pay Now'
        token={onToken}
        stripeKey={publishableKey}
        />
    );
}


export default StripeButtonCheckout;