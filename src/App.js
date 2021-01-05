import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router , Switch , Route} from 'react-router-dom';
import Home from './components/pages/HomePage/Home';
import Services from './components/pages/Services/Services';
import Products from './components/pages/Products/Products';
import SignUp from './components/pages/SignUp/SignUp';
import Footer from './components/pages/Footer/Footer';
import NotFoundPage from './components/pages/NotFoundPage/NotFoundPage';
import HttpsRedirect from 'react-https-redirect'
import SignIn from './components/pages/SignIn/SignIn';

function App() {
  return (
    <HttpsRedirect>
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/services" component={Services}/>
        <Route path="/products" component={Products}/>
        <Route path="/contacts" component={SignUp}/>
        <Route path="/checkout" component={SignIn}/>
        <Route component={NotFoundPage}/>
      </Switch>
      <Footer />
    </Router>
    </HttpsRedirect>
  );
}

export default App;
