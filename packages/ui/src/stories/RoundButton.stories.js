import React, { useState } from 'react';
import { Icon } from 'semantic-ui-react';

import { RoundButton } from '..';

export default {
  title: 'RoundButton'
}

export const Colors = () => <div style={{ margin: '2em 0 2em 2em' }}>
  {
    [
      'red', 'orange', 'yellow', 'olive', 'green', 'teal', 'blue', 'violet', 'purple', 'pink', 'brown', 'grey', 'black'
    ].map(color => <RoundButton
      onClick={() => alert('Button clicked')}
      color={color}
      Icon={<Icon name='chart bar' size='large' />}
    />)
  }

</div>;

export const WithCloseButton = () => <div style={{ margin: '2em 0 2em 2em' }}>
  <RoundButton
    withCloseButton
    onClick={() => alert('Button clicked')}
    onCloseClick={() => alert('Close clicked')}
    Icon={<Icon name='chart bar' size='large' />}
  />
</div>;

export const WithContent = () => <div style={{ margin: '2em 0 2em 2em' }}>
  <RoundButton
    Icon={<Icon name='question' size='large' />}
    text='Test'
  />
</div>;