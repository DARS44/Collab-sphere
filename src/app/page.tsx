import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.glow} />
      <div className={styles.glowSecondary} />
      
      <nav className={styles.nav}>
        <div className={styles.logo}>Aura.</div>
        <div className={styles.navLinks}>
          <Link href="/login?role=creator">For Creators</Link>
          <Link href="/login?role=brand">For Brands</Link>
          <Link href="/login" className="btn btn-secondary">Log In</Link>
        </div>
      </nav>

      <main className={styles.hero}>
        <div className={styles.badge}>
          ✨ The new standard for collaborations
        </div>
        
        <h1 className={styles.title}>
          Where <span className="text-gradient">brands</span> meet their perfect <span className="text-gradient">creators</span>
        </h1>
        
        <p className={styles.description}>
          A premium, real-time workspace to discover talent, negotiate campaigns, and finalize deals seamlessly. Build your next viral moment together.
        </p>

        <div className={styles.ctaGroup}>
          <Link href="/login?role=creator" className="btn btn-primary">
            I'm a Creator
          </Link>
          <Link href="/login?role=brand" className="btn btn-secondary">
            I'm a Brand
          </Link>
        </div>
      </main>
    </div>
  );
}
