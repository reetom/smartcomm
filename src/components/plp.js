import React, {Component} from 'react';
import {Slider, Checkbox} from 'react-mdl';
import CLPData from './../data/clp.json';
import landingbanner from '../../src/assets/banners/landingbanner5.jpg';
import BuildProductCard from './complibrary/buildproductcard';
import Pagination from './complibrary/pagination';
import {Button,Container, Row, Col, Breadcrumb, BreadcrumbItem, Form, Label,Input, FormGroup} from 'reactstrap';
import FilterProducts from './complibrary/filterproducts';

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
       this.onSubmit = this.onSubmit.bind(this);
       this.reset = this.reset.bind(this);
    }
    //Pagination Stuff
    onChangePage(pageOfItems) {
        // update state with new page of items
        this.setState({ pageOfItems: pageOfItems });
    }

    reset(event){
        console.log("reset filters");
        event.preventDefault();
        //Not need to call filter, just displa all products.
        this.setState({exampleItems:CLPData});

    }

    //Filter products based on user selection
    onSubmit(event){
        event.preventDefault();
        const data = new FormData(event.target);

        //get the category name that was selected on the landing page and set it in state.
        var {categoryName} = this.props.location.state;
        //filter the products based on category selected in the landing page.
        //Load the stubbed CLPData
        var allProducts = CLPData;
        var filteredProducts= [];
        var finalProductList =[];
        if (categoryName ==="all"){
            // set all category products in state
            allProducts.map(product =>{
            filteredProducts.push(product);
            })
        } else {
            allProducts.map(product =>{
                if(product.category === categoryName){
                    filteredProducts.push(product);
                }
            })
        }
        // Get the selected checkbox values
        var brandArray =[];
        var colorArray =[];
        var makeArray =[];

        //Get selected Brands
        if ( data.get("Gucci") === "on")
            brandArray.push("Gucci");

        if ( data.get("Aldo") === "on")
            brandArray.push("Aldo");

        //Get selecgted make
        if ( data.get("Fabric") === "on")
            makeArray.push("Fabric");

        if ( data.get("Leather") === "on")
            makeArray.push("Leather");

        if ( data.get("Mixed") === "on")
            makeArray.push("Mixed");

        //Get selected colors

        if ( data.get("Blue") === "on")
            colorArray.push("Blue");

        if ( data.get("White") === "on")
            colorArray.push("White");

        if ( data.get("Maroon") === "on")
            colorArray.push("Maroon");

        if ( data.get("Black") === "on")
            colorArray.push("Black");

            if ( data.get("Yellow") === "on")
            colorArray.push("Yellow");

        if ( data.get("Beige") === "on")
            colorArray.push("Beige");

        if ( data.get("Green") === "on")
            colorArray.push("Green");

        if ( data.get("Brown") === "on")
            colorArray.push("Brown");

        if ( data.get("Orange") === "on")
            colorArray.push("Orange");

        //Build the filter criteria obect
        var filterCriteria = { "brandArray" : brandArray,
                                "colorArray" : colorArray,
                                "makeArray" : makeArray
        }

        console.log("selected filters :" + JSON.stringify(filterCriteria));
        //Summon the filter only if filter options are selected.
        if (brandArray.length >0 || colorArray.length > 0 || makeArray.length >0 ){
            finalProductList = FilterProducts(filterCriteria, filteredProducts);
            //set the filtered category products in state for pagination, set this finalProductList.
            this.setState({exampleItems:finalProductList});
        } else {
            console.log("No filter options selectd");
        }

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
                                    <Form onSubmit = {this.onSubmit}>
                                        <div className="plp-refine-brands">
                                            <h4>Brands</h4>
                                            <FormGroup check>
                                                <Label check>
                                                <Input type="checkbox" name="Gucci" id="Gucci"/>{' '} Gucci</Label>
                                            </FormGroup>
                                                <FormGroup check>
                                                <Label check>
                                            <Input type="checkbox" name="Aldo" id="Aldo"/>{' '} Aldo</Label>
                                            </FormGroup>
                                        </div>
                                        <div className="plp-refine-color">
                                            <h4>Colors</h4>
                                            <FormGroup check>
                                                <Label check>
                                                <Input type="checkbox" name="Blue" id="Blue"/>{' '} Blue</Label>
                                            </FormGroup>
                                            <FormGroup check>
                                                <Label check>
                                                <Input type="checkbox" name="White" id="White"/>{' '} White</Label>
                                            </FormGroup>
                                            <FormGroup check>
                                                <Label check>
                                                <Input type="checkbox" name="Maroon" id="Maroon"/>{' '} Maroon</Label>
                                            </FormGroup>
                                            <FormGroup check>
                                                <Label check>
                                                <Input type="checkbox" name="Black" id="Black"/>{' '} Black</Label>
                                            </FormGroup>
                                            <FormGroup check>
                                                <Label check>
                                                <Input type="checkbox" name="Yellow" id="Yellow"/>{' '} Yellow</Label>
                                            </FormGroup>
                                            <FormGroup check>
                                                <Label check>
                                                <Input type="checkbox" name="Beige" id="Beige"/>{' '} Beige</Label>
                                            </FormGroup>
                                            <FormGroup check>
                                            <Label check>
                                                <Input type="checkbox" name="Green" id="Green"/>{' '} Green</Label>
                                                </FormGroup>
                                            <FormGroup check>
                                                <Label check>
                                                <Input type="checkbox" name="Brown" id="Brown"/>{' '} Brown</Label>
                                            </FormGroup>
                                            <FormGroup check>
                                                <Label check>
                                                <Input type="checkbox" name="Orange" id="Orange"/>{' '} Orange</Label>
                                            </FormGroup>
                                        </div>
                                        <div className="plp-refine-color">
                                            <h4>Material</h4>
                                            <FormGroup check>
                                                <Label check>
                                                <Input type="checkbox" name="Leather" id="Leather"/>{' '} Leather</Label>
                                            </FormGroup>
                                            <FormGroup check>
                                                <Label check>
                                                <Input type="checkbox" name="Fabric" id="Fabric"/>{' '} Fabric</Label>
                                            </FormGroup>
                                            <FormGroup check>
                                                <Label check>
                                                <Input type="checkbox" name="Mixed" id="Mixed"/>{' '} Mixed</Label>
                                            </FormGroup>
                                        </div>
                                        <div  className="plp-refine-price">
                                            <h4>Price</h4>
                                            <Slider min={0} max={5000} defaultValue={2500} />
                                        </div>
                                        <div className="plp-refine-button">
                                            <Button color="primary" raised colored>Apply</Button> <Button color="primary" raised colored onClick={(event) => this.reset(event)}>Reset</Button>
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