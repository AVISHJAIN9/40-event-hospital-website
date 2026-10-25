# F5: Administrative Inpatient Admission & Staff Portal

## Overview & Architecture
Hospital clerk and nursing admission form (`ADMINFORM.html`, `ADMINFORM.js`) capturing patient demographic records, insurance authorization numbers, and bed ward allocations.

```mermaid
flowchart LR
    AdminClerk[Hospital Intake Clerk] --> AdminForm[ADMINFORM.html]
    AdminForm --> Validate[ADMINFORM.js: Input Validation Engine]
    Validate --> AssignBed[Assigns Ward / Room / Bed ID]
    AssignBed --> Receipt[Generates Inpatient Admission Docket]
```

## Say It Out Loud
> "In `ADMINFORM.html` and `ADMINFORM.js`, I built the administrative inpatient intake system. Hospital admission clerks can register incoming patients, validate health insurance policy numbers using regular expressions, designate attending physicians, and assign vacant hospital beds across general and ICU wards with immediate record generation."
