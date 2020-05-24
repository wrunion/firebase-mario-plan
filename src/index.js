import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './store/reducers/rootReducer';
// import thunk from 'redux-thunk';
// import { getFirestore, reduxFirestore } from 'redux-firestore';
// import { getFirebase, reactReduxFirebase } from 'react-redux-firebase';
// /* GET THIS INFO BACK FROM .env AND PUT IT IN FBCONFIG.JS */
// import fbConfig from './config/fbConfig';

// const store=createStore(rootReducer, 
//   compose(  
//     applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
//     reduxFirestore(fbConfig),
//     reactReduxFirebase(fbConfig)
//   )
// );

ReactDOM.render(
  <Provider store={createStore(rootReducer)}>
    <App />
  </Provider>,
  document.getElementById('root')
);