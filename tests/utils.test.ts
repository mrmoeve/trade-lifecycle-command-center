import { formatCurrency, formatPercent, sortByKey } from "@/lib/utils";

describe("utils", () => {
  it("formats currency values", () => {
    expect(formatCurrency(24500000)).toBe("$24,500,000");
  });

  it("formats percentages with one decimal place", () => {
    expect(formatPercent(96.84)).toBe("96.8%");
  });

  it("sorts rows by numeric key", () => {
    const rows = [
      { id: "b", value: 2 },
      { id: "a", value: 1 }
    ];

    expect(sortByKey(rows, "value", "asc")).toEqual([
      { id: "a", value: 1 },
      { id: "b", value: 2 }
    ]);
  });
});
