# Coki Taipei Trip Planner

Private source for Coki's three-day Taipei itinerary. GitHub Actions builds the React page into one HTML file, encrypts that file with StatiCrypt, and deploys only the encrypted result to GitHub Pages.

## Required GitHub setting

Create an Actions secret named `SITE_PASSWORD`, then set Pages source to **GitHub Actions**. Use a long, unique password (16+ characters recommended).

The password is never committed to this repository. Because GitHub Pages is static hosting, this is client-side encryption rather than account-based access control.
