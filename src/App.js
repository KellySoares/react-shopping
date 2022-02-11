import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './components/store';
import Layout from './components/layout';
import MainRoutes from './routes';
import { ResetCSS } from './global/resetCSS';
import ProductsProvider from './providers/products';
import MessageProvider from './providers/message';


function App() {
  const localCart = JSON.parse(localStorage.getItem('reactShopping: cart'))

  if (localCart !== null) {
    store.dispatch({ type: 'CHANGE_CART', localCart })
  }

  return (
    <Provider store={store}>
      <ProductsProvider>
        <MessageProvider>
          <Router>
            <ResetCSS />

            <Layout >
              <MainRoutes />
            </Layout>
          </Router>
        </MessageProvider>

      </ProductsProvider>
    </Provider>
  );
}

export default App;
