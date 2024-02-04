import { IonButtons, IonCol, IonFab, IonFabButton, IonGrid, IonIcon, IonImg, IonRow, useIonAlert } from '@ionic/react';
import { PhotoItem } from "../types/PhotoItem";
import React from 'react';
import { close, closeCircle, closeCircleOutline, trash } from 'ionicons/icons';


type Props = {
    photos: PhotoItem[] ,
    deletePhoto: (fileName: string) => void
}

const PhotoGallery : React.FC<Props> = ({photos, deletePhoto}) => {
    const [displayAlert] = useIonAlert()
    const confirmDelete = (fileName: string) =>
        displayAlert({
            message: 'delete?',
            buttons: [
                {text: 'Cancel', role: 'cancel'},
                {text: 'Ok',role: 'confirm'},
            ],
            onDidDismiss: (e) => {
                if(e.detail.role ==='cancel') return
                deletePhoto(fileName)
            },
        })
        return (
            <div style={{ overflowX: 'auto', whiteSpace: 'nowrap' }}>
              <IonGrid>
                <IonRow>
                  {photos.map((photo, idx) => (
                    <IonCol size="6" key={idx} style={{ display: 'inline-block' }}>
                      <IonFab vertical="bottom" horizontal="center">
                        <IonFabButton
                          onClick={() => confirmDelete(photo.filePath)}
                          style={{ position: 'absolute', width: '15px', height: '15px', marginTop: '-115px', marginLeft: '60px' }}
                          color="light"
                        >
                          <IonIcon icon={close}></IonIcon>
                        </IonFabButton>
                      </IonFab>
                      <IonImg src={photo.webviewPath} />
                    </IonCol>
                  ))}
                </IonRow>
              </IonGrid>
            </div>
          );
}

export default PhotoGallery;