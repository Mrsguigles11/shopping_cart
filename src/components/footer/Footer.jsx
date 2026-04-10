import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footer_links}>
          <div>
            <h2 className={styles.shop_name}>The Odin Shop</h2>
            <i className={styles.italic}>
              Your one stop shop for whatever you need
            </i>
          </div>
          <div>
            <h2 className={styles.heading}>Company</h2>
            <p className={styles.secondary_text}>About Us</p>
            <p className={styles.secondary_text}>Careers</p>
            <p className={styles.secondary_text}>Blog</p>
          </div>
          <div>
            <h2 className={styles.heading}>Support</h2>
            <p className={styles.secondary_text}>Help Centre</p>
            <p className={styles.secondary_text}>Contact Us</p>
            <p className={styles.secondary_text}>Returns</p>
          </div>
          <div>
            <h2 className={styles.heading}>Legal</h2>
            <p className={styles.secondary_text}>Privacy Policy</p>
            <p className={styles.secondary_text}>Terms of Use</p>
            <p className={styles.secondary_text}>Terms and Conditions</p>
          </div>
      </div>
      <div className={styles.copyright}>@The Odin Shop. All rights reserved</div>
    </div>
  );
}
