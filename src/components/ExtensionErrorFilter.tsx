"use client";

import { useEffect } from "react";

// Swallow errors thrown by browser extensions (wallets, etc.) so they
// don't trigger Next.js's dev error overlay. Real app errors still
// surface — we only filter rejections whose stack/filename points to
// chrome-extension://, moz-extension://, or safari-extension:// URLs.
//
// Implemented as a client component using useEffect so we don't render a
// <script> tag in the React tree (React 19 dev warns about those).
// Wallet extensions inject via document_idle and fire continuously, so
// attaching listeners after first commit still catches the noise.
export function ExtensionErrorFilter() {
  useEffect(() => {
    function isExtErr(e: ErrorEvent | PromiseRejectionEvent) {
      const reason = (e as PromiseRejectionEvent).reason as
        | { stack?: string; message?: string }
        | undefined;
      const stack =
        (reason && (reason.stack || reason.message)) ||
        (e as ErrorEvent).message ||
        "";
      const filename = (e as ErrorEvent).filename || "";
      return (
        /chrome-extension:\/\//.test(stack) ||
        /chrome-extension:\/\//.test(filename) ||
        /moz-extension:\/\//.test(stack) ||
        /moz-extension:\/\//.test(filename) ||
        /safari-extension:\/\//.test(stack) ||
        /safari-extension:\/\//.test(filename)
      );
    }
    function onError(e: ErrorEvent) {
      if (isExtErr(e)) {
        e.stopImmediatePropagation();
        e.preventDefault();
      }
    }
    function onRejection(e: PromiseRejectionEvent) {
      if (isExtErr(e)) {
        e.stopImmediatePropagation();
        e.preventDefault();
      }
    }
    window.addEventListener("error", onError, true);
    window.addEventListener("unhandledrejection", onRejection, true);
    return () => {
      window.removeEventListener("error", onError, true);
      window.removeEventListener("unhandledrejection", onRejection, true);
    };
  }, []);

  return null;
}
