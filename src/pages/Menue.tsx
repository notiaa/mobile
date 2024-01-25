import React, { useState } from 'react';
import { IonButtons, IonContent, IonHeader, IonMenu, IonMenuButton, IonPage, IonRefresher, IonRefresherContent, IonTitle, IonToolbar, RefresherEventDetail } from '@ionic/react';
import Annonce from './Annonce';
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
      <IonMenu contentId="main-content">
        <IonHeader>
          <IonToolbar>
            <IonTitle>Menu Content</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">This is the menu content.</IonContent>
      </IonMenu>
      <IonPage id="main-content">
        <IonHeader>
          <IonToolbar style={{ '--background': '#287aa9' }}>
            <IonButtons slot="start">
              <IonMenuButton style={{ '--color': 'white' }}></IonMenuButton>
            </IonButtons>
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
      </IonPage>
    </>
  );
}
export default Menue;