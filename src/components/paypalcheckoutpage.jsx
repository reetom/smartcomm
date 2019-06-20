import React from 'react';
import PaypalButton from './complibrary/paypalbutton';
 
const CLIENT = {
    sandbox: 'xxxXXX',
    production: 'xxxXXX',
  };

  const ENV = process.env.NODE_ENV === 'production'
  ? 'production'
  : 'sandbox';

export default class PayPalCheckoutPage extends React.Component {
    render() { 
    const onSuccess = (payment) => {
      console.log('Successful payment!', payment);
      //Redirect user to the order confirmation page
      let path = '/orderconfirmationpage';
      this.props.history.push(path);
    }

    const onError = (error) =>
      console.log('Erroneous payment OR failed to load script!', error);

    const onCancel = (data) =>
      console.log('Cancelled payment!', data);

    return (
      <div className="pp-button"> 
        <PaypalButton
          client={CLIENT}
          env={ENV}
          commit={true}
          currency={'USD'}
          total={100}
          onSuccess={onSuccess}
          onError={onError}
          onCancel={onCancel}
        />
      </div>
    );
    }  
 }