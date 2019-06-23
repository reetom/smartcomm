import React, {Component} from 'react';
import {Slider, Checkbox} from 'react-mdl';
import CLPData from './../data/clp.json';
import landingbanner from '../../src/assets/banners/landingbanner5.jpg';
import BuildProductCard from './complibrary/buildproductcard';
import Pagination from './complibrary/pagination';
import {Button,Container, Row, Col} from 'reactstrap';
import { cpus } from 'os';


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
                            <div>
                                Breadcrumbs come here @ToDo
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
                                    <div className="plp-refine-brands">
                                        <h4>Brands</h4>
                                        <Checkbox label="Gucci" ripple defaultChecked />
                                        <Checkbox label="Aldo" ripple defaultChecked />
                                    </div>
                                    <div className="plp-refine-color">
                                        <h4>Colors</h4>
                                        <Checkbox label="Blue" ripple defaultChecked />
                                        <Checkbox label="White" ripple defaultChecked />
                                        <Checkbox label="Maroon" ripple defaultChecked />
                                        <Checkbox label="Black" ripple defaultChecked />
                                        <Checkbox label="Yellow" ripple defaultChecked />
                                        <Checkbox label="Baige" ripple defaultChecked />
                                        <Checkbox label="Green" ripple defaultChecked />
                                        <Checkbox label="Brown" ripple defaultChecked />
                                        <Checkbox label="Orange" ripple defaultChecked />
                                    </div>
                                    <div className="plp-refine-color">
                                        <h4>Material</h4>
                                        <Checkbox label="Leather" ripple defaultChecked />
                                        <Checkbox label="Fabric" ripple defaultChecked />
                                        <Checkbox label="Mixed" ripple defaultChecked />
                                    </div>
                                    <div  className="plp-refine-price">
                                        <h4>Price</h4>
                                        <Slider min={0} max={5000} defaultValue={2500} />
                                    </div>
                                    <div className="plp-refine-button">
                                        <Button color="primary" raised colored >Apply</Button> <Button color="primary" raised colored >Reset</Button>
                                    </div>
                                </div>
                        </Col>
                        <Col sm={9}>
                            <div  className="plp-grid">
                                {cardUnit}
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
export default PLP;