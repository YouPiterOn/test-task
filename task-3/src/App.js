import React, { useEffect, useState } from "react";
import universitiesClient from "./clients/universitiesClient";
import Table from "./components/Table/Table";
import styles from './App.module.css';

const App = () => {
  const [country, setCountry] = useState('');
  const [universities, setUniversities] = useState([]);

  const fetchUniversities = async () => {
    const data = await universitiesClient.getUniversitiesByCountry(country);
    setUniversities(data);
  };

  const reset = () => {
    setCountry('');
    setUniversities([]);
  };

  return (
    <div className={styles.app}>
      <div>
        <input className={styles.textInput}
          type="text"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          placeholder="Enter country name"
        />
        <button className={styles.button} onClick={fetchUniversities}>Submit</button>
        <button className={styles.button} onClick={reset}>Reset</button>
      </div>

      {universities.length > 0 && (
        <Table universities={universities}></Table>
      )}
    </div>
  );
};

export default App;