import { Meta, Story } from '@storybook/react';
import React from 'react';

import { Card, CardProps } from './Card';

export default {
  title: 'Example/Card',
  component: Card
} as Meta;

const Template: Story<CardProps> = (args) => <Card {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: <p>This is a test component</p>
};

/* export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button'
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button'
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button'
};
 */
