import { IonButton, IonButtons, IonCard, IonCardContent, IonCheckbox, IonContent, IonFooter, IonHeader, IonIcon, IonImg, IonInput, IonPage, IonSelect, IonSelectOption, IonTextarea, IonTitle, IonToolbar } from '@ionic/react';
import { addCircle, camera, duplicate, exit, home, image, images, logIn } from 'ionicons/icons';
import React, { useState } from 'react';
import '../assets/details.css';
import { Camera, CameraResultType } from '@capacitor/camera';
import { usePhotoGalleri } from '../hooks/usePhotoGalleri';
import PhotoGallery from './PhotoGallery';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

const AjoutAnnonce: React.FC = () => {
const {photos,takePhoto,deletePhoto} = usePhotoGalleri();
    return (
        <IonPage>
            <IonHeader>
          <IonToolbar style={{ '--background': '#287aa9' }}>
            <IonTitle style={{ '--color': 'white' }}>Ajouter une annonce</IonTitle>
          </IonToolbar>
        </IonHeader>
        <br />
        <IonContent>    
        
<IonCard>
    <IonCardContent>
<IonTitle className="ion-text-center" style={{ fontSize: '1.7em',color:'#287aa9' }}>Photos</IonTitle>
            <center>
            <hr className="ligne"></hr>
            </center>
            <br />
    
<IonButton onClick={takePhoto}>
    <IonIcon icon={camera}></IonIcon>
</IonButton>

        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          loop
        >
          <SwiperSlide><PhotoGallery photos={photos} deletePhoto={deletePhoto}/></SwiperSlide>
          
        </Swiper>


</IonCardContent>
<br />
<IonTitle className="ion-text-center" style={{ fontSize: '1.7em',color:'#287aa9' }}>Détails</IonTitle>
            <center>
            <hr className="ligne"></hr>
            </center>
            <br />
    <IonCardContent>
    <IonSelect label="Marques" labelPlacement="floating" fill="solid">
        <IonSelectOption value="apple">Apple</IonSelectOption>
        <IonSelectOption value="banana">Banana</IonSelectOption>
        <IonSelectOption value="orange">Orange</IonSelectOption>
      </IonSelect>
        <br />
        <IonSelect label="Model" labelPlacement="floating" fill="solid">
        <IonSelectOption value="apple">Apple</IonSelectOption>
        <IonSelectOption value="banana">Banana</IonSelectOption>
        <IonSelectOption value="orange">Orange</IonSelectOption>
      </IonSelect>
      <br />
      <IonSelect label="Catégorie" labelPlacement="floating" fill="solid">
        <IonSelectOption value="apple">SUV</IonSelectOption>
        <IonSelectOption value="banana">4x4</IonSelectOption>
      </IonSelect>
      <br />
      <IonSelect label="Type de carburant" labelPlacement="floating" fill="solid">
        <IonSelectOption value="apple">Electrique</IonSelectOption>
        <IonSelectOption value="banana">Diezel</IonSelectOption>
        <IonSelectOption value="orange">Essence</IonSelectOption>
      </IonSelect>
      <br />
        <IonSelect label="Type de transmission" labelPlacement="floating" fill="solid">
        <IonSelectOption value="apple">Manuelle</IonSelectOption>
        <IonSelectOption value="banana">Automatique</IonSelectOption>
      </IonSelect>
              
      <br />
    <IonInput type="number" label="kilometrage" labelPlacement="floating" fill="solid"></IonInput>
        <br />

      <IonInput  type="number" label="puisssance" labelPlacement="floating" fill="solid"></IonInput>
      <br />
      <IonInput type="number" label="ancien proprio" labelPlacement="floating" fill="solid" ></IonInput>
      <br />
      <IonInput type="number" label="nombre de portes" labelPlacement="floating" fill="solid" ></IonInput>
      <br />
      <IonInput type="number" label="nombre de place" labelPlacement="floating" fill="solid" ></IonInput>
    </IonCardContent>
    <br />
    <IonTitle className="ion-text-center" style={{ fontSize: '1.7em',color:'#287aa9' }}>Equipements</IonTitle>
            <center>
            <hr className="ligne"></hr>
            </center>
    <br />
            <IonCardContent>
    <IonCheckbox labelPlacement="end">Bluetooth</IonCheckbox>
    <br />
    <br />
    <IonCheckbox labelPlacement="end">Wifi</IonCheckbox>
    <br />
    <br />
    <IonCheckbox labelPlacement="end">Camera de recul</IonCheckbox>
    <br />
    <br />
    <IonCheckbox labelPlacement="end">Vitre</IonCheckbox>
    </IonCardContent>
    <br />
    <IonCardContent>
    <IonTitle className="ion-text-center" style={{ fontSize: '1.7em',color:'#287aa9' }}>Déscription supplémentaire</IonTitle>
            <center>
            <hr className="ligne"></hr>
            </center>
    <br />
    <IonTextarea label="description" labelPlacement="floating" fill="solid"></IonTextarea>
    <br />
    <br />
    <IonButton expand="full" color="success">Enregistre</IonButton>
    </IonCardContent>
    <br />
</IonCard>
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
    );
};

export default AjoutAnnonce;