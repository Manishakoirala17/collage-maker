import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./../styles/Layout1.module.css";
import Content from "./contentLayout";
export default function Layout1({ onDragStart, className, isShowContent }) {
  const [file1, setFile1] = useState();
  // "blob:http://localhost:3000/21ae571b-b1fb-4973-b8fc-62c9886052e3"
  const [val, setVal] = useState();
  function handleClick() {
    console.log("1");
    // setVal("dasdad");
    document.getElementById("file").click();
  }
  function handleChange(e) {
    // console.log("2");
    let fileUrl = URL.createObjectURL(e.target.files[0]);
    // setVal("hai");
    console.log(fileUrl, "url");
    console.log("HAndle change");
    setFile1(fileUrl);
    // alert(fileUrl);
    // alert(file1);
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
        onChange={handleChange}
        accept="image*/"
        hidden
      ></input>
      <div className={`${styles.fileContainer} ${styles[className]}`}>
        {isShowContent ? (
          <div>
            <Content fileUrl={file1} handleClick={handleClick}></Content>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className={`${styles.fileContainer} ${styles[className]}`}>
        {isShowContent ? (
          <Content fileUrl={file1} handleClick={handleClick}></Content>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
