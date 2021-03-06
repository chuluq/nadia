import Image from "next/image";
import Layout from "@/components/Layout";
import Booking from "@/components/Booking";
import menuCover from "@/assets/menu-cover.webp";
import styles from "@/styles/Menu.module.css";
import { API_URL } from "@/config/index";

export default function MenuPage({ categories, orders }) {
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
          {categories?.data?.map((category) => {
            return (
              <div key={category.id} className={styles.menu}>
                <div className={styles.menuTitle}>
                  <h3>{category.attributes.name}</h3>
                </div>
                <div className={styles.menuList}>
                  {category.attributes.menus.data.map((menu) => {
                    return (
                      <div key={menu.id} className={styles.menuItem}>
                        <div className={styles.menuItemDetails}>
                          <p className={styles.menuName}>
                            {menu.attributes.name}
                          </p>
                          <p className={styles.menuDesc}>
                            {menu.attributes.description}
                          </p>
                        </div>
                        <div className={styles.menuPrice}>
                          {new Intl.NumberFormat("en-US", {
                            style: "currency",
                            currency: "USD",
                          }).format(menu.attributes.price)}
                        </div>
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
          {orders?.data?.map((order) => {
            return (
              <div key={order.id} className={styles.orderMenu}>
                <div className={styles.orderMenuImage}>
                  <Image
                    src={order.attributes.image.data.attributes.url}
                    alt={order.attributes.name}
                    width={350}
                    height={375}
                    loading="lazy"
                  />
                </div>
                <div className={styles.orderMenuDetails}>
                  <p className={styles.orderMenuName}>
                    {order.attributes.name}
                  </p>
                  <p className={styles.orderMenuPrice}>
                    ${order.attributes.price}
                  </p>
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

export async function getStaticProps() {
  const categoryRes = await fetch(`${API_URL}/api/categories?populate=*`);
  const categories = await categoryRes.json();

  const orderRes = await fetch(`${API_URL}/api/orders?populate=*`);
  const orders = await orderRes.json();

  return {
    props: { categories, orders },
    revalidate: 1,
  };
}
