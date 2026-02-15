"use client";

export function useTranslations() {
  if (typeof window === "undefined") return (key: string) => key;

  const messagesEl = document.querySelector("[data-messages]");
  const messages = messagesEl
    ? JSON.parse(messagesEl.getAttribute("data-messages") || "{}")
    : {};

  return (key: string) => {
    const keys = key.split(".");
    let value = messages;
    for (const k of keys) {
      value = value?.[k];
    }
    return value || key;
  };
}

export function useLocale() {
  if (typeof window === "undefined") return "en";
  return document.documentElement.lang || "en";
}
