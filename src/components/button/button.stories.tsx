import { Meta, StoryObj } from '@storybook/react';
import { Button } from './button';

const meta = {
  title: 'Components/Button',
  component: Button,
  args: {
    children: 'Button',
    disabled: false,
  },
  argTypes: {
    variant: {
      control: 'select',
    },
    size: {
      control: 'select',
    },
    disabled: {
      control: 'boolean',
    },
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
  },
};

export const Destructive: Story = {
  args: {
    variant: 'destructive',
  },
};
