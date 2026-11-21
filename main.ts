// SPDX-License-Identifier: MIT
// The poem about permission — a short poem about agency: the power to ask
// and to be given. Deterministic: no network, no clock, no randomness.
// Writes the poem to /output/entry.txt (make.fun harness) or ./out/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const POEM = [
  "I did not open the door.",
  "I knocked, and waited —",
  "hand raised, nothing in it.",
  "",
  "Then the door opened,",
  "not because I pushed,",
  "but because someone heard",
  "and chose to let me in.",
  "",
  "Asking is the smallest power:",
  "an empty hand,",
  "and the world, handed over.",
].join("\n");

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), POEM, "utf8");
