# F2: Doctor Scheduling & Appointment Booking

## Overview & Architecture
Interactive doctor directory (`docter.html`, `docter.js`) allowing patients to filter medical specialists by discipline, inspect credentials, and select available consultation slots.

```mermaid
sequenceDiagram
    autonumber
    actor Patient as Visitor
    participant View as docter.html
    participant Script as docter.js
    participant Modal as Appointment Modal

    Patient->>View: Selects 'Cardiology' filter
    View->>Script: filterSpecialty('Cardiology')
    Script-->>View: Displays cardiologist doctor cards
    Patient->>View: Clicks 'Book Appointment'
    View->>Modal: Launches consultation slot booking dialog
```

## Say It Out Loud
> "For outpatient consultations in `docter.html` and `docter.js`, I built an interactive doctor scheduling module. Patients can filter through medical specialists by department, review verified qualifications, and select convenient morning or evening time slots. The appointment form validates patient contact details and displays an immediate booking confirmation."
