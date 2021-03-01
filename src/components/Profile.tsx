import styles from "../styles/components/Profile.module.css";

function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/lvieira268.png" alt="lvieira268" />
      <div>
        <strong>Letícia Vieira</strong>
        <p>
          <img src="icons/level.svg" alt="Level" /> Level 1
        </p>
      </div>
    </div>
  );
}

export default Profile;
