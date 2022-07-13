import Image from "next/image";
import Layout from "@/components/Layout";
import menuCover from "@/assets/menu-cover.webp";
import { menus } from "@/constants/menus";
import { orders } from "@/constants/order";
import styles from "@/styles/Menu.module.css";
import Booking from "@/components/Booking";

export default function MenuPage() {
  return (
    <Layout title="Nadia Cafe | Menus">
      <section className={styles.hero}>
        <div className={styles.heroTitle}>
          <h1>Menu</h1>
        </div>
        <div className={styles.heroCaption}>
          <p>
            We aim to offer something on our menu for every palette and every
            occasion. Take a look at the tasty treats our chefs can rustle up to
            cure your hunger. Our entire menu is available both for eat-in and
            take away.
          </p>
        </div>
        <div className={styles.heroCover}>
          <Image
            src={menuCover}
            alt="menu-cover"
            layout="responsive"
            priority
          />
        </div>
      </section>

      <section className={styles.menus}>
        <div className={styles.menuDetails}>
          {menus.map((menu) => {
            return (
              <div key={menu.id} className={styles.menu}>
                <div className={styles.menuTitle}>
                  <h3>{menu.name}</h3>
                </div>
                <div className={styles.menuList}>
                  {menu.subMenu.map((sub) => {
                    return (
                      <div key={sub.id} className={styles.menuItem}>
                        <div className={styles.menuItemDetails}>
                          <p className={styles.menuName}>{sub.name}</p>
                          <p className={styles.menuDesc}>{sub.desc}</p>
                        </div>
                        <div className={styles.menuPrice}>{sub.price}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className={styles.order}>
        <div className={styles.orderTitle}>
          <h3>Ours to go</h3>
          <h5>Order on the go</h5>
        </div>
        <div className={styles.orderMenus}>
          {orders.map((order) => {
            return (
              <div key={order.id} className={styles.orderMenu}>
                <div className={styles.orderMenuImage}>
                  <Image src={order.pic} alt={order.name} />
                </div>
                <div className={styles.orderMenuDetails}>
                  <p className={styles.orderMenuName}>{order.name}</p>
                  <p className={styles.orderMenuPrice}>{order.price}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <Booking />
    </Layout>
  );
}
