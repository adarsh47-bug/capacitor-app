import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, setupIonicReact } from "@ionic/react";
import { Link } from "react-router-dom";
import '../theme/variables.css';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css'; // Remove if nothing is visible
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
import '../theme/variables.css';

setupIonicReact();

function Dashboard() {
  return (
    <>
      {/* <h2>Dashboard Page</h2> */}
      {/* <Link to="/">Back to login</Link> */}
      <IonCard>
        <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
        <IonCardHeader>
          <IonCardTitle>Card Title</IonCardTitle>
          <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
        </IonCardHeader>

        <IonCardContent>Here's a small text description for the card content. Nothing more, nothing less.</IonCardContent>
      </IonCard>
    </>
  )
}

export default Dashboard;