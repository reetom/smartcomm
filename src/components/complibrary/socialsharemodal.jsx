import React, {Component} from 'react';
import { Modal, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

class SocialShareModal extends Component {
    constructor(props, context) {
        super(props, context);
    
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
    
        this.state = {
          show: false,
        };
      }
    
      handleClose() {
        this.setState({ show: false });
      }
    
      handleShow() {
        this.setState({ show: true });
      }
    
      render() { 
        return (
            <Modal
              {...this.props}
              size="sm"
              aria-labelledby="contained-modal-title-vcenter"
              centered
            >
              <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                  Modal heading
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <h4>Love it, share it..</h4>
                <a href="https://www.facebook.com/" target="_blank">
                    <img src="https://ehroplar.sirv.com/Images/smartcomm/socialMediaIcons/iconfinder_facebook_4416093.png" width="53" height="50" alt=""  onClick={()=> this.handleClose}/>
                </a>
                <a href="https://www.whatsapp.com/" target="_blank">
                    <img src="https://ehroplar.sirv.com/Images/smartcomm/socialMediaIcons/iconfinder_whatsapp_4416091.png" width="53" height="50" alt=""  onClick={()=> this.handleClose}/>
                </a>
                <a href="https://www.twitter.com/" target="_blank">
                    <img src="https://ehroplar.sirv.com/Images/smartcomm/socialMediaIcons/iconfinder_twitter_4416099.png" width="53" height="50" alt=""  onClick={()=> this.handleClose}/>
                </a>
                <a href="https://www.instagram.com/" target="_blank">
                    <img src="https://ehroplar.sirv.com/Images/smartcomm/socialMediaIcons/iconfinder_insta_4416094.png" width="53" height="50" alt=""  onClick={()=> this.handleClose}/>
                </a>
                <a href="https://www.tumblr.com/" target="_blank">
                    <img src="https://ehroplar.sirv.com/Images/smartcomm/socialMediaIcons/iconfinder_tumblr_4416098.png" width="53" height="50" alt=""  onClick={()=> this.handleClose}/>
                </a>
                
              </Modal.Body>
              <Modal.Footer>
                <Button onClick={this.props.onHide}>Close</Button>
              </Modal.Footer>
            </Modal>
        );
    }
}
export default SocialShareModal;