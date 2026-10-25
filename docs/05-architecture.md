# Architecture & System Design: Sachidaanand Hospital

## High-Level Architecture Overview

```mermaid
flowchart TD
    Patient[Patient / Caregiver] --> Portal[Sachidaanand Web Portal]
    Portal --> Emergency[Emergency Hotline & Panic Button]
    Portal --> Clinical[Doctor Directory & Appointments]
    Portal --> Telehealth[Video Consultation Room]
    Portal --> Pharmacy[E-Pharmacy Medicine Cart]
    Portal --> Diagnostics[BMI & Department Resources]
    Staff[Hospital Clerks] --> Admin[Administrative Admission Portal ADMINFORM]
```
