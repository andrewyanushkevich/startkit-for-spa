import React, { PureComponent } from 'react';
import { Button } from 'antd';

import RegisterForm from './RegisterForm';
import { StyledModal } from './styles';

class RegisterEmployee extends PureComponent {
  render() {
    const { visible, handleCloseModal } = this.props;
    return (
      <StyledModal
        visible={visible}
        onCancel={handleCloseModal}
        title="Register employee(s)"
        width={800}
        footer={[
          <Button data-id="Register employee" onClick={handleCloseModal}>
            Save
          </Button>,
          <Button data-id="Register employee" onClick={handleCloseModal}>
            Close
          </Button>,
        ]}
      >
        <RegisterForm />
      </StyledModal>
    );
  }
}

export default RegisterEmployee;
