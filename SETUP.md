# Aloud care circle — how the live cloud works (free, no setup)

The live care circle uses **ntfy.sh**, a free open pub/sub service. **No account, no keys,
no configuration** — it works the moment the app is deployed.

- The person turns on **☁️ Sync to care circle** (in 👪 Care) and gets a **circle code** + a
  **QR** to share.
- Family **scan the QR** (or open the link) → they see the timeline **update live** and get
  **instant alerts** (sound / vibration / notification) when something urgent is said.

## Honest limitations (please read before relying on it)
- **Privacy is prototype-grade.** The circle *code* is the only secret; ntfy topics are public,
  so anyone who learns the code could read/post. Use a long code, and for real deployment
  **self-host ntfy or add authentication** — this is health-adjacent data.
- **Cloud history is recent only** (~12 hours on the public server). The person's *own* device
  keeps the full history (👪 Care), and "Send summary to family" shares the whole day. For
  permanent shared records, move to an authenticated database later.
- **Background push on iPhone is limited.** Live alerts work while the family's monitor is open.
  A push when their phone is locked/app-closed needs Web Push + an installed PWA (iOS 16.4+) —
  a future add-on.
- **Doctors/nurses in a hospital EHR** remains a separate, regulated (HIPAA) project.
