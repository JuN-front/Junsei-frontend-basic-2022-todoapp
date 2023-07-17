import React from "react";
import Component from "./index";

export default {
  component: Component,
  title: "Molecules/Task",
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
};

const Template = (args) => <Component {...args} />;

export const Default = Template.bind({});

Default.args = {
  defaultValue: "taskname",
  defaultIsEditing: false,
  onTaskComplete: () => console.log("task completed"),
  onTaskChange: (text) => console.log(`task name changed: ${text}`),
};
