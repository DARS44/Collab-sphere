"use client";

import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import styles from "../login/page.module.css";
import { Suspense } from "react";

function SignupForm() {
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
            Join as a {isCreator ? "Creator" : "Brand"}
          </h1>
          <p className={styles.subtitle}>
            {isCreator 
              ? "Create an account to start landing brand deals." 
              : "Create an account to discover and hire top talent."}
          </p>
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <label className={styles.label} htmlFor="name">
              {isCreator ? "Full Name" : "Company Name"}
            </label>
            <input 
              className={styles.input} 
              id="name" 
              type="text" 
              placeholder={isCreator ? "Alex Doe" : "Acme Corp"} 
              required 
            />
          </div>

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
              placeholder="Create a strong password" 
              required 
            />
          </div>

          <button className={`btn btn-primary ${styles.submitBtn}`} type="submit">
            Create Account
          </button>
        </form>

        <div className={styles.footer}>
          Already have an account?{" "}
          <Link href={`/login?role=${role}`} className={styles.footerLink}>
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function SignupPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SignupForm />
    </Suspense>
  );
}
