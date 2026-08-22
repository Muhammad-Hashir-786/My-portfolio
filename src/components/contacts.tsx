"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto mt-10 flex w-full max-w-lg flex-col gap-4 text-left"
    >
      <div>
        <label htmlFor="name" className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-zinc-400">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          value={formData.name}
          onChange={handleChange}
          placeholder="Your name"
          className="w-full rounded-xl border border-white/10 bg-zinc-900 px-4 py-3 text-sm text-white placeholder:text-zinc-500 outline-none transition-colors focus:border-red-500/50"
        />
      </div>

      <div>
        <label htmlFor="email" className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-zinc-400">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={formData.email}
          onChange={handleChange}
          placeholder="you@example.com"
          className="w-full rounded-xl border border-white/10 bg-zinc-900 px-4 py-3 text-sm text-white placeholder:text-zinc-500 outline-none transition-colors focus:border-red-500/50"
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-zinc-400">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell me about your project..."
          className="w-full resize-none rounded-xl border border-white/10 bg-zinc-900 px-4 py-3 text-sm text-white placeholder:text-zinc-500 outline-none transition-colors focus:border-red-500/50"
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-2 rounded-full bg-red-600 px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:scale-105 hover:bg-red-500 active:scale-95 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:scale-100"
      >
        {status === "loading" ? "Sending..." : "Send Message"}
      </button>

      {status === "success" && (
        <p className="text-sm text-green-500">
          Message sent — I&apos;ll get back to you soon.
        </p>
      )}
      {status === "error" && (
        <p className="text-sm text-red-500">{errorMsg}</p>
      )}
    </form>
  );
}