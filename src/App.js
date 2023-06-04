import { makeStyles } from "@material-ui/core";
import Homepage from "./Pages/HomePage";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import CoinPage from "./Pages/CoinPage";
import Header from "./components/Header";
import Alert from "./components/Banner/Alert";
import React from "react";
import { useEffect } from "react";
import { messaging } from "./firebase";
import { getToken } from "firebase/messaging";




const useStyles = makeStyles(() => ({
  App: {
    backgroundColor: "#14161a",
    color: "white",
    minHeight: "100vh",
  },
}));

function App() {
  async function requestPermission(){
   const permission = await Notification.requestPermission();
   if(permission === 'granted'){
     
    const token = await getToken(messaging, { vapidKey: 'BAVyRh2SdxvFT7d5CdbtLXMpZjasX4f57cJlEMuuytVWMhre4dwgOcnETsBvckGWV-1XpjIb9cGdoMp0gOaqcqc' });
    console.log("Token Gen",token);
   }else if(permission === 'denied'){
    alert("You Denied For the notification")
   }
  }
useEffect(() => {
    requestPermission();
}, []);
 

  const classes = useStyles();

  return (
    <BrowserRouter>
      <div className={classes.App}>
        <Header />
        <Route path="/" component={Homepage} exact />
        <Route path="/coins/:id" component={CoinPage} exact />
      </div>
      <Alert/>
      {/* <div className="">
          Hi my Push Notification service
      </div> */}
    </BrowserRouter>
  );
}

export default App;