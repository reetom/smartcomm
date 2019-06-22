import React, {Component} from 'react';
import { UncontrolledCollapse, Button, CardBody, Card } from 'reactstrap';


class ProductSpecAccordion extends Component{

render(){
    return(
      <div>
      <Button block color="primary" id="specsToggler" style={{ marginBottom: '1rem' }}>
        Product Specifications
      </Button>
      <UncontrolledCollapse toggler="#specsToggler">
        <Card>
          <CardBody>
            <div className="div-display-block">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt magni, voluptas debitis
              similique porro a molestias consequuntur earum odio officiis natus, amet hic, iste sed
              dignissimos esse fuga! Minus, alias.
            </div>

          </CardBody>
        </Card>
      </UncontrolledCollapse>
    </div>
    );

  }

}

export default ProductSpecAccordion;