import React, {Component} from 'react';
import {Container} from 'reactstrap';

class ClearCache extends Component {
    render() {

        localStorage.clear();
        return(

            <div className="cache-clear-page-background">
                <Container fluid>
                
                <h1>Cash Cleared, your money is gone!!!</h1>
                </Container>
            </div>

          
        )
    }
}
export default ClearCache;