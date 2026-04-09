"use client";

import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import styles from "./page.module.css";
import { Suspense } from "react";

function LoginForm() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const role = searchParams.get("role") || "creator";
  const isCreator = role === "creator";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isCreator) {
      router.push("/creator/dashboard");
    } else {
      router.push("/brand/dashboard");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.glow} />

      <Link href="/" className={styles.backLink}>
        ← Back to Home
      </Link>

      <div className={styles.card}>
        <div className={styles.header}>
          <h1 className={styles.title}>
            {isCreator ? "Creator Access" : "Brand Access"}
          </h1>
          <p className={styles.subtitle}>
            {isCreator
              ? "Sign in to manage your portfolio and collaborations."
              : "Sign in to discover talent and launch campaigns."}
          </p>
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <label className={styles.label} htmlFor="email">Email address</label>
            <input
              className={styles.input}
              id="email"
              type="email"
              placeholder="you@example.com"
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label} htmlFor="password">Password</label>
            <input
              className={styles.input}
              id="password"
              type="password"
              placeholder="••••••••"
              required
            />
          </div>

          <button className={`btn btn-primary ${styles.submitBtn}`} type="submit">
            Sign In
          </button>
        </form>

        <div className={styles.footer}>
          Don't have an account?{" "}
          <Link href={`/signup?role=${role}`} className={styles.footerLink}>
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LoginForm />
    </Suspense>
  );
}
