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
          <div className={styles.conversationList} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', color: 'var(--muted)'}}>
            No recent conversations.
          </div>
        </aside>

        <section className={styles.chatArea}>
          <div className={styles.chatHeader}>
            <div>
              <h2 className={styles.chatTitle} style={{ color: 'var(--muted)' }}>Select a conversation</h2>
            </div>
          </div>

          <div className={styles.messages} style={{ justifyContent: 'center', alignItems: 'center', color: 'var(--muted)' }}>
            Start collaborating by sending a message!
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
