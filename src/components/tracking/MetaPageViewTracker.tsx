"use client";

import { useEffect, useRef } from "react";
import { trackMetaEvent } from "@/lib/meta-tracking";

/**
 * Componente cliente que dispara o evento PageView
 * com identificador de evento único (eventId) compartilhado
 * entre o GTM e a Meta Conversions API.
 *
 * Utiliza useRef para garantir que não haja disparo duplicado
 * no StrictMode do React durante o desenvolvimento.
 */
export function MetaPageViewTracker() {
  const hasFired = useRef(false);

  useEffect(() => {
    if (hasFired.current) return;
    hasFired.current = true;

    trackMetaEvent("PageView");
  }, []);

  return null;
}
