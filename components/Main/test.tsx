import { render, screen } from "@testing-library/react";

import Main from ".";

describe("<Main />", () => {
  it("should render heading", () => {
    render(<Main products={[]} />);

    expect(
      screen.getByRole("heading", { name: /Ecommerce/i })
    ).toBeInTheDocument();
  });
});
