"use client";

import { useEffect, useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  Mail,
  FolderGit2,
  Database,
  LogOut,
  ExternalLink,
  Search,
  CheckCircle2,
  Clock,
  Trash2,
  Send,
  Plus,
  Edit2,
  RefreshCw,
  Sparkles,
  AlertCircle,
  Eye,
  X,
  Layers,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

interface Message {
  id: string;
  name: string;
  email: string;
  subject: string | null;
  message: string;
  read: boolean;
  createdAt: string;
}

interface Project {
  id: string;
  slug: string;
  number: string;
  title: string;
  description: string;
  stack: string[];
  githubUrl: string | null;
  liveUrl: string | null;
  featured: boolean;
  createdAt: string;
}

export default function AdminDashboardPage() {
  const router = useRouter();

  // Active Tab
  const [activeTab, setActiveTab] = useState<"messages" | "projects" | "system">("messages");

  // Data states
  const [messages, setMessages] = useState<Message[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [adminUser, setAdminUser] = useState<{ username: string; email: string } | null>(null);

  // Message filters
  const [messageFilter, setMessageFilter] = useState<"all" | "unread" | "read">("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedMessageId, setExpandedMessageId] = useState<string | null>(null);

  // Project Modal state
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [projectForm, setProjectForm] = useState({
    title: "",
    slug: "",
    number: "",
    description: "",
    stack: "",
    githubUrl: "",
    liveUrl: "",
    featured: false,
  });
  const [projectSaving, setProjectSaving] = useState(false);
  const [actionError, setActionError] = useState<string | null>(null);
  const [actionSuccess, setActionSuccess] = useState<string | null>(null);

  // Fetch initial data
  const loadData = async () => {
    try {
      setRefreshing(true);
      setActionError(null);

      // Verify session
      const meRes = await fetch("/api/auth/me");
      if (!meRes.ok) {
        router.push("/admin/login");
        return;
      }
      const meData = await meRes.json();
      setAdminUser(meData.user);

      // Fetch messages
      const msgRes = await fetch("/api/admin/messages");
      if (msgRes.ok) {
        const msgData = await msgRes.json();
        setMessages(msgData.messages || []);
      }

      // Fetch projects
      const projRes = await fetch("/api/admin/projects");
      if (projRes.ok) {
        const projData = await projRes.json();
        setProjects(projData.projects || []);
      }
    } catch (err) {
      console.error("Dashboard loading error:", err);
      setActionError("Failed to synchronize with server.");
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Logout handler
  const handleLogout = async () => {
    try {
      await fetch("/api/auth/logout", { method: "POST" });
      router.push("/admin/login");
      router.refresh();
    } catch (err) {
      console.error("Logout error:", err);
    }
  };

  // Message Actions
  const toggleMessageRead = async (id: string, currentStatus: boolean) => {
    try {
      const res = await fetch(`/api/admin/messages/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ read: !currentStatus }),
      });

      if (!res.ok) throw new Error("Could not update message.");

      setMessages((prev) =>
        prev.map((msg) => (msg.id === id ? { ...msg, read: !currentStatus } : msg))
      );
    } catch {
      setActionError("Failed to update message status.");
    }
  };

  const deleteMessage = async (id: string) => {
    if (!window.confirm("Are you sure you want to permanently delete this message?")) return;

    try {
      const res = await fetch(`/api/admin/messages/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Could not delete message.");

      setMessages((prev) => prev.filter((msg) => msg.id !== id));
      if (expandedMessageId === id) setExpandedMessageId(null);
      showSuccess("Message deleted successfully.");
    } catch {
      setActionError("Failed to delete message.");
    }
  };

  // Project Modal Actions
  const openNewProjectModal = () => {
    setEditingProject(null);
    const nextNumber = String(projects.length + 1).padStart(2, "0");
    setProjectForm({
      title: "",
      slug: "",
      number: nextNumber,
      description: "",
      stack: "Next.js, TypeScript, Tailwind CSS, PostgreSQL",
      githubUrl: "https://github.com/",
      liveUrl: "https://example.com",
      featured: true,
    });
    setIsProjectModalOpen(true);
    setActionError(null);
  };

  const openEditProjectModal = (proj: Project) => {
    setEditingProject(proj);
    setProjectForm({
      title: proj.title,
      slug: proj.slug,
      number: proj.number,
      description: proj.description,
      stack: proj.stack.join(", "),
      githubUrl: proj.githubUrl || "",
      liveUrl: proj.liveUrl || "",
      featured: proj.featured,
    });
    setIsProjectModalOpen(true);
    setActionError(null);
  };

  const saveProject = async (e: React.FormEvent) => {
    e.preventDefault();
    setProjectSaving(true);
    setActionError(null);

    try {
      const url = editingProject
        ? `/api/admin/projects/${editingProject.id}`
        : "/api/admin/projects";
      const method = editingProject ? "PUT" : "POST";

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(projectForm),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to save project.");

      if (editingProject) {
        setProjects((prev) =>
          prev.map((p) => (p.id === editingProject.id ? data.project : p))
        );
        showSuccess("Project updated successfully!");
      } else {
        setProjects((prev) => [...prev, data.project]);
        showSuccess("New project created and published!");
      }

      setIsProjectModalOpen(false);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Error saving project.";
      setActionError(msg);
    } finally {
      setProjectSaving(false);
    }
  };

  const deleteProject = async (id: string, title: string) => {
    if (!window.confirm(`Are you sure you want to delete "${title}"?`)) return;

    try {
      const res = await fetch(`/api/admin/projects/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Could not delete project.");

      setProjects((prev) => prev.filter((p) => p.id !== id));
      showSuccess(`Deleted "${title}".`);
    } catch {
      setActionError("Failed to delete project.");
    }
  };

  const showSuccess = (msg: string) => {
    setActionSuccess(msg);
    setTimeout(() => setActionSuccess(null), 4000);
  };

  // Filtered Messages
  const filteredMessages = useMemo(() => {
    return messages.filter((m) => {
      // Filter status
      if (messageFilter === "unread" && m.read) return false;
      if (messageFilter === "read" && !m.read) return false;

      // Filter search
      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase();
      return (
        m.name.toLowerCase().includes(q) ||
        m.email.toLowerCase().includes(q) ||
        (m.subject && m.subject.toLowerCase().includes(q)) ||
        m.message.toLowerCase().includes(q)
      );
    });
  }, [messages, messageFilter, searchQuery]);

  const unreadCount = messages.filter((m) => !m.read).length;

  return (
    <div className="min-h-screen bg-[#08080c] text-white">
      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-40 border-b border-white/[0.08] bg-[#0b0b12]/90 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
          {/* Logo & Portal Badge */}
          <div className="flex items-center gap-3">
            <Link href="/" className="text-lg font-bold tracking-tight">
              <span className="gradient-text">{"<"}</span>
              <span className="text-white">FullStack</span>
              <span className="text-violet-400 font-mono">.Dev</span>
              <span className="gradient-text">{" />"}</span>
            </Link>
            <span className="hidden sm:inline-flex items-center rounded-md bg-violet-500/15 border border-violet-500/30 px-2.5 py-0.5 text-xs font-mono font-medium text-violet-300">
              Admin Portal
            </span>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs text-emerald-300">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Neon PostgreSQL Connected</span>
            </div>

            <Link
              href="/"
              target="_blank"
              className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-zinc-300 hover:text-white hover:bg-white/[0.08] transition"
            >
              <ExternalLink size={14} />
              <span className="hidden sm:inline">View Site</span>
            </Link>

            <button
              onClick={handleLogout}
              className="inline-flex items-center gap-1.5 rounded-lg border border-rose-500/30 bg-rose-500/10 px-3 py-1.5 text-xs text-rose-300 hover:bg-rose-500/20 transition cursor-pointer"
            >
              <LogOut size={14} />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Flash Notifications */}
        {actionSuccess && (
          <div className="mb-6 flex items-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/15 px-4 py-3 text-sm text-emerald-200 animate-fadeIn">
            <CheckCircle2 size={18} />
            <span>{actionSuccess}</span>
          </div>
        )}
        {actionError && (
          <div className="mb-6 flex items-center gap-2 rounded-xl border border-rose-500/30 bg-rose-500/15 px-4 py-3 text-sm text-rose-200 animate-fadeIn">
            <AlertCircle size={18} />
            <span>{actionError}</span>
          </div>
        )}

        {/* Welcome & Stats Row */}
        <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Dashboard Control Panel
            </h1>
            <p className="text-sm text-zinc-400 mt-1">
              Signed in as{" "}
              <span className="font-mono text-violet-300 font-semibold">
                {adminUser?.username || "admin"}
              </span>{" "}
              ({adminUser?.email || "admin@portfolio.dev"})
            </p>
          </div>

          <button
            onClick={loadData}
            disabled={refreshing}
            className="inline-flex items-center gap-2 self-start rounded-xl border border-white/10 bg-white/[0.05] px-4 py-2 text-xs font-medium text-zinc-300 hover:text-white hover:bg-white/[0.1] transition cursor-pointer"
          >
            <RefreshCw size={14} className={refreshing ? "animate-spin text-violet-400" : ""} />
            <span>Refresh Data</span>
          </button>
        </div>

        {/* 4 Overview Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {/* Card 1: Total Messages */}
          <div className="rounded-2xl border border-white/10 bg-zinc-900/40 p-5 backdrop-blur-sm">
            <div className="flex items-center justify-between text-zinc-400 mb-3">
              <span className="text-xs uppercase tracking-wider font-medium">Inquiries</span>
              <div className="p-2 rounded-lg bg-violet-500/10 text-violet-400">
                <Mail size={18} />
              </div>
            </div>
            <div className="text-2xl font-bold text-white">{messages.length}</div>
            <div className="text-xs text-zinc-500 mt-1">Total visitor messages received</div>
          </div>

          {/* Card 2: Unread Messages */}
          <div className="rounded-2xl border border-white/10 bg-zinc-900/40 p-5 backdrop-blur-sm">
            <div className="flex items-center justify-between text-zinc-400 mb-3">
              <span className="text-xs uppercase tracking-wider font-medium">Unread</span>
              <div className={`p-2 rounded-lg ${unreadCount > 0 ? "bg-amber-500/10 text-amber-400" : "bg-emerald-500/10 text-emerald-400"}`}>
                <Clock size={18} />
              </div>
            </div>
            <div className={`text-2xl font-bold ${unreadCount > 0 ? "text-amber-400" : "text-white"}`}>
              {unreadCount}
            </div>
            <div className="text-xs text-zinc-500 mt-1">
              {unreadCount > 0 ? "Pending your review" : "All inquiries addressed"}
            </div>
          </div>

          {/* Card 3: Showcase Projects */}
          <div className="rounded-2xl border border-white/10 bg-zinc-900/40 p-5 backdrop-blur-sm">
            <div className="flex items-center justify-between text-zinc-400 mb-3">
              <span className="text-xs uppercase tracking-wider font-medium">Projects</span>
              <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400">
                <FolderGit2 size={18} />
              </div>
            </div>
            <div className="text-2xl font-bold text-white">{projects.length}</div>
            <div className="text-xs text-zinc-500 mt-1">Published portfolio showcases</div>
          </div>

          {/* Card 4: Neon DB Status */}
          <div className="rounded-2xl border border-white/10 bg-zinc-900/40 p-5 backdrop-blur-sm">
            <div className="flex items-center justify-between text-zinc-400 mb-3">
              <span className="text-xs uppercase tracking-wider font-medium">Database</span>
              <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
                <Database size={18} />
              </div>
            </div>
            <div className="text-base font-semibold text-emerald-300 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Neon Cloud Active
            </div>
            <div className="text-xs text-zinc-500 mt-1">PostgreSQL v16 • Prisma ORM</div>
          </div>
        </div>

        {/* Tab Selection */}
        <div className="flex items-center gap-2 border-b border-white/10 pb-4 mb-6">
          <button
            onClick={() => setActiveTab("messages")}
            className={`inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium transition cursor-pointer ${
              activeTab === "messages"
                ? "bg-violet-600 text-white shadow-lg shadow-violet-600/20"
                : "text-zinc-400 hover:text-white hover:bg-white/[0.04]"
            }`}
          >
            <Mail size={16} />
            <span>Messages Inbox</span>
            {unreadCount > 0 && (
              <span className="ml-1 rounded-full bg-amber-400 px-2 py-0.5 text-xs font-bold text-black">
                {unreadCount}
              </span>
            )}
          </button>

          <button
            onClick={() => setActiveTab("projects")}
            className={`inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium transition cursor-pointer ${
              activeTab === "projects"
                ? "bg-violet-600 text-white shadow-lg shadow-violet-600/20"
                : "text-zinc-400 hover:text-white hover:bg-white/[0.04]"
            }`}
          >
            <FolderGit2 size={16} />
            <span>Projects Manager</span>
            <span className="ml-1 rounded-full bg-white/15 px-2 py-0.5 text-xs text-white">
              {projects.length}
            </span>
          </button>

          <button
            onClick={() => setActiveTab("system")}
            className={`inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium transition cursor-pointer ${
              activeTab === "system"
                ? "bg-violet-600 text-white shadow-lg shadow-violet-600/20"
                : "text-zinc-400 hover:text-white hover:bg-white/[0.04]"
            }`}
          >
            <Database size={16} />
            <span>Neon Database</span>
          </button>
        </div>

        {/* TAB 1: MESSAGES INBOX */}
        {activeTab === "messages" && (
          <div className="space-y-4">
            {/* Filter and Search Bar */}
            <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between">
              {/* Filter Buttons */}
              <div className="inline-flex rounded-xl bg-white/[0.04] p-1 border border-white/10">
                <button
                  onClick={() => setMessageFilter("all")}
                  className={`rounded-lg px-3 py-1.5 text-xs font-medium transition cursor-pointer ${
                    messageFilter === "all"
                      ? "bg-violet-600 text-white"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  All ({messages.length})
                </button>
                <button
                  onClick={() => setMessageFilter("unread")}
                  className={`rounded-lg px-3 py-1.5 text-xs font-medium transition cursor-pointer ${
                    messageFilter === "unread"
                      ? "bg-violet-600 text-white"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  Unread ({unreadCount})
                </button>
                <button
                  onClick={() => setMessageFilter("read")}
                  className={`rounded-lg px-3 py-1.5 text-xs font-medium transition cursor-pointer ${
                    messageFilter === "read"
                      ? "bg-violet-600 text-white"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  Read ({messages.length - unreadCount})
                </button>
              </div>

              {/* Search input */}
              <div className="relative flex-1 sm:max-w-xs">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-zinc-500">
                  <Search size={15} />
                </div>
                <input
                  type="text"
                  placeholder="Search sender, email, subject..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full rounded-xl border border-white/10 bg-black/40 pl-9 pr-4 py-2 text-xs text-white placeholder-zinc-500 focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500"
                />
              </div>
            </div>

            {/* Messages List */}
            {loading ? (
              <div className="rounded-2xl border border-white/10 bg-zinc-900/30 p-12 text-center text-zinc-500">
                Loading messages from Neon PostgreSQL...
              </div>
            ) : filteredMessages.length === 0 ? (
              <div className="rounded-2xl border border-white/10 bg-zinc-900/30 p-12 text-center">
                <Mail size={32} className="mx-auto text-zinc-600 mb-3" />
                <h3 className="text-base font-semibold text-white">No messages found</h3>
                <p className="text-xs text-zinc-500 mt-1">
                  {searchQuery ? "Try refining your search filter." : "Inquiries from the portfolio contact form will appear here."}
                </p>
              </div>
            ) : (
              <div className="space-y-3">
                {filteredMessages.map((msg) => {
                  const isExpanded = expandedMessageId === msg.id;
                  const dateStr = new Date(msg.createdAt).toLocaleDateString(undefined, {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                  });

                  return (
                    <div
                      key={msg.id}
                      className={`rounded-2xl border transition-all ${
                        !msg.read
                          ? "border-violet-500/40 bg-violet-950/20"
                          : "border-white/10 bg-zinc-900/30"
                      }`}
                    >
                      {/* Summary Row */}
                      <div
                        onClick={() =>
                          setExpandedMessageId(isExpanded ? null : msg.id)
                        }
                        className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 cursor-pointer hover:bg-white/[0.02]"
                      >
                        <div className="flex items-start sm:items-center gap-3">
                          <span
                            className={`mt-1 sm:mt-0 h-2.5 w-2.5 shrink-0 rounded-full ${
                              !msg.read ? "bg-violet-400 ring-4 ring-violet-400/20" : "bg-zinc-600"
                            }`}
                          />
                          <div>
                            <div className="flex items-center gap-2 flex-wrap">
                              <span className="font-semibold text-sm text-white">
                                {msg.name}
                              </span>
                              <span className="text-xs text-zinc-400 font-mono">
                                &lt;{msg.email}&gt;
                              </span>
                              {!msg.read && (
                                <span className="rounded-full bg-violet-500/20 px-2 py-0.5 text-[10px] font-medium text-violet-300">
                                  NEW
                                </span>
                              )}
                            </div>
                            <div className="text-xs text-zinc-300 mt-1 line-clamp-1">
                              {msg.subject ? (
                                <span className="font-medium text-violet-200">
                                  {msg.subject} —{" "}
                                </span>
                              ) : null}
                              {msg.message}
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center justify-between sm:justify-end gap-3 text-xs text-zinc-400">
                          <span className="text-[11px] font-mono text-zinc-500">{dateStr}</span>
                          <div className="text-zinc-500">
                            {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                          </div>
                        </div>
                      </div>

                      {/* Expanded View */}
                      {isExpanded && (
                        <div className="border-t border-white/[0.08] p-5 bg-black/30 rounded-b-2xl space-y-4 animate-fadeIn">
                          <div>
                            <div className="text-xs text-zinc-500 font-mono mb-1">Subject</div>
                            <div className="text-sm font-semibold text-white">
                              {msg.subject || "(No subject provided)"}
                            </div>
                          </div>

                          <div>
                            <div className="text-xs text-zinc-500 font-mono mb-1">Message Content</div>
                            <div className="rounded-xl border border-white/5 bg-zinc-950/60 p-4 text-sm leading-relaxed text-zinc-200 whitespace-pre-wrap font-sans">
                              {msg.message}
                            </div>
                          </div>

                          {/* Action Toolbar */}
                          <div className="flex flex-wrap items-center gap-2 pt-2">
                            <a
                              href={`mailto:${msg.email}?subject=${encodeURIComponent(
                                msg.subject ? `Re: ${msg.subject}` : "Portfolio Inquiry Reply"
                              )}`}
                              className="inline-flex items-center gap-1.5 rounded-xl bg-violet-600 px-4 py-2 text-xs font-medium text-white hover:bg-violet-500 transition cursor-pointer"
                            >
                              <Send size={13} />
                              <span>Reply via Email</span>
                            </a>

                            <button
                              onClick={() => toggleMessageRead(msg.id, msg.read)}
                              className="inline-flex items-center gap-1.5 rounded-xl border border-white/10 bg-white/[0.05] px-3.5 py-2 text-xs font-medium text-zinc-300 hover:text-white hover:bg-white/[0.1] transition cursor-pointer"
                            >
                              <CheckCircle2 size={13} />
                              <span>{msg.read ? "Mark as Unread" : "Mark as Read"}</span>
                            </button>

                            <button
                              onClick={() => deleteMessage(msg.id)}
                              className="inline-flex items-center gap-1.5 rounded-xl border border-rose-500/20 bg-rose-500/10 px-3.5 py-2 text-xs font-medium text-rose-300 hover:bg-rose-500/20 transition cursor-pointer"
                            >
                              <Trash2 size={13} />
                              <span>Delete</span>
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}

        {/* TAB 2: PROJECTS MANAGER */}
        {activeTab === "projects" && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-lg font-bold text-white">Showcase Projects</h2>
                <p className="text-xs text-zinc-400 mt-0.5">
                  Manage the projects displayed dynamically on your portfolio.
                </p>
              </div>

              <button
                onClick={openNewProjectModal}
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 px-4 py-2.5 text-xs font-semibold text-white shadow-lg shadow-violet-600/20 hover:from-violet-500 hover:to-indigo-500 transition cursor-pointer"
              >
                <Plus size={16} />
                <span>Add New Project</span>
              </button>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {projects.map((proj) => (
                <div
                  key={proj.id}
                  className="rounded-2xl border border-white/10 bg-zinc-900/40 p-6 flex flex-col justify-between backdrop-blur-sm hover:border-violet-400/30 transition group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-xs text-violet-400 font-semibold">
                        PROJECT / {proj.number}
                      </span>
                      {proj.featured && (
                        <span className="rounded-full bg-violet-500/15 border border-violet-500/30 px-2 py-0.5 text-[10px] text-violet-300">
                          Featured
                        </span>
                      )}
                    </div>

                    <h3 className="text-lg font-bold text-white group-hover:text-violet-200 transition">
                      {proj.title}
                    </h3>
                    <div className="text-xs font-mono text-zinc-500 mt-0.5">
                      slug: {proj.slug}
                    </div>

                    <p className="text-xs leading-relaxed text-zinc-400 mt-3 line-clamp-3">
                      {proj.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mt-4">
                      {proj.stack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-md bg-white/[0.06] px-2 py-1 text-[11px] text-zinc-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions footer */}
                  <div className="mt-6 pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs">
                    <div className="flex items-center gap-3">
                      {proj.githubUrl && (
                        <a
                          href={proj.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="text-zinc-400 hover:text-white transition"
                        >
                          GitHub
                        </a>
                      )}
                      {proj.liveUrl && (
                        <a
                          href={proj.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="text-violet-400 hover:text-violet-300 transition"
                        >
                          Live Demo
                        </a>
                      )}
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => openEditProjectModal(proj)}
                        className="p-1.5 text-zinc-400 hover:text-white hover:bg-white/[0.08] rounded-lg transition cursor-pointer"
                        title="Edit Project"
                      >
                        <Edit2 size={14} />
                      </button>
                      <button
                        onClick={() => deleteProject(proj.id, proj.title)}
                        className="p-1.5 text-rose-400 hover:text-rose-300 hover:bg-rose-500/10 rounded-lg transition cursor-pointer"
                        title="Delete Project"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: NEON DATABASE */}
        {activeTab === "system" && (
          <div className="space-y-6">
            <div className="rounded-2xl border border-white/10 bg-zinc-900/40 p-6 backdrop-blur-sm">
              <h2 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                <Database size={20} className="text-emerald-400" />
                Neon Serverless PostgreSQL Database
              </h2>
              <p className="text-sm text-zinc-400 mb-6">
                Your portfolio is connected to Neon Cloud PostgreSQL via Prisma 6.4.1 ORM.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
                <div className="rounded-xl border border-white/5 bg-black/40 p-4">
                  <div className="text-zinc-500 mb-1">Host Location</div>
                  <div className="text-white">ep-blue-sea-bduqwa8w.c-8.us-east-2.aws.neon.tech</div>
                </div>
                <div className="rounded-xl border border-white/5 bg-black/40 p-4">
                  <div className="text-zinc-500 mb-1">Database Name</div>
                  <div className="text-white">neondb (Schema: public)</div>
                </div>
                <div className="rounded-xl border border-white/5 bg-black/40 p-4">
                  <div className="text-zinc-500 mb-1">Direct Connection Mode</div>
                  <div className="text-emerald-400">Direct Compute (Pooling OFF)</div>
                </div>
                <div className="rounded-xl border border-white/5 bg-black/40 p-4">
                  <div className="text-zinc-500 mb-1">Synchronized Models</div>
                  <div className="text-violet-300">Project, Skill, Experience, Education, Message, AdminUser</div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-white/[0.08] flex items-center justify-between flex-wrap gap-4">
                <div className="text-xs text-zinc-400">
                  Total Active Records:{" "}
                  <span className="text-white font-semibold">
                    {messages.length} messages, {projects.length} projects
                  </span>
                </div>
                <a
                  href="https://console.neon.tech"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-xl bg-emerald-600/20 border border-emerald-500/30 px-3.5 py-2 text-xs font-medium text-emerald-300 hover:bg-emerald-600/30 transition"
                >
                  <ExternalLink size={14} />
                  <span>Open Neon Console</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* PROJECT MODAL (Add / Edit) */}
      {isProjectModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
          <div className="w-full max-w-xl rounded-2xl border border-white/10 bg-zinc-900 p-6 shadow-2xl space-y-5 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
              <h3 className="text-lg font-bold text-white">
                {editingProject ? "Edit Project" : "Add New Project"}
              </h3>
              <button
                onClick={() => setIsProjectModalOpen(false)}
                className="text-zinc-400 hover:text-white transition p-1"
              >
                <X size={18} />
              </button>
            </div>

            <form onSubmit={saveProject} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-zinc-400 mb-1 uppercase font-medium tracking-wider">
                    Project Title *
                  </label>
                  <input
                    type="text"
                    required
                    value={projectForm.title}
                    onChange={(e) =>
                      setProjectForm({ ...projectForm, title: e.target.value })
                    }
                    placeholder="e.g. VICE DINE POS"
                    className="w-full rounded-xl border border-white/10 bg-black/50 px-3 py-2.5 text-white focus:border-violet-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-zinc-400 mb-1 uppercase font-medium tracking-wider">
                    Project Number
                  </label>
                  <input
                    type="text"
                    value={projectForm.number}
                    onChange={(e) =>
                      setProjectForm({ ...projectForm, number: e.target.value })
                    }
                    placeholder="01, 02..."
                    className="w-full rounded-xl border border-white/10 bg-black/50 px-3 py-2.5 text-white focus:border-violet-500 focus:outline-none font-mono"
                  />
                </div>
              </div>

              <div>
                <label className="block text-zinc-400 mb-1 uppercase font-medium tracking-wider">
                  Slug (URL identifier)
                </label>
                <input
                  type="text"
                  value={projectForm.slug}
                  onChange={(e) =>
                    setProjectForm({ ...projectForm, slug: e.target.value })
                  }
                  placeholder="auto-generated from title if left blank"
                  className="w-full rounded-xl border border-white/10 bg-black/50 px-3 py-2.5 text-white focus:border-violet-500 focus:outline-none font-mono"
                />
              </div>

              <div>
                <label className="block text-zinc-400 mb-1 uppercase font-medium tracking-wider">
                  Description *
                </label>
                <textarea
                  required
                  rows={3}
                  value={projectForm.description}
                  onChange={(e) =>
                    setProjectForm({ ...projectForm, description: e.target.value })
                  }
                  placeholder="Summarize the project's purpose, architecture, and impact..."
                  className="w-full rounded-xl border border-white/10 bg-black/50 px-3 py-2.5 text-white focus:border-violet-500 focus:outline-none leading-relaxed"
                />
              </div>

              <div>
                <label className="block text-zinc-400 mb-1 uppercase font-medium tracking-wider">
                  Tech Stack (Comma-separated)
                </label>
                <input
                  type="text"
                  value={projectForm.stack}
                  onChange={(e) =>
                    setProjectForm({ ...projectForm, stack: e.target.value })
                  }
                  placeholder="Next.js 15, TypeScript, Tailwind, Neon DB"
                  className="w-full rounded-xl border border-white/10 bg-black/50 px-3 py-2.5 text-white focus:border-violet-500 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-zinc-400 mb-1 uppercase font-medium tracking-wider">
                    GitHub URL
                  </label>
                  <input
                    type="url"
                    value={projectForm.githubUrl}
                    onChange={(e) =>
                      setProjectForm({ ...projectForm, githubUrl: e.target.value })
                    }
                    placeholder="https://github.com/..."
                    className="w-full rounded-xl border border-white/10 bg-black/50 px-3 py-2.5 text-white focus:border-violet-500 focus:outline-none font-mono"
                  />
                </div>

                <div>
                  <label className="block text-zinc-400 mb-1 uppercase font-medium tracking-wider">
                    Live Demo URL
                  </label>
                  <input
                    type="url"
                    value={projectForm.liveUrl}
                    onChange={(e) =>
                      setProjectForm({ ...projectForm, liveUrl: e.target.value })
                    }
                    placeholder="https://example.com"
                    className="w-full rounded-xl border border-white/10 bg-black/50 px-3 py-2.5 text-white focus:border-violet-500 focus:outline-none font-mono"
                  />
                </div>
              </div>

              <div className="flex items-center gap-2 pt-2">
                <input
                  type="checkbox"
                  id="featured-checkbox"
                  checked={projectForm.featured}
                  onChange={(e) =>
                    setProjectForm({ ...projectForm, featured: e.target.checked })
                  }
                  className="rounded border-zinc-700 bg-black/40 text-violet-600 focus:ring-violet-500 h-4 w-4 cursor-pointer"
                />
                <label htmlFor="featured-checkbox" className="text-zinc-300 cursor-pointer">
                  Feature this project prominently on the homepage
                </label>
              </div>

              {actionError && (
                <div className="text-rose-400 text-xs py-1">{actionError}</div>
              )}

              <div className="flex items-center justify-end gap-3 pt-4 border-t border-white/[0.08]">
                <button
                  type="button"
                  onClick={() => setIsProjectModalOpen(false)}
                  className="rounded-xl border border-white/10 px-4 py-2 text-zinc-400 hover:text-white transition cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={projectSaving}
                  className="rounded-xl bg-violet-600 px-5 py-2 text-white font-medium hover:bg-violet-500 transition disabled:opacity-50 cursor-pointer"
                >
                  {projectSaving ? "Saving..." : editingProject ? "Save Changes" : "Create Project"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
