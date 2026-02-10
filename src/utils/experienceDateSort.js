/**
 * Parses experience duration string to a sortable key (YYYY-MM).
 * "Present" is treated as newest (9999-12). Used to sort timeline newest-first.
 */
const MONTH_TO_NUM = {
  jan: "01",
  january: "01",
  feb: "02",
  february: "02",
  mar: "03",
  march: "03",
  apr: "04",
  april: "04",
  may: "05",
  jun: "06",
  june: "06",
  jul: "07",
  july: "07",
  aug: "08",
  august: "08",
  sep: "09",
  sept: "09",
  september: "09",
  oct: "10",
  october: "10",
  nov: "11",
  november: "11",
  dec: "12",
  december: "12",
};

export function getEndDateSortKey(duration) {
  if (!duration || typeof duration !== "string") return "0000-00";
  const parts = duration.split(/\s*-\s*/).map((s) => s.trim());
  const endPart = parts[parts.length - 1];
  if (!endPart) return "0000-00";
  if (/present/i.test(endPart)) return "9999-12";
  const match = endPart.match(/^([a-z]+)\s*(\d{4})$/i);
  if (match) {
    const month = MONTH_TO_NUM[match[1].toLowerCase()] || "01";
    return `${match[2]}-${month}`;
  }
  return "0000-00";
}
