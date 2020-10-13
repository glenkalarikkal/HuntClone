import React from 'react'
import {IonButton, IonCol, IonContent, IonInput, IonItem, IonLabel, IonPage, IonRow} from '@ionic/react'
import NavHeader from '../components/Header/NavHeader'

const EditProfile = ()=>{
    return(
        <IonPage>
            <NavHeader title="Edit Profile"/>
            <IonContent>
                <IonItem lines="full">
                    <IonLabel position="floating">User Name</IonLabel>
                    <IonInput name="username" type="text" />
                </IonItem>
                <IonItem lines="full">
                    <IonLabel position="floating">Email</IonLabel>
                    <IonInput name="email" type="text" />
                </IonItem>
                <IonItem lines="full">
                    <IonLabel position="floating">Current Password</IonLabel>
                    <IonInput name="password" type="password"/>
                </IonItem>
                <IonItem lines="full">
                    <IonLabel position="floating">New Password</IonLabel>
                    <IonInput name="newPassword" type="password"/>
                </IonItem>
                <IonRow>
                    <IonCol>
                        <IonButton type="submit" color="primary" expand="block">Update profile</IonButton>
                    </IonCol>
                </IonRow>
            </IonContent>
        </IonPage>
    );
}

export default EditProfile;