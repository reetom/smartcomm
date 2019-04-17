import React, { Component } from 'react';
import './App.css';
import {Layout, Header, Navigation, Drawer, Content, Footer,FooterSection, FooterDropDownSection, FooterLinkList} from 'react-mdl';
import MainRoute from './routes/mainroute';
import {Link} from 'react-router-dom';
import {Badge, Icon} from 'react-mdl';
import Logo from '../src/assets/smartCommLogo.jpg';

class App extends Component {

  render() {
    return (
<div style={{height: '1080px', position: 'relative'}}>
    <Layout fixedHeader>
        <Header className="header-color" title={<span><strong>SmartComm</strong></span>}>
            <Navigation>
                <Link to ="/">Home</Link>
                <Link to ="/signin">Sign In</Link>
                <Link to ="/myaccount">My Account</Link>
                <Link to ="/favorite">
                    <Badge text="1" overlap>
                        <Icon name="favorite" />
                    </Badge>
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
                <Link to ="/clp">Men</Link>
                <Link to ="/clp">Women</Link>
                <Link to ="/clp">Boys</Link>
                <Link to ="/clp">Girls</Link>
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
