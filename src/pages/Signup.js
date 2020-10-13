import React from 'react'
import {IonButton, IonCol, IonContent, IonInput, IonItem, IonLabel, IonPage, IonRow} from '@ionic/react'
import NavHeader from '../components/Header/NavHeader'

const Signup = ()=>{
    return(
        <IonPage>
            <NavHeader title="Sign up"/>
            <IonContent>
                <IonItem lines="full">
                    <IonLabel position="floating">Username</IonLabel>
                    <IonInput name="username" type="text" required/>
                </IonItem>
                <IonItem lines="full">
                    <IonLabel position="floating">Email</IonLabel>
                    <IonInput name="email" type="text" required/>
                </IonItem>
                <IonItem lines="full">
                    <IonLabel position="floating">Password</IonLabel>
                    <IonInput name="password" type="password" required/>
                </IonItem>
                <IonRow>
                    <IonCol>
                        <IonButton type="submit" color="primary" expand="block"> Signup</IonButton>
                    </IonCol>
                </IonRow>
            </IonContent>
        </IonPage>
    );
}

export default Signup;