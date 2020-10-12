import { IonContent, IonPage } from '@ionic/react';
import React from 'react';

import SmallHeader from '../components/Header/SmallHeader'
import LargeHeader from '../components/Header/LargeHeader'

const Home = () => {
    return (
        <IonPage>
            <SmallHeader title = "Hunt Clone"/>
            <IonContent fullscreen="true">
                <LargeHeader title = "Hunt Clone" />
            </IonContent>
        </IonPage>
    );
};

export default Home;