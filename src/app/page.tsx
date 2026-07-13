import Link from "next/link";
import Image from "next/image";
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

      <main className={styles.mainContent}>
        <div className={styles.heroText}>
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
            <Link href="/login?role=creator" className="btn btn-primary" style={{ padding: '0.8rem 2rem', fontSize: '1.1rem' }}>
              I'm a Creator
            </Link>
            <Link href="/login?role=brand" className="btn btn-secondary" style={{ padding: '0.8rem 2rem', fontSize: '1.1rem' }}>
              I'm a Brand
            </Link>
          </div>
        </div>

        <div className={styles.heroImages}>
          <div className={styles.imageWrapper1}>
            <Image 
              src="/images/creator_hero.png" 
              alt="Creator working" 
              width={400} 
              height={500} 
              className={styles.heroImg}
              priority
            />
          </div>
          <div className={styles.imageWrapper2}>
            <Image 
              src="/images/brand_hero.png" 
              alt="Brand campaign" 
              width={380} 
              height={450} 
              className={styles.heroImg}
              priority
            />
            <div className={styles.floatingStats}>
              <div className={styles.statDot} />
              <span>Active Campaign • Aura Collabs</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
