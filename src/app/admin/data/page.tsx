import prisma from "@/lib/prisma";
import Link from "next/link";
import styles from "../../login/page.module.css";

export default async function AdminSpreadsheetView() {
  const users = await prisma.user.findMany({
    orderBy: { createdAt: 'desc' }
  });

  return (
    <div className={styles.container} style={{ alignItems: 'flex-start', paddingTop: '4rem' }}>
      <div className={styles.glow} />
      
      <div style={{ width: '100%', maxWidth: '1000px', margin: '0 auto', zIndex: 1, position: 'relative' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
          <div>
            <h1 className={styles.title} style={{ fontSize: '2rem' }}>Internal Spreadsheet View</h1>
            <p className={styles.subtitle}>All user registrations are automatically added here.</p>
          </div>
          <Link href="/" className="btn btn-secondary">
            Back to Home
          </Link>
        </div>

        <div style={{ 
          background: 'rgba(255, 255, 255, 0.03)', 
          backdropFilter: 'blur(10px)', 
          borderRadius: '12px', 
          border: '1px solid rgba(255, 255, 255, 0.1)',
          overflow: 'hidden'
        }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', color: '#fff' }}>
            <thead style={{ background: 'rgba(255, 255, 255, 0.05)', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
              <tr>
                <th style={{ padding: '1rem', fontWeight: 500, color: 'var(--muted)' }}>Name</th>
                <th style={{ padding: '1rem', fontWeight: 500, color: 'var(--muted)' }}>Email</th>
                <th style={{ padding: '1rem', fontWeight: 500, color: 'var(--muted)' }}>Role</th>
                <th style={{ padding: '1rem', fontWeight: 500, color: 'var(--muted)' }}>Registered Date</th>
              </tr>
            </thead>
            <tbody>
              {users.length === 0 ? (
                <tr>
                  <td colSpan={4} style={{ padding: '2rem', textAlign: 'center', color: 'var(--muted)' }}>
                    No users have signed up yet. Data will appear here automatically!
                  </td>
                </tr>
              ) : (
                users.map((user) => (
                  <tr key={user.id} style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
                    <td style={{ padding: '1rem' }}>{user.name}</td>
                    <td style={{ padding: '1rem' }}>{user.email}</td>
                    <td style={{ padding: '1rem', textTransform: 'capitalize' }}>
                      <span style={{ 
                        background: user.role === 'creator' ? 'rgba(56, 189, 248, 0.1)' : 'rgba(167, 139, 250, 0.1)',
                        color: user.role === 'creator' ? '#38bdf8' : '#a78bfa',
                        padding: '0.25rem 0.75rem',
                        borderRadius: '999px',
                        fontSize: '0.875rem'
                      }}>
                        {user.role}
                      </span>
                    </td>
                    <td style={{ padding: '1rem', color: 'var(--muted)' }}>
                      {new Date(user.createdAt).toLocaleDateString()}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
