import { IonBackButton, IonButton, IonButtons, IonCard, IonCardContent, IonContent, IonHeader, IonIcon, IonInput, IonPage, IonTitle, IonToolbar, useIonRouter } from '@ionic/react';
import {  personAddOutline } from 'ionicons/icons';
import React from 'react';

const Register: React.FC = () => {
    const router = useIonRouter();
    const doRegister = (event : any) => {
        event.preventDefault();
        console.log('doRegister');
        router.goBack();
    }
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot='start'>
                        <IonBackButton defaultHref='/'></IonBackButton>
                    </IonButtons>
                    <IonTitle>Page Inscription</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
               <IonCard>
                    <IonCardContent>
                        <form onSubmit={doRegister}>

                        <IonInput fill='outline' labelPlacement='floating' label='email' type='email'></IonInput>
                            <br />

                        <IonInput fill='outline' labelPlacement='floating' label='password' type='password'></IonInput>
                            <br />
                        <center><IonButton type='submit' expand='block'>
                            Create
                                <IonIcon icon={personAddOutline} slot='end'></IonIcon>
                            </IonButton>
                        </center>

                        </form>
                    </IonCardContent>
               </IonCard>
            </IonContent>
        </IonPage>
    );
};

export default Register;