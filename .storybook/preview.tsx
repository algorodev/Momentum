import type { Preview } from '@storybook/react'
import '../src/index.css'
import { withRouter } from 'storybook-addon-react-router-v6'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
  },
};

export const decorators = [
  withRouter,
  (Story) => (
    <div className="p-4">
      <Story />
    </div>
  ),
]

export default preview;