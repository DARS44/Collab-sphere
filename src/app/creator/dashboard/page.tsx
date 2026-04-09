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
          <h1 className={styles.title}>Welcome back, Alex <span role="img" aria-label="wave">👋</span></h1>
          <p className={styles.subtitle}>Here's what's happening with your brand partnerships.</p>
        </header>

        <section className={styles.statsGrid}>
          <div className={styles.statCard}>
            <div className={styles.statLabel}>Monthly Views</div>
            <div className={styles.statValue}>1.2M</div>
            <div className={styles.statTrend}>+15% from last month</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statLabel}>Active Campaigns</div>
            <div className={styles.statValue}>3</div>
            <div className={styles.statTrend}>1 pending approval</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statLabel}>Earnings This Month</div>
            <div className={styles.statValue}>₹8,45,000</div>
            <div className={styles.statTrend}>+4% from last month</div>
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
            
            <div className={styles.card}>
              <div className={styles.campaignItem}>
                <div className={styles.campaignInfo}>
                  <h3>Summer Collection Launch</h3>
                  <div className={styles.campaignBrand}>Acme Corp</div>
                </div>
                <div className={`${styles.campaignStatus} ${styles.statusActive}`}>
                  In Progress
                </div>
              </div>

              <div className={styles.campaignItem}>
                <div className={styles.campaignInfo}>
                  <h3>Tech Review: ProX Headphones</h3>
                  <div className={styles.campaignBrand}>AudioTech</div>
                </div>
                <div className={`${styles.campaignStatus} ${styles.statusPending}`}>
                  Pending Review
                </div>
              </div>
              
              <div className={styles.campaignItem}>
                <div className={styles.campaignInfo}>
                  <h3>Fitness Challenge Sponsorship</h3>
                  <div className={styles.campaignBrand}>FitLife</div>
                </div>
                <div className={`${styles.campaignStatus} ${styles.statusActive}`}>
                  In Progress
                </div>
              </div>
            </div>
          </section>

          <section className={styles.suggestedBrands}>
            <h2 className={styles.sectionTitle}>Recommended Brands</h2>
            <div className={styles.card}>
              <div className={styles.brandMatch}>
                <div className={styles.brandLogo}>V</div>
                <div className={styles.brandInfo}>
                  <h4>Velvet Cosmetics</h4>
                  <div className={styles.brandTags}>Beauty • Lifestyle</div>
                </div>
              </div>
              <div className={styles.brandMatch}>
                <div className={styles.brandLogo}>S</div>
                <div className={styles.brandInfo}>
                  <h4>Stride Apparel</h4>
                  <div className={styles.brandTags}>Fitness • Fashion</div>
                </div>
              </div>
              <div className={styles.brandMatch}>
                <div className={styles.brandLogo}>E</div>
                <div className={styles.brandInfo}>
                  <h4>EcoHome</h4>
                  <div className={styles.brandTags}>Home • Sustainability</div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
