import React, {Component} from 'react';
import PromoBanner1 from './../../assets/banners/promo1.jpg';
import PromoBanner2 from './../../assets/banners/promo2.jpg';
import PromoBanner3 from './../../assets/banners/promo3.jpg';
import PromoBanner4 from './../../assets/banners/promo4.jpeg';
import {Col, Row} from 'reactstrap';


class Promotions extends Component {
    render() {
        return(
            <div className="align-center">
                <Row>
                    <Col sm={12}>
                        <img
                        src={PromoBanner1}
                        alt=""
                        className="promo1-banner"
                    />
                    </Col>
                </Row>
                <div className="one-em-spacing"/>
                <Row>
                    <Col sm={6}>
                        <img
                        src={PromoBanner3}
                        alt=""
                        className="promo-small-banner"
                    />
                    </Col>
                    <Col sm={6}>
                        <img
                        src={PromoBanner4}
                        alt=""
                        className="promo-small-banner"
                    />
                    </Col>
                </Row>

                <div className="one-em-spacing"/>
                <Row>
                    <Col sm={12}>
                        <img
                        src={PromoBanner2}
                        alt=""
                        className="promo2-banner"
                    />
                    </Col>
                </Row>
                <div className="one-em-spacing"/>
            </div>

        );
    }
}
export default Promotions;