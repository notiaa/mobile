import React, { useState } from 'react';
import { IonButton, IonButtons, IonContent, IonFooter, IonHeader, IonIcon, IonLabel, IonMenu, IonMenuButton, IonPage, IonRefresher, IonRefresherContent, IonTitle, IonToolbar, RefresherEventDetail } from '@ionic/react';
import Annonce from './Annonce';
import { add, addCircle, duplicate, exit, heart, home, homeOutline, homeSharp, list, listCircle, logIn } from 'ionicons/icons';
function Menue() {
  const [isRefreshing, setIsRefreshing] = useState(false);

  async function handleRefresh(event: CustomEvent<RefresherEventDetail>) {
    // Simuler un chargement asynchrone
    try {
      setIsRefreshing(true);

      // Appels asynchrones pour charger de nouvelles données ici
      await loadNewData();

      // Forcer un rechargement complet de la page
      window.location.reload();

      event.detail.complete();
    } catch (error) {
      console.error(error);
      event.detail.complete();
    } finally {
      setIsRefreshing(false);
    }
  }

  // Fonction pour simuler un chargement de nouvelles données
  async function loadNewData() {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        // Charger de nouvelles données ici
        resolve();
      }, 2000);
    });
  }
  return (
    <>
      <IonPage id="main-content">
        <IonHeader>
          <IonToolbar style={{ '--background': '#287aa9' }}>
            <IonTitle style={{ '--color': 'white' }}>Annonce</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
        <IonRefresher slot="fixed" onIonRefresh={handleRefresh}>
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>
               <Annonce />
               <Annonce />
               <Annonce />
               <Annonce />
               <Annonce />
               <Annonce />
            </IonContent>

            <IonFooter>
              <IonToolbar style={{ '--background': '#287aa9'}}>
                <IonButtons slot="start" onClick={() => { window.location.href = '/listee'; }}>        
                    <IonIcon icon={home} style={{ fontSize: '30px', color: 'white',marginLeft : '25px' }}></IonIcon>
                </IonButtons>
                
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <IonButtons onClick={() => { window.location.href = '/ajoutAnnonce'; }}>
                    <IonIcon icon={duplicate} style={{ fontSize: '30px', color: 'white' }}></IonIcon>
                  </IonButtons>
                </div>
                <IonButtons slot="end" onClick={() => { window.location.href = '/'; }}>
                    <IonIcon icon={exit} style={{ fontSize: '30px', color: 'white', marginRight: '25px' }}></IonIcon>
                </IonButtons>
              </IonToolbar>
            </IonFooter>

      </IonPage>
    </>
  );
}
export default Menue;