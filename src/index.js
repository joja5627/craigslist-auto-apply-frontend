
import 'semantic-ui-css/semantic.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import registerServiceWorker from './registerServiceWorker';
import  {ListingContextProvider}  from './contexts/ListingContextProvider';

import { SocketIOProvider } from "use-socketio";

ReactDOM.render(<SocketIOProvider url="/scrape" opts={{
    autoconnect: false,
    reconnect: false
}}>
    <ListingContextProvider>
      <App />
    </ListingContextProvider>
  </SocketIOProvider>,
  document.getElementById('root')
);
registerServiceWorker();
