# Technology Choice Comparisons & Trade-Off Analysis

## Multi-Page Architecture (MPA) vs Single-Page Application (SPA) in Healthcare

| Metric | Chosen: Multi-Page HTML/JS | React SPA | Next.js Server-Side Rendering |
|---|---|---|---|
| **Initial Page Load Speed** | **Instant (Zero JS bundle download)** | Slower (Large bundle required) | Fast (Server generated) |
| **Accessibility on Weak Networks** | High (Independent static pages) | Low (Fragile during download) | High |
| **Infrastructure Complexity** | **Zero (Static file hosting)** | Node build pipeline required | Cloud server runtime required |
| **Fit with Sachidaanand Hospital** | **Optimal** (Accessible, resilient) | Overkill for clinical brochure | Expensive server costs |
