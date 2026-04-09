import Link from "next/link";
import styles from "./page.module.css";

export default function MessagesPage() {
  return (
    <div className={styles.layout}>
      <nav className={styles.nav}>
        <Link href="/" className={styles.logo}>Aura.</Link>
        <div className={styles.navLinks}>
          <Link href="/creator/dashboard" className={styles.navLink}>Dashboard</Link>
          <Link href="/messages" className={`${styles.navLink} ${styles.navLinkActive}`}>Messages</Link>
        </div>
      </nav>

      <main className={styles.main}>
        <aside className={styles.sidebar}>
          <div className={styles.sidebarHeader}>
            <input type="text" placeholder="Search conversations..." className={styles.search} />
          </div>
          <div className={styles.conversationList}>
            <div className={`${styles.conversation} ${styles.conversationActive}`}>
              <div className={styles.avatar}>A</div>
              <div className={styles.conversationInfo}>
                <div className={styles.conversationHeader}>
                  <span className={styles.name}>Acme Corp</span>
                  <span className={styles.time}>2m</span>
                </div>
                <div className={styles.preview}>Can you review the brief?</div>
              </div>
            </div>
            
            <div className={styles.conversation}>
              <div className={styles.avatar} style={{background: '#3b82f6'}}>F</div>
              <div className={styles.conversationInfo}>
                <div className={styles.conversationHeader}>
                  <span className={styles.name}>FitLife</span>
                  <span className={styles.time}>1h</span>
                </div>
                <div className={styles.preview}>The post looks amazing! Thanks.</div>
              </div>
            </div>
          </div>
        </aside>

        <section className={styles.chatArea}>
          <div className={styles.chatHeader}>
            <div>
              <h2 className={styles.chatTitle}>Acme Corp</h2>
              <div className={styles.chatSubtitle}>Summer Collection Launch</div>
            </div>
            <button className="btn btn-secondary" style={{ padding: '0.5rem 1rem' }}>View Brief</button>
          </div>

          <div className={styles.messages}>
            <div className={`${styles.message} ${styles.messageReceived}`}>
              Hi Alex! We loved your recent videos and think you'd be a perfect fit for our upcoming Summer Collection launch.
            </div>
            
            <div className={`${styles.message} ${styles.messageOffer}`}>
              <div className={styles.offerTitle}>Initial Offer Draft</div>
              <div className={styles.offerDetails}>
                <div className={styles.offerRow}>
                  <span style={{ color: 'var(--muted)' }}>Deliverables</span>
                  <span>1x TikTok, 1x IG Reel</span>
                </div>
                <div className={styles.offerRow}>
                  <span style={{ color: 'var(--muted)' }}>Timeline</span>
                  <span>June 15 - June 30</span>
                </div>
                <div className={styles.offerRow}>
                  <span style={{ color: 'var(--muted)' }}>Budget</span>
                  <span style={{ fontWeight: 'bold' }}>₹2,50,000</span>
                </div>
              </div>
              <button className="btn btn-primary" style={{ width: '100%', padding: '0.5rem' }}>Review Details</button>
            </div>

            <div className={`${styles.message} ${styles.messageSent}`}>
              Thanks for reaching out! I'd love to learn more and review the brief.
            </div>
            
            <div className={`${styles.message} ${styles.messageReceived}`}>
              Awesome. Just sent over the brief details. Let me know if you have any questions or want to jump on a quick call!
            </div>
          </div>

          <div className={styles.inputArea}>
            <div className={styles.inputWrapper}>
              <input type="text" placeholder="Type a message..." className={styles.input} />
              <button className={styles.sendBtn}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
