import React, { Component } from 'react';
import { Modal, Button } from 'antd';

class ViewDetail extends Component {
  render() {
    const { visible, handleCloseModal } = this.props;
    return (
      <Modal
        visible={visible}
        closable={false}
        footer={[
          <Button data-id="View Detail" onClick={handleCloseModal}>
            Close
          </Button>,
        ]}
      >
        <div>
          <p>AAA-2019</p>
          <p>Site: Site 1</p>
        </div>
        <div />
        <div>
          <b>Registered persons</b>
        </div>
      </Modal>
    );
  }
}

export default ViewDetail;
