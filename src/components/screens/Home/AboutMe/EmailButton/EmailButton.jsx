import React from "react";
import styles from "./emailButton.module.scss";
const EmailButton = () => {
  return (
    <div className={styles.button}>
      <a
        href="mailto:barashihin.egor@yandex.ru"
        target="_blank"
        rel="noreferrer"
        title="barashihin.egor@yandex.ru"
      >

        <span>Email</span>
      </a>
    </div>
  );
};

export default EmailButton;
