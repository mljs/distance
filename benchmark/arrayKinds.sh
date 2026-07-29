#!/bin/bash
# Runs every element representation against both read styles, one process each,
# then prints a summary table.
set -euo pipefail

directory="$(dirname "$0")"
measurements=""

for kind in array typed mixed; do
  for reads in cached direct; do
    measurements="${measurements}$(node "$directory/arrayKinds.js" "$kind" "$reads")
"
  done
done

printf '%s' "$measurements" | awk -F'\t' '
  {
    speed[$1 "/" $2] = $3 / 1e6
    length_ = $4
    results[$5] = 1
    results[$6] = 1
  }
  END {
    printf "\n  (ai * bi) / (ai + bi) on %d elements, arguments swapped at each call\n\n", length_
    printf "  %-8s %14s %14s %10s\n", "kind", "cached", "direct", "ratio"
    printf "  %-8s %14s %14s %10s\n", "--------", "--------------", "--------------", "----------"
    split("array typed mixed", kinds, " ")
    for (i = 1; i <= 3; i++) {
      cached = speed[kinds[i] "/cached"]
      direct = speed[kinds[i] "/direct"]
      printf "  %-8s %11.0f M/s %11.0f M/s %9.2fx\n", kinds[i], cached, direct, cached / direct
    }
    distinct = 0
    for (result in results) { distinct++; sample = result }
    if (distinct == 1) {
      printf "\n  all results identical: %s\n\n", sample
    } else {
      printf "\n  WARNING: %d different results\n\n", distinct
    }
  }
'
