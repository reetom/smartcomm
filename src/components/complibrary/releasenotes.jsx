import React, {Component} from 'react';
import {Container, Row, Col} from 'reactstrap';

class ReleaseNotes extends Component {
    render() {


        return(
            <div className="page-background">
            <Container>
                <Row>
                <h3>SmartComm 1.0</h3>
                    <ol>
                        <li>Home Page</li>
                            <ul type="square">
                                <li>Landing Banner</li>
                                <li>New Arrivals Section</li>
                                <li>Trending Now Section</li>
                                <li>Email subscription</li>
                                <li>ustom content display - video</li>
                                <li>Category Menu</li>
                                <li>Top Nav - Sign In, Track Order, Home, Favorite Badge and Cart Badge</li>
                            </ul>
                        <li>Category Landing Page(CLP)</li>
                            <ul type="square">
                                <li>Filters</li>
                            </ul>
                        <li>Product Landing Page(PLP)</li>
                        <li>Product Display Page(PDP)</li>
                            <ul type="square">
                                <li>Primary Product Image</li>
                                <li>Product Name, Description, Price</li>
                                <li>Product Facets like color</li>
                                <li>Quantity Selector</li>
                                <li>Save for Later</li>
                                <li>Product Specification Accordion</li>
                                <li>Product Review Accordion</li>
                                <li>Product Alternate Images</li>
                                <li>Add to Cart</li>
                            </ul>
                        <li>Shopping Cart</li>
                            <ul type="square">
                                <li>Empty Cart</li>
                                <li>Promotions</li>
                                <li>Saved Products</li>
                                <li>Recommended Products</li>
                                <li>Clear Cart</li>
                                <li>Paypal Express Checkout</li>
                            </ul>
                        <li>Promotions</li>
                        <li>Favorites</li>
                            <ul type="square">
                                <li>Add to Cart</li>
                                <li>Social Share</li>
                                <li>Remove Favorite</li>
                            </ul>
                        <li>Recommended Products</li>
                            <ul type="square"> 
                                <li>Add to Cart</li>
                                <li>Add to Favorite</li>
                                <li>Social Share</li>
                            </ul>
                        <li>Save for Later</li>
                            <ul type="square">
                                <li>Move to Cart</li>
                                <li>Remove From Saved List</li>
                                <li>Social Share</li>
                            </ul>
                        <li>Checkout Options</li>
                            <ul type="square">
                                <li>Continue as Guest</li>
                                <li>Sign-In to Begin Checkout</li>
                                <li>Create Account</li>
                            </ul>
                        <li>Checkout Page</li>
                            <ul type="squ">
                                <li>Shipping Address</li>
                                <li>Billing Address</li>
                                <li>Contact Info</li>
                                <li>Shipping Method and Price</li>
                            </ul>
                        <li>Order Review page</li>
                            <ul>
                                <li>Reivew Items in the Cart</li>
                                <li>Review Order Totals</li>
                                <li>Review Shipping Method and Price</li>
                                <li>Review Shipping and Billing Address</li>
                                <li>Enter Payment Details</li>
                            </ul>
                        <li>Order Confirmation Page</li>
                        <li>My Account - For Signed-in Users</li>
                            <ul type="square">
                                <li>User Profile</li>
                                <li>Promotions</li>
                                <li>Saved Addresses</li>
                                <li>Saved Payment Method</li>
                                <li>Order History</li>
                            </ul>
                        <li>Order Tracking</li>
                        <li>Pagination - PLP and CLP</li>
                        <li>Billing and Payments</li>
                        <li>Paypal Express Checkout</li>
                        <li>Breadcrumbs</li>
                        <li>Sign In</li>
                        <li>Create Account</li>
                    </ol>
                </Row>
                <Row>
                    <h3>What's Next?</h3>
                    <ol>
                        <li>Favorite Badge to reflect the actual Favorite count</li>
                        <li>Cart Badge to reflect the actual Cart count</li>
                        <li>Bundles and Collections</li>
                        <li>Preferences</li>
                        <li>Social Share - Prepare content to share</li>
                        <li>Pagination  - Order History</li>
                        <li>Payments - Integration with Visa/Paypal</li>
                        <li>Minicart</li>
                        <li>Cancel Order</li>
                        <li>Track Shippment</li>
                        <li>Forgot Password, Reset Password</li>
                        <li>Form Validations</li>
                        <li>Store Finder</li>
                        <li>Make the site responsive</li>
                        <li>Error Handling</li>
                        <li>Code Cleanup and Optimization</li>
                    </ol>
                </Row>
                <Row>
                    <h3>Local Storage Item Names (Temporary API replacement)</h3>
                    <ol>
                        <li>SHOPPING CART - "cart"</li>
                        <li>FAVORITES - "favList"</li>
                        <li>SAVED ADDRESSES - "Addresses"</li>
                        <li>SAVED PAYMENTS - "Payments"</li>
                        <li>CUSTOMERS - "Customers"</li>
                        <li>SAVE FOR LATER - "savedList"</li>
                        <li>ALL ORDERS - "AllOrders"</li>
                        <li>APPLICATION CONTEXT - "ApplicationContext"</li>
                    </ol>
                </Row>
                <div className="one-em-spacing"/>
                <div className="one-em-spacing"/>
            </Container>
        </div>
        )
    }
}
export default ReleaseNotes;