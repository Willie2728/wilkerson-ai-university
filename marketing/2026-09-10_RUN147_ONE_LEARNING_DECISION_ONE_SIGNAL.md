# Wilkerson AI University — RUN147 One Learning Decision, One Signal

**Asset IDs:** WAU-TXT-004 / WAU-DOC-004  
**Status:** Base44 source production-ready; not verified published or deployed; no learning-outcome claim.

## Customer Truth
Repeated clicks on the same self-directed learning plan are not repeated evidence of learning intent. Preview/internal activity also should not influence growth decisions.

## Creative Strategy
**Hook:** One learning decision, one signal.

**CTA:** Explicitly choose the learning goal, AI-assistance boundary, and proof step; then use one receipt to guide the next practice attempt.

## Production Readiness
`LearningIntentSignal` now carries an anonymous browser-session ID, runtime environment, and measurement eligibility. Known preview/localhost runtime is excluded. The same event/configuration is counted once per anonymous browser session, with retry-safe deduplication. Default attribution advances to `WAU-TXT-004`. The new `WAU-DOC-004` card explains the measurement boundary.

Final Base44 build: exit 0. Checkpoint: `6aa278c506658ee0009b48fb`; commit: `838693318b05ef561e8a042381778a0e78527112`.

## Analytics / Evaluation
Verified baseline after the change: 0 measurement-eligible production `LearningIntentSignal` records.

## Winner Library
No winner. A copied learning receipt is self-directed study context, not mastery, accreditation, licensure, identity verification, or a career outcome.

## Source parity note
This repository is an older/static implementation and does not contain the Base44 `src/components/home/LearningReceiptSection.jsx` path; application-source parity is therefore not claimed for RUN147.
