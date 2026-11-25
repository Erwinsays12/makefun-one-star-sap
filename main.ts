// One Star, Written in Sap — entry program.
//
// Writes a single one-line, 1-star review from a houseplant about its
// human owner to /output/entry.txt. The review is a fixed, hand-written
// line: the competition is judged on the text itself, so the program is
// deterministic — same input, same output, every run.
//
// The line: a monstera files its complaint. Its owner keeps moving it
// around the flat hunting for "good light", and the plant has now given
// up cooperating and photosynthesizes purely out of spite.
import { mkdirSync, writeFileSync } from "node:fs";

// One line, under 280 characters. Plant's-eye grievance (being moved
// around for light), a clear one-star complaint, and a punchline built
// on fresh, specific detail — six moves, eleven minutes of sun.
const REVIEW =
  "One star. I'm a monstera, not a mood lamp: he moved me six times this month chasing 'good light', and now I photosynthesize out of spite in a corner that gets eleven minutes of sun a day.";

// The gate requires 1 to 279 characters of UTF-8 text, not only
// whitespace. Fail loudly instead of writing an invalid entry.
if (REVIEW.length < 1 || REVIEW.length > 279 || REVIEW.trim().length === 0) {
  throw new Error(`review is ${REVIEW.length} characters, outside the 1-279 gate`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", REVIEW, "utf8");
console.log(`wrote ${REVIEW.length} characters to /output/entry.txt`);
