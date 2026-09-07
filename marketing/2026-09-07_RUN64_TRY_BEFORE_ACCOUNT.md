# Wilkerson AI University — Run 64

## WAIU-TXT-002 — Try the lab before we ask for an account

**Customer Truth:** A promise to “try the learning surface before you enroll” loses trust if visitors have to register before they can touch the product.

**Creative Strategy:** Make the browser Coding Lab the proof surface. Let a visitor run JavaScript before account creation, then ask for an account only when they want the protected campus, catalog, tutor, progress tracking, and student workspace.

**Production Readiness:** Base44 routing now leaves `/`, `/coding-lab`, and `/about` public while protected student/admin routes remain behind authentication. The navigation changes for signed-out visitors to Home / Coding Lab / About with Sign in and Create account actions. The Coding Lab now explicitly identifies itself as a public preview and offers a post-preview account CTA. The environment remains described as private and non-accredited; no degree, license, professional certification, or career outcome is implied.

**Build verification:** Sandbox build exited 0. Checkpoint `6a9e697a896524ce3bf3614d`; Base44 commit `f8ebdb2bf9053ec20530dfda42ba5bdd58d09d9f`. Production deployment is not independently verified.

**Distribution Queue:** Prompt-ready text only. No post is claimed scheduled, published, or live.

**Evaluation:** The next useful measurement is public Coding Lab visit → code run → account creation → protected learning activation. No conversion lift is claimed in this run.

**Source-of-truth exception:** The connected GitHub repository did not return `src/App.jsx` and code search did not surface the reviewed application source. No Base44 application code was written into guessed GitHub paths. This file is the durable campaign brief, not proof of application-source parity.