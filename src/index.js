import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './store/reducers/rootReducer';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import { createFirestoreInstance } from 'redux-firestore';
import thunk from 'redux-thunk';

/* NET NINJA SETUP */
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import { compose } from 'redux';
import firebase from './config/firebase';

/* Store enhancers */
const store = createStore(rootReducer, 
  compose(
    applyMiddleware(thunk.withExtraArgument({
      getFirestore, getFirebase}),
      )
    // reduxFirestore(firebase),
    // reactReduxFirebase(firebase)
  )
);

const rrfProps = {
  firebase,
  config: {

  },
  dispatch: store.dispatch,
  createFirestoreInstance
}

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider { ...rrfProps}>
      <App />
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById('root')
);