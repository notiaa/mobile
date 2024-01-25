import { useState } from 'react';
import '../assets/style.css';
import voitureImage  from '../assets/voiture.jpg';
import { IonContent, IonGrid, IonRow, IonCol, IonTitle, IonIcon, IonButton, IonLabel } from '@ionic/react';
import { heart, heartOutline} from 'ionicons/icons';
const Annonce = () => {
    const [isLiked, setIsLiked] = useState(false);
    const handleLikeClick = () => {
      setIsLiked(!isLiked);
    };
  return (
    <center>
    <div className="conteneur" >
        <div className="nom">
            <h6><IonLabel>volkswagen golf</IonLabel></h6>
                    <div className="iconI">
                        <IonIcon  icon={isLiked ? heart : heartOutline}
              style={{ fontSize: '28px', color: isLiked ? 'red' : 'gray' }}
              onClick={handleLikeClick}/>
                    </div>
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
        <div className="tauxemiss" onClick={() => { window.location.href = '/details'; }}>
            <p><IonLabel>≃ 120 gr CO2/km</IonLabel></p>
        </div>
        <div className="prix" onClick={() => { window.location.href = '/details'; }}>
            <div>
            <h5><IonLabel>10 090 £</IonLabel></h5>
            <h6><IonLabel>prix mensuel </IonLabel><span className="montant"><IonLabel>195£</IonLabel></span></h6>
            </div>
        </div>
    </div>
    </center>
  );
};
export default Annonce;