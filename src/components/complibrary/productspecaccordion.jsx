import React, {Component} from 'react';
import { UncontrolledCollapse, Button, CardBody, Card, Table } from 'reactstrap';

const Col1 = {
  width: '20%'
};
const Col2 = {
  width: '80%'
};

class ProductSpecAccordion extends Component{

  constructor(props){
    super(props);
}

render(){

  const productSpecs = this.props.productSpecs;
  let specsToDisplay = [];
  for (let k of Object.keys(productSpecs)){
    console.log(k + " - " + productSpecs[k]);
    console.log(specsToDisplay);
    specsToDisplay.push(<tr><td>{k}</td><td>{productSpecs[k]}</td></tr>);
  }


    return(
      <div>
      <Button block color="primary" id="specsToggler" style={{ marginBottom: '1rem' }}>
        Product Specifications
      </Button>
      <UncontrolledCollapse toggler="#specsToggler">
        <Card>
          <CardBody>
            <div className="div-display-block">
              <Table>

                <tbody>
                <thead>
                    <tr>
                      <th style={Col1}></th>
                      <th style={Col2}></th>
                    </tr>
                  </thead>
                  {specsToDisplay}
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

export default ProductSpecAccordion;