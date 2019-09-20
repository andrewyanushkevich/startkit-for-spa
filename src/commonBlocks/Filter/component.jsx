import React, { PureComponent } from 'react';
import { Collapse, Icon, Input, Button } from 'antd';

import { FilterWrapper, StyledCollapse, Sites, Cities, Dates } from './styles';

class Filter extends PureComponent {
  render() {
    return (
      <FilterWrapper>
        <Button type="primary">
          Filters
          <Icon type="filter" theme="filled" style={{ fontSize: '20px' }} />
        </Button>
        <StyledCollapse expandIconPosition="right">
          <Collapse.Panel header="Search">
            <Input placeholder="Search item" allowClear />
          </Collapse.Panel>
          <Collapse.Panel header="Sites">
            <Sites
              options={[
                { label: 'Site1 - Site2', value: 'Site1 - Site2' },
                {
                  label: 'Site2 - Trois-Rivieres',
                  value: 'Site2 - Trois-Rivieres',
                },
                {
                  label: 'Site3 - Montreal Warehouse',
                  value: 'Site3 - Montreal Warehouse',
                },
                {
                  label: 'Site4 - Sales Office',
                  value: 'Site4 - Sales Office',
                },
              ]}
            />
          </Collapse.Panel>
          <Collapse.Panel header="In Which City">
            <Cities
              options={[
                { label: 'Montreal', value: 'Montreal' },
                { label: 'Quebec', value: 'Quebec' },
                { label: 'Toronto', value: 'Toronto' },
                { label: 'Trois-Rivieres', value: 'Trois-Rivieres' },
              ]}
            />
          </Collapse.Panel>
          <Collapse.Panel header="Starting date">
            <Dates
              options={[
                {
                  label: 'Currently available',
                  value: 'Currently available',
                },
                { label: 'In the upcoming', value: 'In the upcoming' },
              ]}
            />
          </Collapse.Panel>
        </StyledCollapse>
      </FilterWrapper>
    );
  }
}

export default Filter;
