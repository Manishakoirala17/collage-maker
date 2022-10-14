import styles from "./../styles/Layout2.module.css";
export default function Layout2({ onDragStart, className }) {
  return (
    <div
      className={styles.container}
      draggable="true"
      id="layout2"
      onDragStart={onDragStart}
    >
      <div className={`${styles.fileContainer} ${styles[className]}`}>
        <button>+</button>
      </div>
      <div className={`${styles.fileContainer} ${styles[className]}`}>
        <button>+</button>
      </div>
    </div>
  );
}
