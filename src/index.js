
import React from 'react';
import reactDOM from 'react-dom/client';

import {Button} from './Button';

const root = reactDOM.createRoot(document.getElementById('root'));


root.render(<>
  <Button text="Click me"/>
  <Button text="Accept"/>
  <Button text='' name="Pepo"/>
</>);