import { IonPage, IonContent } from '@ionic/react';
import React from 'react';

import SmallHeader from '../components/Header/SmallHeader'
import LargeHeader from '../components/Header/LargeHeader'

const Search = () => {
    return (
        <IonPage>
            <SmallHeader title = "Search"/>
            <IonContent fullscreen>
                <LargeHeader title = "Search" />
            </IonContent>
        </IonPage>
    );
};

export default Search;