    // src/lib/csv.ts
export function parseCsv(csv: string): string[][] {
  const rows: string[][] = [];
  let cur = "";
  let inQuotes = false;
  let row: string[] = [];

  for (let i = 0; i < csv.length; i++) {
    const c = csv[i];
    const next = csv[i + 1];

    // escaped quote
    if (c === '"' && inQuotes && next === '"') {
      cur += '"';
      i++;
      continue;
    }

    if (c === '"') {
      inQuotes = !inQuotes;
      continue;
    }

    if (c === "," && !inQuotes) {
      row.push(cur);
      cur = "";
      continue;
    }

    if ((c === "\n" || c === "\r") && !inQuotes) {
      if (c === "\r" && next === "\n") i++;
      row.push(cur);
      cur = "";
      if (row.some((x) => x.trim() !== "")) rows.push(row);
      row = [];
      continue;
    }

    cur += c;
  }

  row.push(cur);
  if (row.some((x) => x.trim() !== "")) rows.push(row);

  return rows;
}
