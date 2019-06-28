
import React, {Component} from 'react';

const UpdateCart = (parameterToUpdate, parameterValue) => {
    console.log("udpate cart function is called.");
    console.log("the following details are added to the cart");
    console.log(parameterToUpdate);
    console.log(parameterValue);

    // Get the Complete Cart Object and set the values here. This cart will remain alive 
    // through checkout untill order confirmation. This function will be called all through the checkout process
    // Purge cart at order confirmation.
    var cartObject = JSON.parse(localStorage.getItem("cart"));

    switch(parameterToUpdate){
        case 'updateProducts': cartObject.cartItems = parameterValue;
        break;

        case 'updateShippingAddress': cartObject.shippingAddress = parameterValue;
        break;

        case 'updateBillingAddresss': cartObject.billingAddress = parameterValue;
        break;

        case 'updateShippingMethodAndPrice': cartObject.shippingMethodAndPrice = parameterValue;
        break;

        case 'updateCartTotals': cartObject.cartTotal = parameterValue;
        break;

        case 'updatePromotions': cartObject.promotions = parameterValue;
        break;

        case 'updateGiftCards': cartObject.gitCards = parameterValue;
        break;

        case 'updatePaymentDetails': cartObject.paymentDetails = parameterValue;
        break;

        case 'updateContact' : cartObject.contactDetails = parameterValue;

        default:
        break;

    }
    //put the cartobject back into session/localstorage.
    localStorage.setItem("cart",JSON.stringify(cartObject));
    console.log(JSON.parse(localStorage.getItem("cart")));
    return (
      null
    )
  }

export default UpdateCart;