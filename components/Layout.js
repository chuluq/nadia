import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import styles from "@/styles/Layout.module.css";

export default function Layout({ title, keywords, description, children }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <Header />
      <div className={styles.container}>{children}</div>
      <Footer />
    </>
  );
}

Layout.defaultProps = {
  title: "Nadia Cafe",
  description: `Let's meet for a cup of coffee`,
  keywords: "restaurant, cafe, coffee, pastry,foods,drinks",
};
