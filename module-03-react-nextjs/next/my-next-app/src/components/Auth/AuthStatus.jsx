"use client";

import { useState } from "react";
import Link from "next/link";
import useSWR from "swr";
import { useRouter } from "next/navigation";
import { useSWRConfig } from "swr";

async function fetchCurrentUser(url) {
  const response = await fetch(url, { cache: "no-store" });
  const result = await response.json().catch(() => null);

  if (!response.ok) {
    const error = new Error(
      result?.message || "Unable to check your session."
    );
    error.status = response.status;
    throw error;
  }

  return result;
}

export default function AuthStatus() {
  const router = useRouter();
  const { mutate } = useSWRConfig();
  const [signingOut, setSigningOut] = useState(false);
  const [logoutError, setLogoutError] = useState("");

  const {
    data,
    error,
    isLoading,
    mutate: mutateUser,
  } = useSWR("/api/auth/me", fetchCurrentUser, {
    shouldRetryOnError: false,
    revalidateOnFocus: true,
  });

  async function handleSignOut() {
    setSigningOut(true);
    setLogoutError("");

    try {
      const response = await fetch("/api/auth/logout", {
        method: "POST",
      });

      const result = await response.json().catch(() => null);

      if (!response.ok) {
        throw new Error(result?.message || "Unable to sign out.");
      }

      await mutate("/api/auth/me", null, { revalidate: false });
      await mutateUser(undefined, { revalidate: false });

      router.replace("/signin");
      router.refresh();
    } catch (err) {
      setLogoutError(
        err instanceof Error ? err.message : "Unable to sign out."
      );
    } finally {
      setSigningOut(false);
    }
  }

  if (isLoading) {
    return (
      <span className="text-sm text-slate-400 animate-pulse">
        Checking session...
      </span>
    );
  }

  if (error?.status === 401 || (!error && !data?.user)) {
    return (
      <div className="flex flex-wrap items-center gap-3">
        <Link
          href="/signin"
          className="text-sm font-medium text-slate-200 transition duration-200 hover:text-[#39ff88]"
        >
          Sign in
        </Link>
        <Link
          href="/signup"
          className="rounded-lg bg-[#39ff88] px-4 py-2 text-sm font-bold text-[#0b132b] shadow-sm shadow-[#39ff88]/10 transition duration-200 hover:bg-[#24e878] hover:shadow-md hover:shadow-[#39ff88]/15"
        >
          Sign up
        </Link>
      </div>
    );
  }

  if (error) {
    return (
      <button
        type="button"
        onClick={() => mutateUser()}
        className="text-sm font-medium text-[#39ff88] transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#39ff88] rounded-md"
      >
        Retry session check
      </button>
    );
  }

  const user = data?.user;

  if (!user) return null;

  return (
    <div className="flex flex-wrap items-center gap-3">
      <span className="text-sm text-slate-300">
        Hi, <span className="font-semibold text-white">{user.name}</span>
        {user.role === "admin" && (
          <span className="ml-2 inline-block rounded-full border border-[#39ff88]/30 bg-[#39ff88]/10 px-2 py-1 text-xs font-semibold text-[#39ff88]">
            Admin
          </span>
        )}
      </span>
      {user.role === "admin" && (
        <Link
          href="/admin"
          className="rounded-lg border border-[#39ff88]/30 bg-[#39ff88]/5 px-3 py-2 text-sm font-medium text-[#39ff88] transition duration-200 hover:border-[#39ff88]/60 hover:bg-[#39ff88]/10"
        >
          Dashboard
        </Link>
      )}

      <button
        type="button"
        onClick={handleSignOut}
        disabled={signingOut}
        className="rounded-lg border border-white/15 bg-white/[0.03] px-3 py-2 text-sm font-medium text-slate-200 transition duration-200 hover:border-[#39ff88]/50 hover:bg-[#39ff88]/5 hover:text-[#39ff88] disabled:cursor-not-allowed disabled:opacity-50"
      >
        {signingOut ? "Signing out..." : "Sign out"}
      </button>

      {logoutError && (
        <p role="alert" className="w-full rounded-lg border border-red-400/20 bg-red-400/5 px-3 py-2 text-xs text-red-300">
          {logoutError}
        </p>
      )}
    </div>
  );
}