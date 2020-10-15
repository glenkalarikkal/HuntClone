import React from 'react'
import { IonButton, IonCol, IonContent, IonInput, IonItem, IonLabel, IonLoading, IonPage, IonRouterLink, IonRow } from '@ionic/react'
import NavHeader from '../components/Header/NavHeader'
import toast from "../utils/Toast";
import useFormValidation from "../hooks/UserFormValidation";
import validateLogin from "../components/Auth/ValidateLogin";
import firebase from "../firebase";

const INITIAL_STATE = {
    name: "",
    email: "",
    password: "",
};

const Login = (props) => {

    const {
        handleSubmit,
        handleChange,
        values,
        isSubmitting,
    } = useFormValidation(INITIAL_STATE, validateLogin, authenticateUser);
    const [busy, setBusy] = React.useState(false);

    async function authenticateUser() {
        setBusy(true);
        const { email, password } = values;
        try {
            await firebase.login(email, password);
            toast("You have signed in successfully!");
            props.history.push("/profile");
        } catch (err) {
            console.error("Authentication Error", err);
            toast("Login failed "+err.message);
        }
        setBusy(false);
    }

    return (
        <IonPage>
            <NavHeader title="Log In" />
            <IonLoading isOpen ={busy}>Please wait..</IonLoading>
            <IonContent>
                <IonItem lines="full">
                    <IonLabel position="floating">Email</IonLabel>
                    <IonInput name="email" type="text" value = {values.email} onIonChange={handleChange} required />
                </IonItem>
                <IonItem lines="full">
                    <IonLabel position="floating">Password</IonLabel>
                    <IonInput name="password" type="password" value = {values.password} onIonChange={handleChange} required />
                </IonItem>
                <IonRow>
                    <IonCol>
                        <IonButton type="submit" color="primary" expand="block" onClick={handleSubmit} disabled={isSubmitting}>SignIn</IonButton>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol>
                        <IonRouterLink routerLink={'/forgot'}>Forgot Password?</IonRouterLink>
                    </IonCol>
                </IonRow>
            </IonContent>
        </IonPage>
    );
}

export default Login;