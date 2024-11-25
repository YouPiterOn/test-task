import React, { useEffect } from "react";
import TableRow from "../TableRow/TableRow";
import styles from './Table.module.css'

const Table = ({universities}) => {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th className={styles.headerCell}>#</th>
          <th className={styles.headerCell}>University Name</th>
          <th className={styles.headerCell}>Country</th>
          <th className={styles.headerCell}>Website</th>
        </tr>
      </thead>
      <tbody>
        {universities.map((uni, index) => (
          <TableRow
            key={uni.name}
            index={index+1}
            name={uni.name}
            country={uni.country}
            pageURL={uni.web_pages[0]}
          />
        ))}
      </tbody>
    </table>
  );
}

export default Table;