import { useState } from "react";
import styles from "./../styles/Layout1.module.css";
export default function Layout1({ onDragStart, className }) {
  const [file1, setFile1] = useState("");
  function handleClick() {
    document.getElementById("file").click();
  }
  function fileOnChange(e) {
    setFile1(e.target.value);
    console.log(e.target.value);
  }

  return (
    <div
      className={styles.container}
      draggable="true"
      id="layout1"
      onDragStart={onDragStart}
    >
      <input
        type="file"
        id="file"
        onChange={fileOnChange}
        multiple
        hidden
        accept="image*/"
      ></input>
      <div className={`${styles.fileContainer} ${styles[className]}`}>
        <div className={styles.content}>
          {file1.length == 0 ? (
            <button onClick={handleClick}>+</button>
          ) : (
            <p>hai</p>
          )}
        </div>
      </div>
      <div className={`${styles.fileContainer} ${styles[className]}`}>
        <div className={styles.content}>
          {" "}
          {file1.length == 0 ? (
            <button onClick={handleClick}>+</button>
          ) : (
            <p>hai</p>
          )}
        </div>
      </div>
    </div>
  );
}
