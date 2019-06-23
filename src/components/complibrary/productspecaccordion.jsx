import React, {Component} from 'react';
import { UncontrolledCollapse, Button, CardBody, Card, Table } from 'reactstrap';

const Col1 = {
  width: '50%',
  textAlign: 'center'
};
const Col2 = {
  width: '50%',
  textAlign: 'center'
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
    specsToDisplay.push(<tr><td style={Col1}>{k.toUpperCase()}</td ><td style={Col2}>{productSpecs[k].toUpperCase()}</td></tr>);
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
                      <th ></th>
                      <th ></th>
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