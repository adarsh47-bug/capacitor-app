import {
  IonButton,
  IonCard,
  IonCardContent,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  useIonAlert,
  useIonLoading
} from '@ionic/react';
import { useNavigate } from 'react-router-dom';
import { logIn } from 'ionicons/icons';
import { useState } from 'react';
import '../theme/variables.css';


function Login() {
  const navigate = useNavigate();
  const [alert] = useIonAlert();
  const [present, dismiss] = useIonLoading();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    await present({ message: 'Loading...' });

    setTimeout(() => {
      dismiss();
      if (Math.random() < 0.5) {
        alert({
          header: 'Invalid credentials',
          message: 'There is no user with that name and password.',
          buttons: [{ text: 'Ok' }]
        });
      } else {
        navigate('/app/dashboard');
      }
    }, 1500);
  };

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '70%' }}>

        <IonCard>
          <IonCardContent>
            <form onSubmit={onSubmit}>
              <div className="ion-margin-top">
                <IonInput label="Username" labelPlacement="floating" fill="outline" placeholder="Enter your username"></IonInput>
              </div>
              <div className="ion-margin-top">
                <IonInput label="Password" labelPlacement="floating" fill="outline" placeholder="Enter your password"></IonInput>
              </div>

              <div className="ion-margin-top">
                <IonButton shape="round" expand="full" type="submit" color="primary">
                  <IonIcon icon={logIn} slot="start" />
                  Login
                </IonButton>
              </div>
            </form>
          </IonCardContent>
        </IonCard>
      </div>
    </>
  );
}

export default Login;

// {/* <IonItem>
//             <IonLabel position="floating">Email</IonLabel>
//             <IonInput type="email" value={email} onIonChange={e => setEmail(e.detail.value)}></IonInput>
//           </IonItem>

//           <IonItem>
//             <IonLabel position="floating">Password</IonLabel>
//             <IonInput type="password" value={password} onIonChange={e => setPassword(e.detail.value)}></IonInput>
//           </IonItem> */}