import Link from "next/link";
import styles from "./page.module.css";

export default function CreatorDashboard() {
  return (
    <div className={styles.layout}>
      <nav className={styles.nav}>
        <Link href="/" className={styles.logo}>Aura.</Link>
        <div className={styles.navLinks}>
          <Link href="/creator/dashboard" className={`${styles.navLink} ${styles.navLinkActive}`}>Dashboard</Link>
          <Link href="/messages" className={styles.navLink}>Messages</Link>
          <Link href="#" className={styles.navLink}>Portfolio</Link>
        </div>
        <div className={styles.profile}>
          <div className={styles.avatar}>A</div>
        </div>
      </nav>

      <main className={styles.main}>
        <header className={styles.header}>
          <h1 className={styles.title}>Welcome back, Creator <span role="img" aria-label="wave">👋</span></h1>
          <p className={styles.subtitle}>Here's what's happening with your brand partnerships.</p>
        </header>

        <section className={styles.statsGrid}>
          <div className={styles.statCard}>
            <div className={styles.statLabel}>Monthly Views</div>
            <div className={styles.statValue}>0</div>
            <div className={styles.statTrend}>No data yet</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statLabel}>Active Campaigns</div>
            <div className={styles.statValue}>0</div>
            <div className={styles.statTrend}>Join a campaign to start</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statLabel}>Earnings This Month</div>
            <div className={styles.statValue}>₹0</div>
            <div className={styles.statTrend}>No earnings yet</div>
          </div>
        </section>

        <div className={styles.contentGrid}>
          <section className={styles.campaignsSection}>
            <div className={styles.sectionTitle}>
              <h2>Active Campaigns</h2>
              <Link href="#" className="btn btn-secondary" style={{ padding: '0.4rem 1rem', fontSize: '0.9rem' }}>
                View All
              </Link>
            </div>
            
            <div className={styles.card} style={{ textAlign: "center", padding: "3rem 1rem", color: "var(--muted)" }}>
              No active campaigns.
            </div>
          </section>

          <section className={styles.suggestedBrands}>
            <h2 className={styles.sectionTitle}>Recommended Brands</h2>
            <div className={styles.card} style={{ textAlign: "center", padding: "3rem 1rem", color: "var(--muted)" }}>
              No recommended brands yet.
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
