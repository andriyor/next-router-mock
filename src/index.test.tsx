import { useRouterTests } from "./useMemoryRouter.test";

import router, { MemoryRouter, useRouter } from "./index";

describe("next-overridable-hook", () => {
  it("should export a default router", () => {
    expect(router).toBeInstanceOf(MemoryRouter);
    expect(useRouter).toBeInstanceOf(Function);
  });

  describe("useRouter", () => {
    useRouterTests(router, useRouter);
  });
});