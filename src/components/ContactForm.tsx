"use client";

import { useState } from "react";
import { areas } from "@/data/areas";
import { services } from "@/data/services";
import { whatsappUrl } from "@/lib/contact";
import { WhatsAppIcon } from "./Icon";

/**
 * Turns the form into a ready-to-send WhatsApp message, so enquiries land in
 * the same inbox as every other lead and no server or mail service is needed.
 */
export function ContactForm() {
  const [sent, setSent] = useState(false);

  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const get = (key: string) => String(data.get(key) ?? "").trim();
    const lines = [
      `Hi, I'm ${get("name")} and I'd like a quote.`,
      `Service: ${get("service")}`,
      `Area: ${get("area")}`,
      get("access") && `Floor and lift: ${get("access")}`,
      get("details") && `Details: ${get("details")}`,
      "I'll send photos here.",
    ].filter(Boolean);
    window.open(whatsappUrl(lines.join("\n")), "_blank", "noopener");
    setSent(true);
  }

  return (
    <form onSubmit={submit} className="card grid gap-5 p-6 sm:grid-cols-2 sm:p-9">
      <Field label="Your name" className="sm:col-span-2">
        <input name="name" required autoComplete="name" className="field" />
      </Field>
      <Field label="What do you need?">
        <select name="service" required defaultValue="" className="field">
          <option value="" disabled>
            Choose a service
          </option>
          {services.map((service) => (
            <option key={service.slug}>{service.name}</option>
          ))}
        </select>
      </Field>
      <Field label="Your area">
        <select name="area" required defaultValue="" className="field">
          <option value="" disabled>
            Choose an area
          </option>
          {areas.map((area) => (
            <option key={area.slug}>{area.name}</option>
          ))}
          <option>Somewhere else in Dubai</option>
        </select>
      </Field>
      <Field label="Floor and lift (optional)" className="sm:col-span-2">
        <input name="access" placeholder="For example: 14th floor, service lift" className="field" />
      </Field>
      <Field label="What's going? (optional)" className="sm:col-span-2">
        <textarea name="details" rows={3} className="field" />
      </Field>
      <div className="sm:col-span-2">
        <button type="submit" className="btn btn-wa w-full">
          <WhatsAppIcon />
          Continue in WhatsApp
        </button>
        <p role="status" className="mt-2 text-center text-sm text-muted">
          {sent ? "WhatsApp opened in a new tab. Press send there, then attach your photos." : "This opens WhatsApp with your details filled in, ready to send."}
        </p>
      </div>
    </form>
  );
}

function Field({ label, className = "", children }: { label: string; className?: string; children: React.ReactNode }) {
  return (
    <label className={`grid gap-2 text-sm font-semibold ${className}`}>
      {label}
      {children}
    </label>
  );
}
