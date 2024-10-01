import './App.css';
import { Link, Outlet, Route, Routes } from 'react-router-dom';

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
import { IonContent, IonHeader, IonTitle, IonToolbar, setupIonicReact } from '@ionic/react';
import './theme/variables.css';
import Login from './pages/LoginPage';
import Dashboard from './pages/Dashboard';

setupIonicReact();

function App() {
  return (
    <div style={{ height: '100vh' }}>
      <IonHeader>
        <IonToolbar className="ion-no-border" color={'primary'}>
          <IonTitle>NMC skysign app</IonTitle>
        </IonToolbar>
      </IonHeader>
      <Routes>
        {/* <Route path="/" element={<App />} > */}
        <Route path="" element={<Login />} />
        <Route path="/app/dashboard" element={<Dashboard />} />
        <Route path="*" element={
          <div>
            404 Not Found
            <Link to="/">Go Home</Link>
          </div>
        } />
        {/* </Route> */}
      </Routes>
    </div>
  );
}

export default App;
