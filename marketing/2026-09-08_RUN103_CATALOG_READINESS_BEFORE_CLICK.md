# RUN103 — Catalog Readiness Before the Click

## Customer Truth
Self-service learners should not have to open a course page to discover whether its current curriculum is inspectable. Readiness should be visible in the catalog before the click.

## Creative Strategy
**WAIU-TXT-004 — See the curriculum state before you spend the click.**

Browse programs by what is actually attached now: current lesson count, how many lessons have inspectable objectives or lesson content, and attached lesson time when available. Paid checkout remains held when any attached lesson lacks inspectable curriculum.

**CTA:** Browse programs by what is actually attached now.

## Production Readiness
RUN103 updated the active Base44 catalog to load Course + Lesson records together and calculate per-course curriculum readiness before rendering the card. Course cards now show attached time, inspection-ready lesson count, free/paid state, and a visible `checkout held` label for paid courses that fail the existing paid-curriculum gate.

A new anonymous `CourseIntentSignal` stores only course ID, course-detail click, free/paid band, current curriculum-ready boolean, lesson counts, source label, and timestamp. It stores no learner PII.

Base44 build exit: `0`.
Checkpoint: `6aa029a48fa626a2d1c3593d`.
Base44 commit: `649d02bd876e3274de2bc4bad6a10b5ca797038c`.
Production deployment was not independently verified.

## Current Product Truth
The queried catalog contains 14 published courses and 56 attached lesson records. Eight courses currently have all four attached lessons inspectable; six legacy courses have four attached lesson records but no stored lesson objectives/content. All four published paid courses are in the latter group, so the existing paid checkout gate remains closed for all four.

The paid courses currently show 4 attached lessons / 0 inspection-ready lessons each, with 99 attached minutes each. This is curriculum-state evidence, not payment or learning-outcome evidence.

## Distribution Queue
WAIU-TXT-004 is text-ready for owned/founder-led distribution, but no authenticated Base44 publishing connector is connected. Keep it unpublished until a destination receipt exists.

## Analytics / Evaluation
New `CourseIntentSignal` baseline at creation: 0 records. Existing commercial baseline: 1 `CourseOrder` record, status `pending`, and 0 Enrollment records. The pending order is not treated as payment or enrollment.

## Winner Library
No winner is declared. Catalog clicks should only become a creative decision signal after production traffic exists and can be connected to downstream enrollment/payment receipts without treating self-service browsing as revenue.

## Claims Boundary
Wilkerson AI University is presented as a private, non-accredited learning environment. Catalog pricing, course records, lesson counts, and checkout controls do not prove accreditation, recognized credentials, payment, completion, career outcomes, or learner performance.