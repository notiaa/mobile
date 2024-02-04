import { IonButton, IonCard, IonCardContent, IonContent, IonFooter, IonHeader, IonIcon, IonInput, IonPage, IonTitle, IonToolbar, useIonRouter } from '@ionic/react';
import React from 'react';
import {logInOutline, personAddOutline} from 'ionicons/icons';

const Login: React.FC = () => {
    const router = useIonRouter();
    const doLogin = (event: any) => {
        event.preventDefault();
        console.log('doLogin');

    }
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Page Login</IonTitle>
                </IonToolbar>
            </IonHeader>


            <IonContent>
               <IonCard>
                    <IonCardContent>
                        <form onSubmit={doLogin}>

                        <IonInput fill='outline' labelPlacement='floating' label='email' type='email'></IonInput>
                            <br />

                        <IonInput fill='outline' labelPlacement='floating' label='password' type='password'></IonInput>
                            <br />
                        <center><IonButton routerLink='/menu'  type='submit' expand='block'>
                            Login
                                <IonIcon icon={logInOutline} slot='end'></IonIcon>
                            </IonButton>
                        </center>
                        <center>
                            <IonButton  routerLink='/register' className='ion-margin-top' color={'success'} type='submit' expand='block'>
                                Inscription
                                <IonIcon icon={personAddOutline} slot='end'></IonIcon>
                            </IonButton>
                        </center>
                        <center>
                            <IonButton  routerLink='/listee' className='ion-margin-top' color={'warning'} type='submit' expand='block'>
                                List
                                <IonIcon icon={personAddOutline} slot='end'></IonIcon>
                            </IonButton>
                        </center>

                        </form>
                    </IonCardContent>
               </IonCard>
            </IonContent>

            <IonFooter>
                <IonToolbar>
                    Footer Login
                </IonToolbar>
            </IonFooter>
        </IonPage>
    );
};

export default Login;