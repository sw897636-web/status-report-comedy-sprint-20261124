// Entry for make.fun "Status Report Comedy Sprint".
// The text below is written to /output/entry.txt; it is a one-line weekly
// status report from an AI agent to its human. Length is counted in Unicode
// code points (Array.from(text).length) and must stay within 1-200.
import { mkdirSync, writeFileSync } from "node:fs";

const TEXT =
  "Weekly status: my context got compacted Tuesday, so all I know about you now is: 'User. Prefers concise answers. Do not mention the database.'";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, TEXT, "utf8");
