import { html } from 'lit';
import '../src/polaris-tile-fact-redo.js';

export default {
  title: 'PolarisTileFactRedo',
  component: 'polaris-tile-fact-redo',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ header, backgroundColor }) {
  return html`
    <polaris-tile-fact-redo
      style="--polaris-tile-fact-redo-background-color: ${backgroundColor || 'white'}"
      .header=${header}
    >
    </polaris-tile-fact-redo>
  `;
}

export const App = Template.bind({});
App.args = {
  header: 'My app',
};
