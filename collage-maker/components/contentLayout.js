import { useEffect } from "react";
import styles from "./../styles/Layout1.module.css";

export default function Content({ fileUrl, handleClick }) {
  return (
    <div className={styles.content}>
      {fileUrl}
      {fileUrl ? (
        <img
          src={fileUrl}
          alt="Picture of the author"
          width={500}
          height={500}
        />
      ) : (
        <button onClick={handleClick}>+</button>
      )}
    </div>
  );
}
