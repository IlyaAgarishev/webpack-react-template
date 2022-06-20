import React from "react";
import styles from "./styles.scss";

const onClickEvent = (e) => {
  e.preventDefault();
  alert("You Clicked Me!");
};

const App = () => {
  return (
    <div className={styles.content}>
      <div className={styles.label}>
        Custom Webpack React Template YOU DID IT AAAAAAAAAAAAAA
      </div>
      <button className={styles.btn} onClick={onClickEvent}>
        Click me
      </button>
    </div>
  );
};

export default App;
