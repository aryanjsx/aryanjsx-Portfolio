const MONTH_TO_NUM: Record<string, string> = {
  jan: "01", january: "01",
  feb: "02", february: "02",
  mar: "03", march: "03",
  apr: "04", april: "04",
  may: "05",
  jun: "06", june: "06",
  jul: "07", july: "07",
  aug: "08", august: "08",
  sep: "09", sept: "09", september: "09",
  oct: "10", october: "10",
  nov: "11", november: "11",
  dec: "12", december: "12",
};

export function formatDuration(startDate: string, endDate: string | null): string {
  const start = new Date(startDate);
  const end = endDate ? new Date(endDate) : new Date();

  let years = end.getFullYear() - start.getFullYear();
  let months = end.getMonth() - start.getMonth();

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  if (months === 0 && years === 0) return "< 1 mo";

  const parts: string[] = [];
  if (years > 0) parts.push(`${years} yr${years > 1 ? "s" : ""}`);
  if (months > 0) parts.push(`${months} mo${months > 1 ? "s" : ""}`);
  return parts.join(" ");
}

export function getEndDateSortKey(duration: string | null | undefined): string {
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
