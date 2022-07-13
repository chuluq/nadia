import Layout from "@/components/Layout";
import styles from "@/styles/Contact.module.css";

export default function ContactPage() {
  return (
    <Layout title="Nadia Cafe | Contacts">
      <section className={styles.contact}>
        <div className={styles.contactTitle}>
          <h1>Contact</h1>
        </div>
        <div className={styles.contactCaption}>
          <p>
            Want to know more about what we offer? Need to check that we can
            meet your dietary needs? Got an unusual request you want us to
            fulfill?
          </p>
          <p>
            Get in touch via the contact details below and we’ll get back to you
            ASAP.
          </p>
        </div>
        <div className={styles.contactList}>
          <div className={styles.contactItem}>
            <p>Telp</p>
            <p>4400 - 88 - 823</p>
          </div>
          <div className={styles.contactItem}>
            <p>Email</p>
            <p>nadia@cafe.com</p>
          </div>
          <div className={styles.contactItem}>
            <p>Instagram</p>
            <p>Nadia Cafe</p>
          </div>
          <div className={styles.contactItem}>
            <p>Facebook</p>
            <p>Nadia Cafe</p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
