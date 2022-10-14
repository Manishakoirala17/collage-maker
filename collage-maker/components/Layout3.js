import { useState } from "react";
import styles from "./../styles/Layout3.module.css";
export default function Layout1({ onDragStart, className }) {
  let [file1, setFile1] = useState();
  let [isShowFile1, setShowFile1] = useState(false);
  function handleClick() {
    document.getElementById("file").click();
  }
  function fileOnChange(e) {
    setFile1(e.target.value);
    setShowFile1(true);
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
          <button onClick={handleClick}>+</button>
        </div>
      </div>
      <div className={`${styles.fileContainer} ${styles[className]}`}>
        <div className={styles.content}>
          <button onClick={handleClick}>+</button>
        </div>
      </div>
    </div>
  );
}
