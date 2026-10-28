"use client";

import { useState } from "react";
import Link from "next/link";

export default function SignUpForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setError("");
    setSuccess(false);

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (password.length < 8) {
      setError("Password must contain at least 8 characters.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          password,
        }),
      });

      const result = await response.json().catch(() => null);

      if (!response.ok) {
        throw new Error(
          result?.message || result?.error || "Unable to create your account."
        );
      }

      setSuccess(true);
      setName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }

  const inputClass =
    "w-full rounded-xl border border-white/10 bg-[#0b132b] px-4 py-3.5 text-white placeholder:text-slate-500 outline-none transition duration-200 focus:border-[#39ff88]/70 focus:ring-2 focus:ring-[#39ff88]/15";

  if (success) {
    return (
      <div
        role="status"
        className="rounded-2xl border border-[#39ff88]/20 bg-[#39ff88]/5 p-5 text-center sm:p-6"
      >
        <h3 className="text-xl font-extrabold text-[#39ff88]">
          Account created!
        </h3>
        <p className="mt-3 leading-6 text-slate-300">
          Your registration was successful. You can now sign in to your account.
        </p>
        <Link
          href="/signin"
          className="mt-6 inline-block rounded-xl bg-[#39ff88] px-6 py-3 font-bold text-[#0b132b] transition duration-200 hover:bg-[#24e978] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#39ff88] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b132b]"
        >
          Go to sign in
        </Link>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="mb-2 block text-sm font-semibold text-slate-200">
          Full name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          required
          maxLength={100}
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Your full name"
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="email" className="mb-2 block text-sm font-semibold text-slate-200">
          Email address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          maxLength={254}
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="you@example.com"
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="password" className="mb-2 block text-sm font-semibold text-slate-200">
          Password
        </label>
        <input
          id="password"
          name="password"
          type={showPassword ? "text" : "password"}
          autoComplete="new-password"
          required
          minLength={8}
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="At least 8 characters"
          className={inputClass}
        />
      </div>

      <div>
        <label
          htmlFor="confirmPassword"
          className="mb-2 block text-sm font-semibold text-slate-200"
        >
          Confirm password
        </label>
        <input
          id="confirmPassword"
          name="confirmPassword"
          type={showPassword ? "text" : "password"}
          autoComplete="new-password"
          required
          minLength={8}
          value={confirmPassword}
          onChange={(event) => setConfirmPassword(event.target.value)}
          placeholder="Enter your password again"
          className={inputClass}
        />
      </div>

      <label className="flex cursor-pointer items-center gap-3 text-sm text-slate-400 transition-colors hover:text-white">
        <input
          type="checkbox"
          checked={showPassword}
          onChange={(event) => setShowPassword(event.target.checked)}
          className="size-4 accent-[#39ff88]"
        />
        Show passwords
      </label>

      {error && (
        <p
          role="alert"
          className="rounded-xl border border-red-400/20 bg-red-400/10 px-4 py-3 text-sm leading-6 text-red-300"
        >
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-xl bg-[#39ff88] px-4 py-3.5 font-extrabold text-[#0b132b] shadow-lg shadow-[#39ff88]/10 transition duration-200 hover:bg-[#24e978] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#39ff88] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b132b] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loading ? "Creating your account..." : "Create account"}
      </button>
    </form>
  );
}