import React from "react";
import styles from './TableRow.module.css'

const TableRow = ({index, name, country, pageURL}) => {
  return (
    <tr>
      <td className={styles.tableCell}>{index}</td>
      <td className={styles.tableCell}>{name}</td>
      <td className={styles.tableCell}>{country}</td>
      <td className={styles.tableCell}>
        <a className={styles.link} href={pageURL}>
          Visit Page
        </a>
      </td>
    </tr>
  );
}

export default TableRow;