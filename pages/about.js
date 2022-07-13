import Image from "next/image";
import Layout from "@/components/Layout";
import aboutCover11 from "@/assets/about-cover-11.png";
import aboutCover12 from "@/assets/about-cover-12.png";
import aboutCover3 from "@/assets/about-cover-3.png";
import styles from "@/styles/About.module.css";

export default function AboutPage() {
  return (
    <Layout title="Nadia Cafe | About Us">
      <section className={styles.leading}>
        <div className={styles.leadingText}>
          <h1>About Us</h1>
          <p>
            We have two obsessions: coffee and food. We’re passionate about
            sharing both with you, which is why we created Nadia Cafe. Here is a
            place to eat, drink, meet friends, and enjoy an atmosphere away from
            the hassles of everyday life.
          </p>
        </div>
        <div className={styles.leadingCover}>
          <div>
            <Image src={aboutCover11} alt="about-cover-11" />
          </div>
          <div className={styles.cover2}>
            <Image src={aboutCover12} alt="about-cover-12" />
          </div>
          <div className={styles.aboutText}>
            <p>
              Our menu changes on a monthly basis, to reflect the changing
              seasons, and to ensure that there’s something new for you to enjoy
              each time you visit. Be sure to speak to one of us about the daily
              specials.
            </p>
            <p>
              If you’ve never visited Nadia Cafe before, you’re in for a treat.
              We source the best coffee beans and freshest ingredients for a
              phenomenal eating and drinking experience.
            </p>
          </div>
        </div>
        <div>
          <Image src={aboutCover3} alt="about-cover-3" />
        </div>
      </section>
    </Layout>
  );
}
