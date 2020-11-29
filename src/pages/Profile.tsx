import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItemDivider} from '@ionic/react';
import React from 'react';
import { useHistory, RouteComponentProps } from "react-router-dom";
import { IonGrid, IonRow, IonCol } from '@ionic/react';

interface ResetProps
  extends RouteComponentProps<{
    id: string;
  }> {}

const Dashboard: React.FC<ResetProps> = ({ match }) => {
  const history = useHistory();
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
  <IonTitle>Dasboard</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding ion-text-center">
        <IonGrid>
          <IonRow>
              <IonCol>
                  <h4>Welcome: {match.params.id} </h4>
                  <IonItemDivider></IonItemDivider>
              </IonCol>
          </IonRow>
          </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Dashboard;