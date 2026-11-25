// The 3 AM Excuse — a hardware wallet's one-line refusal to sign.
// Writes exactly one line (under 200 characters) to /output/entry.txt.
// Deterministic: no clock, no network, no randomness — the same line
// on every run, so the two grading runs agree byte for byte.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "At 3 AM I don't recognise you — same face, same PIN, completely different judgment. No signature until you're you again.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
