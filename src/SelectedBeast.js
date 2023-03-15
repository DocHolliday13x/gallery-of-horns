import React from 'react';
import Modal from 'react-bootstrap/Modal';

class SelectedBeast extends React.Component {
  handleClickedBeast = () => {
    this.props.handleOpenModal()
  }

  render() {
    return (
      <>
        <Modal show={this.props.showModal} onHide={this.props.handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>{this.props.SelectedBeastTitle}</p>
            <img src={this.props.selectedBeast} alt=''></img>
            <p>{this.props.selectedBeastDescrip}</p>
          </Modal.Body>
          <Modal.Footer>
          </Modal.Footer>
        </Modal>
      </>
    )
  }
}

export default SelectedBeast;