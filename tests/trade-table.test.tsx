import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { TradeTable } from "@/components/tables/trade-table";

describe("TradeTable", () => {
  it("renders institutional trade rows", () => {
    render(<TradeTable />);

    expect(screen.getByText("NorthBridge Asset Management")).toBeInTheDocument();
    expect(screen.getByText("Redwood Pension Partners")).toBeInTheDocument();
  });

  it("sorts when a header is clicked", async () => {
    const user = userEvent.setup();
    render(<TradeTable />);

    const rowsBefore = screen.getAllByRole("row");
    expect(rowsBefore[1]).toHaveTextContent("Redwood Pension Partners");

    await user.click(screen.getByRole("button", { name: /client/i }));

    const rowsAfter = screen.getAllByRole("row");
    expect(rowsAfter[1]).toHaveTextContent("BluePeak Wealth");
  });
});
