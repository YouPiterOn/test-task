import React, {useEffect, useState} from "react";
import universitiesClient from "./clients/universitiesClient";
import Table from "./components/Table/Table";
import styles from './App.module.css';

const App = () => {
  const [universities, setUniversities] = useState([]);

  useEffect(() => {
    const fetchUniversities = async () => {
      const data = await universitiesClient.getUniversitiesByCountry('turkey');
      setUniversities(data);
    }
    fetchUniversities();
  }, [])

  return(
    <div className={styles.app}>
      {universities.length > 0 && (
        <Table universities={universities}></Table>
      )}
    </div>
  );
};

export default App;