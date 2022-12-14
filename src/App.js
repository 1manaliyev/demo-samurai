import React, { lazy, Suspense } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Route, withRouter } from "react-router-dom";
//import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
//import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";
import { connect } from 'react-redux';
import { initializeApp } from './redux/app-reducer';
import { compose } from 'redux';
import Preloader from './components/common/Preloader/Preloader';
import store from "./redux/redux-store";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));

class App extends React.Component {
       componentDidMount() {
              this.props.initializeApp();
       }
       render() {
              if (!this.props.initialized) {
                     return <Preloader />
              }

              return (
                     <div className='app-wrapper'>
                            <HeaderContainer />
                            <Navbar />
                            <div className='app-wrapper-content'>
                                   <Suspense fallback={<div><Preloader/></div>}>
                                          <Route path='/dialogs'
                                                 render={() => <DialogsContainer />} />

                                          <Route path='/profile/:userId?'
                                                 render={() => <ProfileContainer />} />

                                          <Route path='/users'
                                                 render={() => <UsersContainer />} />

                                          <Route path='/login'
                                                 render={() => <LoginPage />} />
                                   </Suspense>
                            </div>
                     </div>
              )
       }
}

const mapStateToProps = (state) => ({
       initialized: state.app.initialized
})

let AppContainer = compose(
       withRouter,
       connect(mapStateToProps, { initializeApp }))(App);

const SamuraiJSApp = (props) => {
       return (
              <BrowserRouter>
                     <Provider store={store}>
                            <AppContainer />
                     </Provider>
              </BrowserRouter>
       )
}

export default SamuraiJSApp;