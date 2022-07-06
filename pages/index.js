import Image from "next/image";
import Layout from "@/components/Layout";
import heroCover from "@/assets/hero-cover.webp";
import styles from "@/styles/Home.module.css";

export default function HomePage() {
  return (
    <Layout>
      <section className={styles.hero}>
        <div className={styles.heroTitle}>
          <h1>Nadia cafe</h1>
        </div>
        <div className={styles.heroCaption}>
          <p>
            We are coffee punks who don’t exaggerate about their Americanos.
            Time, temperature, and technique need to be on point to make the
            best cup of coffee, but it’s all for nothing without quality beans
            roasted to perfection.
          </p>
        </div>
        <div className={styles.heroCta}>
          <button className="btn">about us</button>
        </div>
        <div className={styles.heroCover}>
          <Image src={heroCover} alt="hero-cover" layout="responsive" />
        </div>
      </section>
    </Layout>
  );
}
