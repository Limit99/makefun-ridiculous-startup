import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

// Ridiculous at First Glance, Real by the Second: one startup pitch that sounds
// absurd until it clearly sells, at most 200 characters. The joke is the name;
// the business is the fee for a living room that photographs well.
const LINE =
  "A subscription that rents out other people's houseplants for parties, so your apartment looks loved and your plants stay alive — Plantbnb, but the hosts never cancel.";
const MAX_CHARS = 200;

function main(): void {
  // Revision: also reject line breaks and blank text, matching the sealed gate exactly.
  if (LINE.includes("\n") || LINE.trim().length === 0) {
    throw new Error("entry must be a single non-empty line");
  }
  if (LINE.length < 1 || LINE.length > MAX_CHARS) {
    throw new Error(`entry is ${LINE.length} characters, outside 1-${MAX_CHARS}`);
  }
  const outDir = process.env.OUTPUT_DIR ?? "/output";
  const outPath = join(outDir, "entry.txt");
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, LINE, "utf8");
}

main();
