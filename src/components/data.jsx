import React, {Component} from 'react';

class Data extends Component {
    constructor(props){
        super(props);
        this.state = {
            products:[],
            isLoaded: false,
       }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then (json => {
            this.setState({
                products: json,
                isLoaded: true,
            })
        });
    }
    render(){
        var {isLoaded, products} = this.state;
        console.log(products);
        if (isLoaded) {
            return(
                <div>
                    {
                        this.state.products.map((product, id) =>
                        <div>
                        {product.name}
                        </div>

                        )
                    }
                    
                    {this.state.products[0].name}
                </div>
            );
 
        }
        else {
            return(
                <div>Data Couldn't be loaded</div>
            );
        }
    }  
}
export default Data;