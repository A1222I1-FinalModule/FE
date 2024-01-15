import { Provider } from 'react-redux';
import MainRouter from './Routes';
import store from './redux/store';
function App() {
    return (
        <Provider store={store}>
            <MainRouter />
        </Provider>
    );
}

export default App;
