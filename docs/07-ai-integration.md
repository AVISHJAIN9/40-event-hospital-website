# AI Integration Analysis: Sachidaanand Hospital

## Current Status: No AI Integration

The repository currently contains **No AI integration**.

---

## Architectural Blueprint: AI Triage Assistant & Symptom Checker

```mermaid
sequenceDiagram
    autonumber
    actor Patient as Visitor
    participant Triage as AI Triage Widget (main.html)
    participant Cloudflare as Healthcare AI Gateway
    participant MedModel as Med-PaLM 2 / Gemini Health API

    Patient->>Triage: "Persistent chest tightness with shortness of breath"
    Triage->>Cloudflare: Secure POST /api/triage
    Cloudflare->>MedModel: Evaluates clinical urgency score
    MedModel-->>Cloudflare: Returns { urgency: 'CRITICAL', recommendation: 'Immediate Emergency Care', department: 'Cardiology' }
    Cloudflare-->>Triage: High-priority response
    Triage-->>Patient: Alerts user + auto-routes to emergency.html panic dialer
```
