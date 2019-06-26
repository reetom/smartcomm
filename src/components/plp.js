import React, {Component} from 'react';
import {Slider, Checkbox} from 'react-mdl';
import CLPData from './../data/clp.json';
import landingbanner from '../../src/assets/banners/landingbanner5.jpg';
import BuildProductCard from './complibrary/buildproductcard';
import Pagination from './complibrary/pagination';
import {Button,Container, Row, Col, Breadcrumb, BreadcrumbItem, Form, Label,Input, FormGroup} from 'reactstrap';


class PLP extends Component {
    constructor(props){
        super(props);
        this.state = {
            products:[],
            isLoaded: false,
            categoryName:"",
            exampleItems: [],
            pageOfItems: [],
       }
       // bind function in constructor instead of render
       this.onChangePage = this.onChangePage.bind(this);
    }
    //Pagination Stuff
    onChangePage(pageOfItems) {
        // update state with new page of items
        this.setState({ pageOfItems: pageOfItems });
    }
    componentDidMount(){
        //get the category name that was selected on the landing page and set it in state.
        var {categoryName} = this.props.location.state;
        this.setState({categoryName: {categoryName}});
        console.log("loading data for ".concat(categoryName).concat(" category"));
        //Load the stubbed CLPData
        var allProducts = CLPData;
        //Todo - replace with the clp url and get rid of the above stubbed data
        {/*
            fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then (json => {
                this.setState({
                    products: json,
                    isLoaded: true,               
                })
            });
        */}
        //filter the products based on category selected in the landing page.
        var filteredproducts= [];
        if (categoryName ==="all"){
            // set all category products in state
            allProducts.map(product =>{
            filteredproducts.push(product);
            })
        } else {
            allProducts.map(product =>{
                if(product.category === categoryName){
                    filteredproducts.push(product);
                }
            })
        }
        // set the filtered category products in state for pagination
        this.setState({exampleItems:filteredproducts});
    }
    render() {
        var {products} = this.state;
        //loop through every product in the array and build the card.
        const cardUnit = this.state.pageOfItems.map(product =>  <BuildProductCard productFromParent={product}/>)

        return(
            <div className="page-background">
                <Container fluid>
                    <Row>
                        <Col sm={12}>
                            <div className="one-em-spacing"/>
                            <div>
                                    <img
                                        src={landingbanner}
                                        alt="landingbanner1"
                                        className="plp-landing-banner"
                                    />
                            </div>                   
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12}>
                            <div className="one-em-spacing" />
                            <div>
                            <Breadcrumb tag="nav" listTag="div">
                                <BreadcrumbItem tag="a" href="/">Home / </BreadcrumbItem>
                                <BreadcrumbItem active tag="span"> All</BreadcrumbItem>
                            </Breadcrumb>
                            </div> 
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12}>
                            <div className="text-right">
                                <Pagination items={this.state.exampleItems} onChangePage={this.onChangePage} />
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={3}>
                            <div className="plp-refine">
                                    <Form>
                                        <div className="plp-refine-brands">
                                            <h4>Brands</h4>
                                            <FormGroup check>
                                                <Label check>
                                                <Input type="checkbox" />{' '} Gucci</Label>
                                            </FormGroup>
                                                <FormGroup check>
                                                <Label check>
                                            <Input type="checkbox" />{' '} Aldo</Label>
                                            </FormGroup>
                                        </div>
                                        <div className="plp-refine-color">
                                            <h4>Colors</h4>
                                            <FormGroup check>
                                                <Label check>
                                                <Input type="checkbox" />{' '} Blue</Label>
                                            </FormGroup>
                                            <FormGroup check>
                                                <Label check>
                                                <Input type="checkbox" />{' '} White</Label>
                                            </FormGroup>
                                            <FormGroup check>
                                                <Label check>
                                                <Input type="checkbox" />{' '} Maroon</Label>
                                            </FormGroup>
                                            <FormGroup check>
                                                <Label check>
                                                <Input type="checkbox" />{' '} Black</Label>
                                            </FormGroup>
                                            <FormGroup check>
                                                <Label check>
                                                <Input type="checkbox" />{' '} Yellow</Label>
                                            </FormGroup>
                                            <FormGroup check>
                                                <Label check>
                                                <Input type="checkbox" />{' '} Beige</Label>
                                            </FormGroup>
                                            <FormGroup check>
                                            <Label check>
                                                <Input type="checkbox" />{' '} Green</Label>
                                                </FormGroup>
                                            <FormGroup check>
                                                <Label check>
                                                <Input type="checkbox" />{' '} Brown</Label>
                                            </FormGroup>
                                            <FormGroup check>
                                                <Label check>
                                                <Input type="checkbox" />{' '} Orange</Label>
                                            </FormGroup>
                                        </div>
                                        <div className="plp-refine-color">
                                            <h4>Material</h4>
                                            <FormGroup check>
                                                <Label check>
                                                <Input type="checkbox" />{' '} Leather</Label>
                                            </FormGroup>
                                            <FormGroup check>
                                                <Label check>
                                                <Input type="checkbox" />{' '} Fabric</Label>
                                            </FormGroup>
                                            <FormGroup check>
                                                <Label check>
                                                <Input type="checkbox" />{' '} Mixed</Label>
                                            </FormGroup>
                                        </div>
                                        <div  className="plp-refine-price">
                                            <h4>Price</h4>
                                            <Slider min={0} max={5000} defaultValue={2500} />
                                        </div>
                                        <div className="plp-refine-button">
                                            <Button color="primary" raised colored >Apply</Button> <Button color="primary" raised colored >Reset</Button>
                                        </div>
                                    </Form>
                                </div>
                        </Col>
                        <Col sm={9}>
                            <div  className="plp-grid">
                                {cardUnit}
                            </div>
                            <div className="one-em-spacing"/>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
export default PLP;