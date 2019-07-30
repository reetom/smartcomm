
import React, {Component} from 'react';
import CreateEmptyCart from './createemptycart';

const UpdateCart = (parameterToUpdate, parameterValue) => {
    console.log("udpate cart function is called.");
    console.log("the following details are added to the cart : " + parameterToUpdate + " and " + parameterValue);

    // Get the Complete Cart Object and set the values here. This cart will remain alive 
    // through checkout untill order confirmation. This function will be called all through the checkout process
    // Purge cart at order confirmation.
    var cartObject = JSON.parse(localStorage.getItem("cart"));

    //If the cart is empty, create a new cart before updating the cart.
    if (cartObject === null){
      CreateEmptyCart();
    }
    switch(parameterToUpdate){
        case 'updateProducts': {cartObject.cartItems = parameterValue;
                                      //put the cartobject back into session/localstorage.
                                      localStorage.setItem("cart",JSON.stringify(cartObject));
                                      console.log("Updated cart in session :"+JSON.parse(localStorage.getItem("cart")));
                                      recalculateCart("recalculating cart due to updated product or quanity");
                                }
        break;

        case 'updateShippingAddress': {cartObject.shippingAddress = parameterValue
                                        //put the cartobject back into session/localstorage.
                                        localStorage.setItem("cart",JSON.stringify(cartObject));
                                        console.log("Updated cart in session :"+JSON.parse(localStorage.getItem("cart")));
                                }
        break;

        case 'updateBillingAddresss': {cartObject.billingAddress = parameterValue;
                                        //put the cartobject back into session/localstorage.
                                        localStorage.setItem("cart",JSON.stringify(cartObject));
                                        console.log("Updated cart in session :"+JSON.parse(localStorage.getItem("cart")));
        
                                }
        break;

        case 'updateShippingMethodAndPrice': {cartObject.shippingMethodAndPrice = parameterValue;
                                              //put the cartobject back into session/localstorage.
                                              localStorage.setItem("cart",JSON.stringify(cartObject));
                                              console.log("Updated cart in session :"+JSON.parse(localStorage.getItem("cart")));
                                              recalculateCart("recalculating cart to add shipping fee");
                                            }
        break;

        case 'updateCartTotals': {cartObject.cartTotal = parameterValue;
                                              //put the cartobject back into session/localstorage.
                                              localStorage.setItem("cart",JSON.stringify(cartObject));
                                              console.log("Updated cart in session :"+JSON.parse(localStorage.getItem("cart")));
        }

        break;

        case 'updatePromotions': {cartObject.promotions = parameterValue;
                                  //put the cartobject back into session/localstorage.
                                  localStorage.setItem("cart",JSON.stringify(cartObject));
                                  console.log("Updated cart in session :"+JSON.parse(localStorage.getItem("cart")));
                                  recalculateCart("recalculating cart to add promotions");
                                }
        break;

        case 'updateGiftCards': {cartObject.gitCards = parameterValue;
                                  //put the cartobject back into session/localstorage.
                                  localStorage.setItem("cart",JSON.stringify(cartObject));
                                  console.log("Updated cart in session :"+JSON.parse(localStorage.getItem("cart")));
                                  recalculateCart("recalculating cart to add gift cards");
                                }
        break;

        case 'updatePaymentDetails': {cartObject.paymentDetails = parameterValue;
                                  //put the cartobject back into session/localstorage.
                                  localStorage.setItem("cart",JSON.stringify(cartObject));
                                  console.log("Updated cart in session :"+JSON.parse(localStorage.getItem("cart")));
        }
        break;

        case 'updateContact' : {cartObject.contactDetails = parameterValue;
                                  //put the cartobject back into session/localstorage.
                                  localStorage.setItem("cart",JSON.stringify(cartObject));
                                  console.log("Updated cart in session :"+JSON.parse(localStorage.getItem("cart")));
        }

        default:
        break;

    }

    return (
      null
    )
  }

  function recalculateCart(reasonForRecalculation){
    //Reason why the cart is recalcuated
    console.log(reasonForRecalculation);
    const cartObject = JSON.parse(localStorage.getItem("cart"));
    const shippingMethodAndPrice = cartObject.shippingMethodAndPrice;
    const promotions = cartObject.promotions;
    const cartItems = cartObject.cartItems;
    var productSubtotal = 0;
    var shippingCost = 0;
    var tax =0;
    var grandTotal = 0;
    var promotionDiscount = 0;
    console.log(cartItems);
    //Get the product price and calcualte subtotals based on quanity
    cartItems.map(cartItem => {
      productSubtotal = productSubtotal + (cartItem.product.price*cartItem.quantity);
      console.log(cartItem.product.price + ":" + cartItem.quantity);
      console.log("Product totals :" + productSubtotal);
    });
    //Get the shipping cost and add it to the grand total
      shippingCost = shippingMethodAndPrice.shippingPrice;
      console.log("Shipping cost :" + shippingCost);
    //Get the promotional value and deduct it from the grand total
    if (promotions.discountPercentage> 0)
        promotionDiscount = productSubtotal * (promotions.discountPercentage/100);
    //Calculate the taxes
    tax = 0.1* productSubtotal;
    console.log("Tax :" + tax);
    //Calculate the grand total
    grandTotal = (+shippingCost) + (+productSubtotal) + (+tax) - (+promotionDiscount);
    console.log("Grand Total :" + grandTotal);

    //Update the cart with the new total
    UpdateCart("updateCartTotals", {  "subtotal": productSubtotal,
                                     "tax":tax,
                                     "discount":promotionDiscount,
                                     "grandTotal":grandTotal,
                                    "shippingCost":shippingCost
                                    });
}

export default UpdateCart;