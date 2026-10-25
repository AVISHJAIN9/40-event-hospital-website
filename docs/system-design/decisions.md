# Architectural Decision Records (ADRs): Sachidaanand Hospital

| ADR ID | Decision Title | Chosen Option | Alternatives Considered | Deciding Factors | Trade-Off Accepted | Revisit Trigger |
|---|---|---|---|---|---|---|
| **ADR-01** | Portal Structure | Multi-Page Architecture (MPA) | React / Vue SPA | Instant per-page load, zero JS compilation dependency | Page transitions reload HTML | Unified single-page EHR app required |
| **ADR-02** | Emergency Hotline | Native `tel:` URI Scheme | In-browser WebRTC VoIP | 100% carrier reliability on edge networks | Relies on mobile device SIM card | Building desktop-only hospital terminal |
| **ADR-03** | Visual Polish | Vanilla Tilt JS | Heavy 3D Three.js canvas | Lightweight micro-interaction on doctor cards | Modest DOM event listener | Mobile performance throttling |
| **ADR-04** | Form Validation | Native HTML5 + Vanilla JS | Formik, Yup, React Hook Form | Zero dependency footprint; universal browser support | Manual DOM attribute verification | Complex multi-step dynamic patient forms |
