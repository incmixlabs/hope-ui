import { JSX } from "solid-js";
import { render } from "solid-testing-library";

import { HopeProvider } from "@/contexts/HopeContext";

export function renderWithHopeProvider(callback: () => JSX.Element) {
  return render(() => <HopeProvider>{callback}</HopeProvider>);
}