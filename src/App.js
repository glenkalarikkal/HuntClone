import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { createOutline, listCircleOutline, personCircleOutline, searchCircleOutline, trendingUpOutline } from 'ionicons/icons'
import Home from './pages/Home';
import Trending from './pages/Trending';
import Search from './pages/Search';
import Submit from './pages/Submit';

import Profile from './pages/Profile';
import EditProfile from './pages/EditProfile'
import Login from './pages/Login'
import SignUp from './pages/Signup'
import Forgot from './pages/Forgot'

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

const App = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route exact path="/" render={() => <Redirect to="/home" />} />
            <Route path="/home" component={Home} exact={true} />
            <Route path="/trending" component={Trending} exact={true} />
            <Route path="/search" component={Search} exact={true} />
            <Route path="/profile" component={Profile} exact={true} />
            <Route path="/submit" component={Submit} exact={true} />
            <Route path="/login" component={Login} exact={true} />
            <Route path="/edit-profile" component={EditProfile} exact={true} />
            <Route path="/register" component={SignUp} exact={true} />
            <Route path="/forgot" component={Forgot} exact={true} />
            <Route component={() => <Redirect to="/home" />} />
          </IonRouterOutlet>
          <IonTabBar slot="bottom">
            <IonTabButton tab="home" href="/home">
              <IonIcon icon={listCircleOutline} />
              <IonLabel>Hunt Clone</IonLabel>
            </IonTabButton>
            <IonTabButton tab="trending" href="/trending">
              <IonIcon icon={trendingUpOutline} />
              <IonLabel>Trending</IonLabel>
            </IonTabButton>
            <IonTabButton tab="search" href="/search">
              <IonIcon icon={searchCircleOutline} />
              <IonLabel>Search</IonLabel>
            </IonTabButton>
            <IonTabButton tab="submit" href="/submit">
              <IonIcon icon={createOutline} />
              <IonLabel>Submit</IonLabel>
            </IonTabButton>
            <IonTabButton tab="profile" href="/profile">
              <IonIcon icon={personCircleOutline} />
              <IonLabel>Profile</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
