import React, {Component} from 'react';
import { UncontrolledCollapse, Button, CardBody, Card, Table } from 'reactstrap';
import ProductReviews from './../../data/productreview';

const Col1 = {
  width: '20%',
  textAlign: 'center'
};
const Col2 = {
  width: '80%',
  textAlign: 'left'
};

class CustomerReviewsAccordion extends Component{

  constructor(props){
    super(props);
    this.state = {
      productReviewsToDisplay:"",
      profile_image:"https://ehroplar.sirv.com/Images/smartcomm/socialMediaIcons/profile_pic_placeholder.png"
    }
  }

  buildReviews(){
    const productSpecs = ProductReviews;
    const reviews = productSpecs.reviews;
    //Use the following product object to match reviews to products when connected to the real APIs.
    const product = this.props.product;

    var productReviewsToDisplay = reviews.map( review => 

                <tr>
                  <td style={Col1}>
                      <div className="image-center">
                          <img src={this.state.profile_image}
                                alt={""}
                                className="profile-image"
                          />                                   
                        </div>
                        <div className="align-center"> 
                          {review.name}
                        </div>
                  </td >
                  <td style={Col2}>
                    <div class="rating">
                      <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
                    </div>
                    <div>{review.date}</div>
                    <div className="one-em-spacing"/>
                    <div className="h6-text-justify">
                      {review.feedback}
                    </div>
                  </td>
                </tr>
              );
              this.setState({productReviewsToDisplay:productReviewsToDisplay});
  }

  componentDidMount(){
    this.buildReviews();
  }

  render(){
    const {productReviewsToDisplay} = this.state;


    return(
      <div>
      <Button block color="primary" id="reviewsToggler" style={{ marginBottom: '1rem' }}>
        Customer Reviews
      </Button>
      <UncontrolledCollapse toggler="#reviewsToggler">
        <Card>
            <CardBody>
              <div className="div-display-block">
                <Table>
                  <tbody>
                  <thead>
                      <tr>
                        <th ></th>
                        <th ></th>
                      </tr>
                    </thead>
                    {productReviewsToDisplay}
                  </tbody>
                </Table>
              </div>

            </CardBody>
          </Card>
      </UncontrolledCollapse>
    </div>
    );
  }
}

export default CustomerReviewsAccordion;