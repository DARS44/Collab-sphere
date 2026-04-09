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
            <div className={styles.statValue}>5.4M</div>
            <div className={styles.statTrend}>Across 3 active campaigns</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statLabel}>Active Campaigns</div>
            <div className={styles.statValue}>3</div>
            <div className={styles.statTrend}>1 recruiting</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statLabel}>ROI Estimate</div>
            <div className={styles.statValue}>240%</div>
            <div className={styles.statTrend}>+12% from last quarter</div>
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
            
            <div className={styles.card}>
              <div className={styles.campaignItem}>
                <div className={styles.campaignInfo}>
                  <h3>Summer Collection Launch</h3>
                  <div className={styles.campaignCreator}>Partnering with Alex Doe</div>
                </div>
                <div className={`${styles.campaignStatus} ${styles.statusActive}`}>
                  In Progress
                </div>
              </div>

              <div className={styles.campaignItem}>
                <div className={styles.campaignInfo}>
                  <h3>Holiday Tech Bundle</h3>
                  <div className={styles.campaignCreator}>2/5 Creators Hired</div>
                </div>
                <div className={`${styles.campaignStatus} ${styles.statusRecruiting}`}>
                  Recruiting
                </div>
              </div>
              
              <div className={styles.campaignItem}>
                <div className={styles.campaignInfo}>
                  <h3>Fitness App Promo</h3>
                  <div className={styles.campaignCreator}>Partnering with Sarah Fit</div>
                </div>
                <div className={`${styles.campaignStatus} ${styles.statusActive}`}>
                  In Progress
                </div>
              </div>
            </div>
          </section>

          <section className={styles.suggestedBrands}>
            <h2 className={styles.sectionTitle}>Top Creators for You</h2>
            <div className={styles.card}>
              <div className={styles.creatorMatch}>
                <div className={styles.creatorOverview}>
                  <div className={styles.creatorAvatar}>SJ</div>
                  <div className={styles.creatorInfo}>
                    <h4>Sam Johnson</h4>
                    <div className={styles.creatorTags}>Tech • 1.2M Subs</div>
                  </div>
                </div>
                <div className={styles.matchScore}>98% Match</div>
              </div>
              
              <div className={styles.creatorMatch}>
                <div className={styles.creatorOverview}>
                  <div className={styles.creatorAvatar}>ML</div>
                  <div className={styles.creatorInfo}>
                    <h4>Mia Lifestyle</h4>
                    <div className={styles.creatorTags}>Fashion • 500k Subs</div>
                  </div>
                </div>
                <div className={styles.matchScore}>94% Match</div>
              </div>
              
              <div className={styles.creatorMatch}>
                <div className={styles.creatorOverview}>
                  <div className={styles.creatorAvatar}>RJ</div>
                  <div className={styles.creatorInfo}>
                    <h4>Ryan Journeys</h4>
                    <div className={styles.creatorTags}>Travel • 800k Subs</div>
                  </div>
                </div>
                <div className={styles.matchScore}>89% Match</div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
