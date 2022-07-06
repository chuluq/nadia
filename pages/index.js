import Image from "next/image";
import Layout from "@/components/Layout";
import heroCover from "@/assets/hero-cover.webp";
import productCover1 from "@/assets/product-cover-1.png";
import productCover2 from "@/assets/product-cover-2.png";
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
          <Image
            src={heroCover}
            alt="hero-cover"
            layout="responsive"
            priority
          />
        </div>
      </section>

      <section className={styles.services}>
        <div className={styles.serviceTitle}>
          <h3>ORDER FRESHLY BAKED GOODS OR VISIT NADIA CAFE</h3>
        </div>
        <div className={styles.serviceDetails}>
          <div className={styles.serviceItem}>
            <div>
              <Image src={productCover1} alt="product-cover-1" />
            </div>
            <div className={styles.serviceItemText}>
              <h5>PASTRY HEAVEN</h5>
              <p>
                Our skilled pastry chef Sarah spent years studying the arts of
                flake, crunch, and chew in prestigious Parisian kitchens. We’re
                now lucky enough to be able to sell her life-changing pastries.
              </p>
            </div>
          </div>
          <div className={styles.serviceItem}>
            <div>
              <Image src={productCover2} alt="product-cover-2" />
            </div>
            <div className={styles.serviceItemText}>
              <h5>NADIA CAFE</h5>
              <p>
                Want to experience the best coffee you’ve ever tasted? Come join
                us at Nadia Cafe for sparkling conversation, a warm and
                welcoming atmosphere, and of course coffee beyond all imagining.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
