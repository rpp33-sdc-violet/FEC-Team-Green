import React from 'react';
import Modal from '../utils/Modal.jsx';
import styled from 'styled-components';

class ReviewPhoto extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  showModal() {
    this.setState({show: true});
  }

  hideModal() {
    this.setState({show: false});
  }

  render() {
    return (
      <>
        <Modal show={this.state.show} handleClose={this.hideModal}>
          <PhotoPop
            src={this.props.url}
            alt={`photo upload by ${this.props.id}`}>
          </PhotoPop>
        </Modal>

        <PhotoThumbnail src={this.props.url}
          alt={`photo upload by ${this.props.id}`}
          onClick={this.showModal}>
        </PhotoThumbnail>
      </>
    );
  }
}

const PhotoThumbnail = styled.img`
  width: 60px;
  height: 45px;
  margin-top: 10px;
  margin-right: 20px;
  border: 1px solid #404040;
`;

const PhotoPop = styled.img`
  width: 80%;
  height: 550px;
  max-height: 100%;
`;

export default ReviewPhoto;
