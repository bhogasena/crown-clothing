import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios'

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_WBqax2FWVzS9QlpJScO07iuL';

  const onToken = token => {
    console.log(token);
    
    axios({
      url:'payment',
      method:'POST',
      data:{
        amount: priceForStripe,
        token
      }
    }).then(res=>{
      alert('Payment Succesful!');
    }).catch(error => {
      console.log(JSON.parse(error));
      alert('Payment Not Succesful!');
    })
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing Ltd.'
      billingAddress
      shippingAddress
      image='C:\Bhoga\Training\Projects\workspace-react\crown-clothing\public\favicon.ico'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;