import { Provider } from 'react-redux';
import MainRouter from './Routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import store, { persistor } from './redux/store/store'
import { CookiesProvider } from 'react-cookie';
import { PersistGate } from 'redux-persist/integration/react';
import { ToastContainer } from 'react-toastify';
function App() {
  return (
    <CookiesProvider defaultSetOptions={{ path: '/' }}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>


          <MainRouter />
          <ToastContainer />
        </PersistGate>
      </Provider>

    </CookiesProvider>
  );
}

export default App;