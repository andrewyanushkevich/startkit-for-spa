import React, { PureComponent } from 'react';
import { Form, Select, DatePicker, Transfer, Table, Button } from 'antd';

import { StyledForm } from './styles';

const columns = [
  {
    title: 'Site',
    dataIndex: 'site',
  },
  {
    title: 'Code',
    dataIndex: 'code',
  },
];

const datasource = [
  { key: 1, site: 'Site', code: 'Site1', disabled: false },
  { key: 2, site: 'Site', code: 'Site1', disabled: false },
];

class RegisterForm extends PureComponent {
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <StyledForm>
        <div>
          <div>
            <Form.Item label="Site">
              {getFieldDecorator('site', {
                rules: [{ required: true, message: 'Please input Site' }],
              })(<Select className="select" />)}
            </Form.Item>
            <Form.Item label="Person Type">
              {getFieldDecorator('person type', {
                rules: [
                  { required: true, message: 'Please input person type' },
                ],
              })(<Select />)}
            </Form.Item>
          </div>
          <div>
            <Form.Item label="Immed. supervisor">
              {getFieldDecorator('supervisor', {
                rules: [{ required: true, message: 'Please input supervisor' }],
              })(<Select />)}
            </Form.Item>
            <Form.Item label="Position filed">
              {getFieldDecorator('position filed', {
                rules: [
                  { required: true, message: 'Please input position field' },
                ],
              })(<Select />)}
            </Form.Item>
          </div>
          <div>
            <Form.Item label="Register date">
              {getFieldDecorator('register date', {
                rules: [
                  { required: true, message: 'Please input register date' },
                ],
              })(<DatePicker size="small" />)}
            </Form.Item>
          </div>
        </div>
        <div>
          <Form.Item>
            {getFieldDecorator('transfer')(
              <Transfer showSearch dataSource={datasource}>
                {({ filteredItems }) => (
                  <Table columns={columns} dataSource={filteredItems} />
                )}
              </Transfer>,
            )}
          </Form.Item>
        </div>
      </StyledForm>
    );
  }
}

const WrappedForm = Form.create()(RegisterForm);

export default WrappedForm;
