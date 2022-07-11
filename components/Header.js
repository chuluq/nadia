import { useState, useEffect } from "react";
import Link from "next/link";
import { links } from "@/constants/links";
import styles from "@/styles/Header.module.css";

export default function Header() {
  const [showLinks, setShowLinks] = useState(false);
  const [windowHeight, setWindowHeight] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  const handleToggle = () => setShowLinks(!showLinks);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => setWindowHeight(window.scrollY);

  useEffect(() => {
    if (windowHeight > 80) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  }, [windowHeight]);

  return (
    <header
      className={
        scrolled ? `${styles.header} ${styles.addShadow}` : styles.header
      }
    >
      <div className={styles.navCenter}>
        <div className={styles.navHeader}>
          <Link href="/">
            <h4 className={styles.logo}>Nadia</h4>
          </Link>
          <button className={styles.navToggle} onClick={handleToggle}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        <nav>
          <div
            className={
              showLinks ? `${styles.links} ${styles.showLinks}` : styles.links
            }
          >
            {links.map((link) => {
              return (
                <Link key={link.id} href={link.url}>
                  <a>{link.text}</a>
                </Link>
              );
            })}
          </div>
        </nav>
      </div>
    </header>
  );
}
