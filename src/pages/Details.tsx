import React, { useState } from 'react';
import { IonBackButton, IonButtons, IonIcon, IonButton, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonImg, IonItem, IonLabel, IonList, IonListHeader, IonPage, IonTitle, IonToolbar, IonAlert } from '@ionic/react';
import voitureImg from '../assets/voiture.jpg';
import '../assets/details.css';
import 'swiper/swiper-bundle.css';
import { accessibility, car, checkmark, heart, tabletPortrait } from 'ionicons/icons';


import { Swiper, SwiperSlide } from 'swiper/react';

const Details: React.FC = () => {
  const [isSold, setIsSold] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const handleButtonClick = () => {
    setShowAlert(true);
  };

  const handleAlertConfirm = () => {
    setIsSold(true);
    setShowAlert(false);
  };

  const handleAlertCancel = () => {
    setShowAlert(false);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar style={{ '--background': '#287aa9' }}>
          <IonButtons slot='start'>
            <IonBackButton defaultHref='/listee'></IonBackButton>
          </IonButtons>
          <IonTitle style={{ '--color': 'white' }}>Details</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">

          <Swiper
          spaceBetween={10}
          slidesPerView={1}
          loop
        >
          <SwiperSlide><IonImg src={voitureImg} /></SwiperSlide>
          <SwiperSlide><IonImg src={voitureImg} /></SwiperSlide>
          <SwiperSlide><IonImg src={voitureImg} /></SwiperSlide>
        </Swiper>

          <IonList lines='none'>
          
            <IonItem className='item'>
            <IonCardTitle style={{ fontSize: '1.3em',color:'#287aa9' }}>GOLF II TDI 2.0</IonCardTitle>
            </IonItem>
            <IonItem className='item'>
                <IonLabel><b>Marque : </b> Volkswagen</IonLabel>  
            </IonItem>
            <IonItem className='item'>
                <IonLabel><b>Modèle : </b> GOLF</IonLabel>  
            </IonItem>
            <IonItem className='item'>
                <IonLabel><b>Prix : </b> 250000 MGA</IonLabel>  
            </IonItem>
          
            <IonItem className='item'>
                <IonLabel><b>Statut : </b> <div className={`etiquette ${isSold ? 'vendue' : 'en-vente'}`}>
            {isSold ? 'vendue' : 'en vente'}
          </div></IonLabel>  
            </IonItem>
            <br />

            {!isSold && (
            <IonButton expand="full" onClick={handleButtonClick}>Vendre la voiture</IonButton>
            )
          }
            <IonAlert
        isOpen={showAlert}
        onDidDismiss={handleAlertCancel}
        header={'Confirmation'}
        message={'Êtes-vous sûr de vouloir vendre la voiture?'}
        buttons={[
          {
            text: 'Annuler',
            role: 'cancel',
            cssClass: 'secondary',
            handler: handleAlertCancel
          },
          {
            text: 'Oui',
            handler: handleAlertConfirm
          }
        ]}
      />
        </IonList>
    <br />
    <br />
            <IonTitle className="ion-text-center" style={{ fontSize: '1.7em',color:'#287aa9' }}>Détails</IonTitle>
            <center>
            <hr className="ligne"></hr>
            </center>
<br />
            <div className="custom-card">
              <div className="custom-card-header">
                <div className="custom-card-subtitle">
                  <div className="side-by-side" style={{ display:'flex', alignItems:'center' }}>
                    <span className="test"><img src='https://artifacts-cdn.autohero.com/retail-sharding/public/assets/mileage-ff5440ca0e6dc8147b543433122f58ca.svg' style={{width: '40px',height: '20px',marginLeft: '-10px'}}></img></span>
                    <span className="info"><IonLabel>Kilometrage</IonLabel></span>
                  </div>
                  <div className="to-the-right">
                    <span><IonLabel>120 021 Km</IonLabel></span>
                  </div>
                </div>
              </div>
            </div>


            <div className="custom-card">
              <div className="custom-card-header">
                <div className="custom-card-subtitle">
                  <div className="side-by-side" style={{ display:'flex', alignItems:'center' }}>
                    <span className="test"><img src='https://artifacts-cdn.autohero.com/retail-sharding/public/assets/fuel-3492c5cbbc8c47a60fc257778f4a9304.svg' style={{width: '40px',height: '20px',marginLeft: '-10px'}}></img></span>
                    <span className="info"><IonLabel>Carburant</IonLabel></span>
                  </div>
                  <div className="to-the-right">
                    <span><IonLabel>Diezel</IonLabel></span>
                  </div>
                </div>
              </div>
            </div>

            <div className="custom-card">
              <div className="custom-card-header">
                <div className="custom-card-subtitle">
                  <div className="side-by-side" style={{ display:'flex', alignItems:'center' }}>
                    <span className="test"><IonIcon icon={car} style={{width: '40px',height: '20px',marginLeft: '-10px',color:'#F37121'}}></IonIcon></span>
                    <span className="info"><IonLabel>Catégorie</IonLabel></span>
                  </div>
                  <div className="to-the-right">
                    <span><IonLabel>SUV</IonLabel></span>
                  </div>
                </div>
              </div>
            </div>

            <div className="custom-card">
              <div className="custom-card-header">
                <div className="custom-card-subtitle">
                <div className="side-by-side" style={{ display:'flex', alignItems:'center'}}>
                    <span className="test"><img src='https://artifacts-cdn.autohero.com/retail-sharding/public/assets/transmission-b833ce65ae0cbd7d70c164d504d0ce40.svg' style={{width: '40px',height: '20px',marginLeft: '-10px'}}></img></span>
                    <span className="info"><IonLabel>Transmission</IonLabel></span>
                  </div>
                  <div className="to-the-right">
                    <span><IonLabel>Manuelle</IonLabel></span>
                  </div>
                </div>
              </div>
            </div>


            <div className="custom-card">
              <div className="custom-card-header">
                <div className="custom-card-subtitle">
                  <div className="side-by-side">
                    <span className="test"><img src='https://artifacts-cdn.autohero.com/retail-sharding/public/assets/power-596639fde4e38eb7ee84897c86fbb75b.svg' style={{width: '40px',height: '20px',marginLeft: '-10px'}}></img></span>
                    <span className="info"><IonLabel>Puissance</IonLabel></span>
                  </div>
                  <div className="to-the-right">
                    <span><IonLabel>120 CV</IonLabel></span>
                  </div>
                </div>
              </div>
            </div>

            <div className="custom-card">
              <div className="custom-card-header">
                <div className="custom-card-subtitle">
                  <div className="side-by-side">
                    <span className="test"><img src='https://artifacts-cdn.autohero.com/retail-sharding/public/assets/owners-24f12d44d12ed014661c518223c54298.svg' style={{width: '40px',height: '20px',marginLeft: '-10px'}}></img></span>
                    <span className="info"><IonLabel>Ancien(s) propriétaire</IonLabel></span>
                  </div>
                  <div className="to-the-right">
                    <span><IonLabel>2</IonLabel></span>
                  </div>
                </div>
              </div>
            </div>

            <div className="custom-card">
              <div className="custom-card-header">
                <div className="custom-card-subtitle">
                  <div className="side-by-side">
                    <span className="test"><IonIcon icon={tabletPortrait} style={{width: '40px',height: '20px',marginLeft: '-10px',color:'#F37121'}}></IonIcon></span>
                    <span className="info"><IonLabel>Porte(s)</IonLabel></span>
                  </div>
                  <div className="to-the-right">
                    <span><IonLabel>5</IonLabel></span>
                  </div>
                </div>
              </div>
            </div>

            <div className="custom-card">
              <div className="custom-card-header">
                <div className="custom-card-subtitle">
                  <div className="side-by-side">
                    <span className="test"><IonIcon icon={accessibility} style={{width: '40px',height: '20px',marginLeft: '-10px',color:'#F37121'}}></IonIcon></span>
                    <span className="info"><IonLabel>Place(s)</IonLabel></span>
                  </div>
                  <div className="to-the-right">
                    <span><IonLabel>5</IonLabel></span>
                  </div>
                </div>
              </div>
            </div>

<br />

       
<IonList lines='none'>
            <IonListHeader style={{ fontSize: '1.5em', fontWeight: 'bold', marginBottom: '5px' }}>
                <IonLabel>Equipements</IonLabel>
            </IonListHeader>
            <IonItem className='item'>
                <IonLabel style={{ display:'flex', gap:'20px' }}><IonIcon color='success' icon={checkmark} /> Bluetooth</IonLabel>  
            </IonItem>
            <IonItem className='item'>
                <IonLabel style={{ display:'flex', gap:'20px' }}><IonIcon color='success' icon={checkmark} /> WiFi</IonLabel>  
            </IonItem>
            <IonItem className='item'>
                <IonLabel style={{ display:'flex', gap:'20px' }}><IonIcon color='success' icon={checkmark} /> Caméra de recul</IonLabel>  
            </IonItem>
            <IonItem className='item'>
                <IonLabel style={{ display:'flex', gap:'20px' }}><IonIcon color='success' icon={checkmark} /> Vitre</IonLabel>  
            </IonItem>
          
        </IonList>
        <IonList lines='none'>
            <IonListHeader style={{ fontSize: '1.5em', fontWeight: 'bold', marginBottom: '5px' }}>
                <IonLabel>Description supp</IonLabel>
            </IonListHeader>
            <IonItem>
              <p style={{fontSize: '15px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione consectetur ad aliquam quaerat neque. Alias earum libero id explicabo sint itaque vero velit, autem consectetur fugit nisi facere qui voluptatem dolor vitae dolorem, asperiores, nobis nesciunt. Recusandae eius quasi, nisi ullam facere est doloremque labore aliquam nesciunt maiores veritatis odit reiciendis porro a expedita ducimus quos corrupti doloribus? Nam quo consequatur quasi officiis ex id ut repellendus est dolorum quod quaerat autem repellat nesciunt, temporibus laudantium sit earum impedit eius? Placeat alias nulla nobis voluptatum error. Eaque mollitia fugiat dolores suscipit tempora accusamus, fugit totam modi rem quidem veritatis repellat nulla, placeat doloremque dolore animi dicta sint laborum repudiandae id quo soluta ut unde necessitatibus? A odit nisi expedita tempore.</p>
            </IonItem>
          
        </IonList>
<br />
       
            </IonContent>

            
        </IonPage>
  );
};

export default Details;
