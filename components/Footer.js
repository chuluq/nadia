import styles from "@/styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.tagline}>
        <h5>Let&apos;s meet for a cup of coffee</h5>
      </div>
      <div className={styles.details}>
        <div className={styles.location}>
          <p>1088 Moore Avenue</p>
          <p>San Francisco</p>
          <p>SF</p>
        </div>
        <div className={styles.openHours}>
          <p>Mo - Fri: 8am - 8pm</p>
          <p>Sat: 9am - 6pm</p>
          <p>Sun: 9am - 4pm</p>
        </div>
        <div className={styles.socials}>
          <p>Let&apos;s be friends</p>
          {/* icons */}
        </div>
      </div>
    </footer>
  );
}
