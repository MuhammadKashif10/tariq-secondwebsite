"use client";

import { useState } from "react";
import { defaultMessage, whatsappUrl } from "@/lib/contact";
import { WhatsAppIcon } from "./Icon";

/**
 * Turns the form into a ready-to-send WhatsApp message, so enquiries land in
 * the same inbox as every other lead and no server or mail service is needed.
 * Service and area names come in as props to keep the full data out of the browser.
 */
export function ContactForm({ services, areas }: { services: string[]; areas: string[] }) {
  const [sent, setSent] = useState(false);

  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const get = (key: string) => String(data.get(key) ?? "").trim();
    const lines = [
      defaultMessage,
      `Name: ${get("name")}`,
      `Service: ${get("service")}`,
      `Area: ${get("area")}`,
      get("access") && `Floor and lift: ${get("access")}`,
      get("details") && `Details: ${get("details")}`,
    ].filter(Boolean);
    window.open(whatsappUrl(lines.join("\n")), "_blank", "noopener");
    setSent(true);
  }

  return (
    <form onSubmit={submit} className="cform grid gap-5 sm:grid-cols-2">
      <h2 className="h-md sm:col-span-2">Request a fixed price</h2>
      <Field label="Your name" className="sm:col-span-2">
        <input name="name" required autoComplete="name" className="field" />
      </Field>
      <Field label="What do you need?">
        <select name="service" required defaultValue="" className="field">
          <option value="" disabled>
            Choose a service
          </option>
          {services.map((name) => (
            <option key={name}>{name}</option>
          ))}
        </select>
      </Field>
      <Field label="Your area">
        <select name="area" required defaultValue="" className="field">
          <option value="" disabled>
            Choose an area
          </option>
          {areas.map((name) => (
            <option key={name}>{name}</option>
          ))}
          <option>Somewhere else in Dubai</option>
        </select>
      </Field>
      <Field label="Floor and lift (optional)" className="sm:col-span-2">
        <input name="access" placeholder="For example: 14th floor, service lift" className="field" />
      </Field>
      <Field label="What's going? (optional)" className="sm:col-span-2">
        <textarea name="details" rows={4} className="field" />
      </Field>
      <div className="sm:col-span-2">
        <button type="submit" className="btn btn-amb min-h-[62px] w-full text-[17px]">
          <WhatsAppIcon />
          Continue in WhatsApp
        </button>
        <p role="status" className="mutL mt-3 text-center text-sm">
          {sent ? "WhatsApp opened in a new tab. Press send there, then attach your photos." : "This opens WhatsApp with your details filled in, ready to send."}
        </p>
      </div>
    </form>
  );
}

function Field({ label, className = "", children }: { label: string; className?: string; children: React.ReactNode }) {
  return (
    <label className={`fld ${className}`}>
      {label}
      {children}
    </label>
  );
}
