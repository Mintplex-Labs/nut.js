import { Region, screen } from "@mintplex-labs/nut-js";

(async () => {
  await screen.highlight(new Region(100, 200, 300, 400));
})();
