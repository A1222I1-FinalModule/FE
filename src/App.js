import { Provider } from 'react-redux';
import MainRouter from './Routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import store from './redux/store/store'
import { CookiesProvider } from 'react-cookie';
function App() {
    return (
        <CookiesProvider defaultSetOptions={{ path: '/' }}>
            <Provider store={store}>

                <MainRouter />
            </Provider>
        </CookiesProvider>
    );
}

export default App;