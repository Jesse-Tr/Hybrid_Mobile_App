import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonListHeader, IonItem, IonLabel } from '@ionic/react';
import React, {useState, useEffect} from 'react';
import './Tab1.css';
import { Link } from "react-router-dom";

const Tab1: React.FC = () => {
  // dataset state variable to hold JSON data from WP
  // to meet Ionic's requirement for typescript data types
  // set type to <any[]> on next line
  const [dataset, setDataset] = useState<any[]>([]);
  // URL for WP JSON REST endpoint
  const dataURL = "https://dev-cs55-13-2023.pantheonsite.io/wp-json/twentytwentyone-child/v1/songs";
  // useEffect() to get JSON data and populate dataset state variable
  useEffect(() => {
    fetch(dataURL) // fetch() to load raw json string
    .then(response => response.json()) // json() to convert raw string to json object
    .then(data => setDataset(data)) // react state set function to populate data state var
  },[])
  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Movies</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Things</IonTitle>
          </IonToolbar>
        </IonHeader>
        {/* use map() to loop through JSON array returned from WP */}
        <IonList id="movie-list">
          <IonListHeader></IonListHeader>
          {dataset.map((item, index) => (
            <IonItem lines="inset" key={index}>
              <IonLabel>
                <img src={item.guid} height="125px" width="100px" /> 
                <h2>Artist: {item.artist}</h2>
               <h2>Title: {item.album}</h2>   
                <h2>Genre: {item.genre}</h2>
                <h2>Rating: {item.rating}</h2>
                
               
                
              </IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
