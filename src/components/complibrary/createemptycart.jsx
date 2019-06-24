
import React, {Component} from 'react';

const CreateEmptyCart = () => {
   
    var emptyCart = JSON.parse(localStorage.getItem("cart"));
    if (emptyCart === null) {
        // Create an empty cart with placeholders and all values set to 0.

            var cartItems = [];
            var cartTotal ={  "subtotal": "0.00",
                              "tax":"0.00",
                              "discount":"0.00",
                              "grandTotal":"0.00"
                            };
            var shippingAddress = { "firstName":"",
                                    "lastName":"",
                                    "streetAddress":"",
                                    "city":"",
                                    "state":"",
                                    "zipcode":"",
                                    "country":""
                                };
            var billingAddress = { "firstName":"",
                                  "lastName":"",
                                  "streetAddress":"",
                                  "city":"",
                                  "state":"",
                                  "zipcode":"",
                                  "country":""
                                };
            var promotions = { "promocode":"",
                               "isPromoCodeValid":"",
                               "discountPrice":"0.00",
                               "expiryDate":"",
                               "discountPercentage":""
                            };
            var giftCard = { "cardNumber":"",
                             "isGiftCardValid":"",
                             "cvv":"",
                             "expiryDate":"",
                            };
            var shippingMethodAndPrice = { "shippingMethod":"",
                                           "shippingPrice":"",
                                           "expectedDelivery": ""
                                         };
            var paymentDetails = {  "cardType": "",
                                    "cardNumber": "",
                                    "expiryDate":  "",
                                    "cvvNumber": ""

                                }
            var cart = {   "cartItems": cartItems,
                            "cartTotal": cartTotal,
                            "shippingAddress": shippingAddress,
                            "billingAddress":billingAddress,
                            "promotions":{promotions},
                            "giftCard":giftCard,
                            "shippingMethodAndPrice":shippingMethodAndPrice,
                            "paymentDetails": paymentDetails
                        };


        //Set this empty cart in localstorage.
        localStorage.setItem("cart",JSON.stringify(cart));
        console.log("Empty cart created...");
    }
    return (
      null
    )
  }

export default CreateEmptyCart;