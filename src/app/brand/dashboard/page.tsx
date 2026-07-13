import Link from "next/link";
import styles from "./page.module.css";

export default function BrandDashboard() {
  return (
    <div className={styles.layout}>
      <nav className={styles.nav}>
        <Link href="/" className={styles.logo}>Aura.</Link>
        <div className={styles.navLinks}>
          <Link href="/brand/dashboard" className={`${styles.navLink} ${styles.navLinkActive}`}>Campaigns</Link>
          <Link href="/messages" className={styles.navLink}>Messages</Link>
          <Link href="#" className={styles.navLink}>Discover</Link>
        </div>
        <div className={styles.profile}>
          <div className={styles.avatar}>B</div>
        </div>
      </nav>

      <main className={styles.main}>
        <header className={styles.header}>
          <div>
            <h1 className={styles.title}>Brand Area <span role="img" aria-label="sparkles">✨</span></h1>
            <p className={styles.subtitle}>Manage your campaigns and discover new talent.</p>
          </div>
          <Link href="#" className="btn btn-primary">
            + New Campaign
          </Link>
        </header>

        <section className={styles.statsGrid}>
          <div className={styles.statCard}>
            <div className={styles.statLabel}>Total Reach</div>
            <div className={styles.statValue}>0</div>
            <div className={styles.statTrend}>No active campaigns</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statLabel}>Active Campaigns</div>
            <div className={styles.statValue}>0</div>
            <div className={styles.statTrend}>Create one to start</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statLabel}>ROI Estimate</div>
            <div className={styles.statValue}>0%</div>
            <div className={styles.statTrend}>No data available</div>
          </div>
        </section>

        <div className={styles.contentGrid}>
          <section className={styles.campaignsSection}>
            <div className={styles.sectionTitle}>
              <h2>Your Campaigns</h2>
              <Link href="#" className="btn btn-secondary" style={{ padding: '0.4rem 1rem', fontSize: '0.9rem' }}>
                View All
              </Link>
            </div>
            
            <div className={styles.card} style={{ textAlign: "center", padding: "3rem 1rem", color: "var(--muted)" }}>
              No active campaigns yet.
            </div>
          </section>

          <section className={styles.suggestedBrands}>
            <h2 className={styles.sectionTitle}>Top Creators for You</h2>
            <div className={styles.card} style={{ textAlign: "center", padding: "3rem 1rem", color: "var(--muted)" }}>
              No top creators matched yet.
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
