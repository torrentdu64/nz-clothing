import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_wRZncdxvPwvZgNqo09x4Gxbx';

  const onToken = token => {
    axios({
      url: 'payment',
      methode: 'post',
      data: {
        amount: priceForStripe,
        token
      }
    }).then( (res) => {
      alert('success')
    }).catch(err => {
      alert('error')
    })
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='NZ Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
