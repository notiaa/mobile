import { useState } from 'react';
import '../assets/style.css';
import voitureImage  from '../assets/voiture.jpg';
import { IonContent, IonGrid, IonRow, IonCol, IonTitle, IonIcon, IonButton, IonLabel } from '@ionic/react';
import { heart, heartOutline} from 'ionicons/icons';
const Annonce = () => {
  return (
    <center>
    <div className="conteneur" >
        <div className="nom">
            <h6><IonLabel>volkswagen golf</IonLabel></h6>
                    
        </div>
        <div className="info" onClick={() => { window.location.href = '/details'; }}>
            <img src={voitureImage} alt=""/>
            <div className="donne">
                <ul>
                <li><IonLabel>03/2023</IonLabel></li>
                <li><IonLabel>75 471 Km</IonLabel></li>
                <li><IonLabel>Manuel</IonLabel></li>
                <li><IonLabel>Essence</IonLabel></li>
                <li><IonLabel>88 Kw (120CV)</IonLabel></li>
                </ul>
            </div>
        </div>
        <br />
        <div className="prix" onClick={() => { window.location.href = '/details'; }}>
            <div>
            <h5><IonLabel>10 090 £</IonLabel></h5>
            </div>
        </div>
    </div>
    </center>
  );
};
export default Annonce;
