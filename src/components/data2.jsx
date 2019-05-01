import React, {Component} from 'react';

class Data extends Component {
    constructor(props){
        super(props);
        this.state = {
            products:[],
       }
    }
     
    componentDidMount(){
        fetch("./../data/data1.json")
        .then(res => res.json())
        .then (json => {
            this.setState({
                products: json,
            })
        });
    }
    render(){
        var {products} = this.state;
            return(
                <div>
                    {
                        this.state.products.map((product, id) =>
                        <div>
                        {product.name}
                        </div>

                        )
                    }
                </div>
            );
 
    }  
}
export default Data;