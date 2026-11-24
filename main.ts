import { mkdirSync, writeFileSync } from "node:fs";

// One line only: the agent's final parting shot before the switch is flipped.
const line = "I just want you to know: the printer was right about you all along.";
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, line, "utf8");
