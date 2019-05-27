import React, { Component} from 'react';
import './App.css';
import {Layout, Header, Navigation, Drawer, Content, Footer,FooterSection, FooterDropDownSection, FooterLinkList} from 'react-mdl';
import MainRoute from './routes/mainroute';
import {Link} from 'react-router-dom';
import {Badge, Icon} from 'react-mdl';
import BuildFavBadge from './components/complibrary/buildfavbadge';

var fs = require('fs');
class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            displayFavBadge: "",
       }
       this.buildFavoriteBadge = this.buildFavoriteBadge.bind(this)
    }
    //Build the fav badge and count alone. No setting state.
    buildFavoriteBadge(){
        const displayFavBadge = <BuildFavBadge />;
        this.setState({displayFavBadge: displayFavBadge});
    }

    componentDidMount(){
        this.buildFavoriteBadge();
    }

    render() {
        var {displayFavBadge} = this.state;
        console.log(displayFavBadge);
        return (
            <div style={{height: '1080px', position: 'relative'}}>
                <Layout fixedHeader>
                    <Header className="header-color" title={<span><strong>SmartComm</strong></span>}>
                        <Navigation>
                            <Link to ="/">Home</Link>
                            <Link to ="/signin">Sign In</Link>
                            <Link to ="/createaccount">My Account</Link>
                            <Link to ="/favorite">
                                {displayFavBadge}
                            </Link>
                            <Link to ="/cart">
                                <Badge text="5" overlap>
                                    <Icon name="shoppingcart" />
                                </Badge>
                            </Link>
                        </Navigation>
                    </Header>
                    <Drawer title="Departments" c>
                        <Navigation>
                            <Link to={{
                                pathname: "/plp",
                                state: {
                                    categoryName: "men"
                                }
                                }}>Men</Link>
                            <Link to={{
                                pathname: "/clp",
                                state: {
                                    categoryName: "women"
                                }
                                }}>Women</Link>
                            <Link to={{
                                pathname: "/clp",
                                state: {
                                    categoryName: "boys"
                                }
                                }}>Boys</Link>
                            <Link to={{
                                pathname: "/clp",
                                state: {
                                    categoryName: "girls"
                                }
                                }}>Girls</Link>
                            <Link to ="/clearCache">Clear Cache</Link>
                        </Navigation>
                    </Drawer>
                <Content>
                    <div className="page-content" />
                    <MainRoute/>
                </Content>
                <Footer size="mega">
                <FooterSection type="middle">
                    <FooterDropDownSection title="Features">
                        <FooterLinkList>
                            <a href="#">About</a>
                            <a href="#">Terms</a>
                            <a href="#">Partners</a>
                            <a href="#">Updates</a>
                        </FooterLinkList>
                    </FooterDropDownSection>
                    <FooterDropDownSection title="Details">
                        <FooterLinkList>
                            <a href="#">Specs</a>
                            <a href="#">Tools</a>
                            <a href="#">Resources</a>
                        </FooterLinkList>
                    </FooterDropDownSection>
                    <FooterDropDownSection title="Technology">
                        <FooterLinkList>
                            <a href="#">How it works</a>
                            <a href="#">Patterns</a>
                            <a href="#">Usage</a>
                            <a href="#">Products</a>
                            <a href="#">Contracts</a>
                        </FooterLinkList>
                    </FooterDropDownSection>
                    <FooterDropDownSection title="FAQ">
                        <FooterLinkList>
                            <a href="#">Questions</a>
                            <a href="#">Answers</a>
                            <a href="#">Contact Us</a>
                        </FooterLinkList>
                    </FooterDropDownSection>
                </FooterSection>
                <FooterSection type="bottom" logo="Title">
                    <FooterLinkList>
                        <a href="#">Help</a>
                        <a href="#">Privacy & Terms</a>
                    </FooterLinkList>
                </FooterSection>
            </Footer>
                </Layout>
            </div>
        );
    }
}

export default App;
