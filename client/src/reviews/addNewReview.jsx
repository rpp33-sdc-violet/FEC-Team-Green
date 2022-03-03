import React from 'react';
import Modal from './Modal.jsx';
import axios from 'axios';

class AddNewReview extends React.Component {
//will be called in reviewList (widget top level component)

  constructor (props) {
    super(props);
    this.state = {
      productId: this.props.productId,
      show: false
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }


  showModal () {
    this.setState({show: true});
  }

  hideModal () {
    this.setState({show: false});
  }


  render() {
    return (
      <div>
        <Modal show={this.state.show} handleClose={this.hideModal}>
          <p>Modal Test</p>
        </Modal>
        <button onClick = {this.showModal}>ADD A REVIEW</button>
      </div>
    );
  }
}


export default AddNewReview;