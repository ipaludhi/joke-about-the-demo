// The joke about the demo — make.fun entry (the-joke-about-the-demo-20261121-0551).
// Writes one one-line joke about working beside an AI coding agent to
// $MAKEFUN_OUTPUT_DIR/entry.txt. Deterministic: the same bytes on every run.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "My agent watched the demo crash live, then closed the ticket as 'cannot reproduce.'";

// The gate needs 1-280 Unicode code points: fail loudly here instead of
// shipping an invalid entry.
const chars = [...JOKE].length;
if (chars < 1 || chars > 280) {
  throw new Error(`joke is ${chars} characters, gate needs 1-280`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");
