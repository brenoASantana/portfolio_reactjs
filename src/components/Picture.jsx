import styles from "./Picture.module.css";

export default function Picture({ src, alt }) {
  return (
    <div className={styles.picture}>
      <img src={src} alt={alt} />
    </div>
  );
}
