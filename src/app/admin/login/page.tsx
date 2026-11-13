"use client";

import { Suspense, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import {
  Lock,
  User,
  Eye,
  EyeOff,
  ArrowRight,
  ShieldAlert,
  Loader2,
  Sparkles,
  ArrowLeft,
} from "lucide-react";

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const from = searchParams.get("from") || "/admin/dashboard";

  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ identifier, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Authentication failed.");
      }

      // Successful login
      router.push(from);
      router.refresh();
    } catch (err: unknown) {
      const message =
        err instanceof Error ? err.message : "Failed to log in. Please try again.";
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  const handleFillDemo = () => {
    setIdentifier("admin");
    setPassword("Admin2026!");
    setError(null);
  };

  return (
    <div className="relative z-10 w-full max-w-md rounded-2xl border border-white/10 bg-zinc-900/60 p-8 shadow-2xl backdrop-blur-2xl">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center h-14 w-14 rounded-2xl bg-gradient-to-br from-violet-500/20 to-indigo-500/10 border border-violet-500/30 text-violet-400 mb-4 shadow-lg shadow-violet-500/10">
          <Lock size={26} />
        </div>
        <h1 className="text-2xl font-bold tracking-tight text-white">
          Admin Portal
        </h1>
        <p className="text-sm text-zinc-400 mt-1">
          Authenticate to manage inquiries & portfolio content
        </p>
      </div>

      {/* Error Alert */}
      {error && (
        <div className="mb-6 flex items-start gap-3 rounded-xl border border-rose-500/30 bg-rose-500/10 p-4 text-sm text-rose-300 animate-fadeIn">
          <ShieldAlert size={18} className="shrink-0 mt-0.5" />
          <div className="flex-1">{error}</div>
        </div>
      )}

      {/* Login Form */}
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Identifier Input */}
        <div>
          <label className="block text-xs font-medium uppercase tracking-wider text-zinc-400 mb-2">
            Username or Email
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-zinc-500">
              <User size={18} />
            </div>
            <input
              type="text"
              required
              value={identifier}
              onChange={(e) => setIdentifier(e.target.value)}
              placeholder="admin or admin@portfolio.dev"
              className="w-full rounded-xl border border-white/10 bg-black/40 pl-10 pr-4 py-3 text-sm text-white placeholder-zinc-500 focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500 transition"
            />
          </div>
        </div>

        {/* Password Input */}
        <div>
          <label className="block text-xs font-medium uppercase tracking-wider text-zinc-400 mb-2">
            Password
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-zinc-500">
              <Lock size={18} />
            </div>
            <input
              type={showPassword ? "text" : "password"}
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••••••"
              className="w-full rounded-xl border border-white/10 bg-black/40 pl-10 pr-11 py-3 text-sm text-white placeholder-zinc-500 focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500 transition"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-zinc-400 hover:text-white transition"
              tabIndex={-1}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-600/25 transition duration-200 hover:from-violet-500 hover:to-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
        >
          {loading ? (
            <>
              <Loader2 size={18} className="animate-spin" />
              <span>Authenticating...</span>
            </>
          ) : (
            <>
              <span>Sign In to Dashboard</span>
              <ArrowRight size={16} />
            </>
          )}
        </button>
      </form>

      {/* Quick Demo Credentials Helper */}
      <div className="mt-6 pt-5 border-t border-white/[0.08] text-center">
        <button
          type="button"
          onClick={handleFillDemo}
          className="inline-flex items-center gap-1.5 text-xs text-violet-400 hover:text-violet-300 font-mono transition bg-violet-500/10 hover:bg-violet-500/15 border border-violet-500/20 px-3 py-1.5 rounded-lg cursor-pointer"
        >
          <Sparkles size={14} />
          Auto-Fill Admin Credentials
        </button>
      </div>
    </div>
  );
}

export default function AdminLoginPage() {
  return (
    <div className="relative min-h-screen bg-[#08080c] text-white flex flex-col justify-center items-center px-4 py-12 overflow-hidden selection:bg-violet-500/30">
      {/* Background glow effects */}
      <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-violet-600/15 blur-[130px] pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-indigo-600/15 blur-[130px] pointer-events-none" />
      <div className="grid-background absolute inset-0 opacity-40 pointer-events-none" />

      {/* Back to Site link */}
      <div className="relative z-10 w-full max-w-md mb-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors"
        >
          <ArrowLeft size={16} />
          Back to Portfolio
        </Link>
      </div>

      <Suspense
        fallback={
          <div className="relative z-10 w-full max-w-md rounded-2xl border border-white/10 bg-zinc-900/60 p-8 text-center text-zinc-400">
            <Loader2 className="animate-spin mx-auto mb-2 text-violet-400" size={24} />
            Loading portal...
          </div>
        }
      >
        <LoginForm />
      </Suspense>

      {/* Footer Info */}
      <div className="relative z-10 mt-8 text-center text-xs text-zinc-500">
        Protected with HTTP-only JWT & Neon PostgreSQL encryption
      </div>
    </div>
  );
}
