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
          <PhotoWrapper>
            <PhotoPop
              src={this.props.url}
              alt={`photo upload by ${this.props.id}`}>
            </PhotoPop>
          </PhotoWrapper>
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

const PhotoWrapper = styled.div`
  position: absolute;
  left: 50%;
  transform: translate( -50%);
`;

const PhotoPop = styled.img`
  max-height: 100%;
  width: auto;
`;


export default ReviewPhoto;
