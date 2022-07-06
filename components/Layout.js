import Header from "./Header";
import Footer from "./Footer";
import styles from "@/styles/Layout.module.css";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <div className={styles.container}>{children}</div>
      <Footer />
    </>
  );
}
