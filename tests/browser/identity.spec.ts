import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
test("identity preserves brand status and all eleven destinations", async ({
  page,
}) => {
  await page.goto("/");
  await expect(
    page.getByRole("heading", { name: "Move to Nature.", level: 1 }),
  ).toBeVisible();
  await expect(page.locator("main section[id]")).toHaveCount(11);
  await expect(page.locator("#logo button[disabled]")).toHaveCount(2);
  await page.getByRole("button", { name: "Brand assets" }).click();
  const dialog = page.getByRole("dialog");
  await expect(dialog).toBeVisible();
  await expect(dialog.getByText("Awaiting asset", { exact: true })).toHaveCount(
    4,
  );
  const download = page.waitForEvent("download");
  await dialog.getByRole("button", { name: "Download draft tokens" }).click();
  expect((await download).suggestedFilename()).toContain("PROVISIONAL");
  await page.keyboard.press("Escape");
  await expect(dialog).not.toBeVisible();
  await expect(
    page.getByRole("button", { name: "Brand assets" }),
  ).toBeFocused();
});
test("logo theme, clear space, imagery and application controls respond", async ({
  page,
}) => {
  await page.goto("/");
  await page
    .getByRole("button", { name: "Toggle light logo background" })
    .click();
  await expect(page.locator(".logo-main")).toHaveClass(/on-light/);
  await page.getByRole("button", { name: "Show clear-space study" }).click();
  await expect(
    page.getByText("Illustrative clear space · pending validation"),
  ).toBeVisible();
  await page.getByRole("button", { name: "Ink text", exact: true }).click();
  await expect(page.locator(".contrast-results")).toContainText("AA pass");
  await page.locator("#type-sample").fill("Growing together.");
  await expect(page.locator(".type-rows")).toContainText("Growing together.");
  await page.getByRole("button", { name: "Soft focus", exact: true }).click();
  await expect(page.locator(".treatment-soft-focus")).toHaveCount(6);
  await page.getByRole("tab", { name: "Social", exact: true }).click();
  await page.getByRole("button", { name: "Portrait", exact: true }).click();
  await expect(page.locator(".social-mockups")).toHaveClass(/portrait/);
  await page.getByRole("tab", { name: "Objects", exact: true }).click();
  await expect(page.locator(".merch-item")).toHaveCount(3);
  await page.getByRole("tab", { name: "Wayfinding", exact: true }).click();
  await expect(page.locator(".signage")).toContainText("Natural farm");
});
test("explorer search, code inspection, copy and optional 3D are functional", async ({
  page,
  context,
}) => {
  await context.grantPermissions(["clipboard-read", "clipboard-write"]);
  const errors: string[] = [];
  page.on("pageerror", (e) => errors.push(e.message));
  await page.goto("/explorer/");
  await expect(page.locator(".library-item")).toHaveCount(14);
  await page
    .getByRole("textbox", { name: "Search components" })
    .fill("GlassCard");
  await expect(page.locator(".library-item")).toHaveCount(1);
  await page.locator(".library-item-info").click();
  await expect(page.getByRole("dialog")).toContainText("hover?: boolean");
  await page.getByRole("button", { name: "Copy code" }).click();
  await expect(
    page.getByRole("button", { name: "Copied", exact: true }),
  ).toBeVisible();
  expect(await page.evaluate(() => navigator.clipboard.readText())).toContain(
    "import { GlassCard }",
  );
  await page.keyboard.press("Escape");
  await page
    .getByRole("button", { name: "Identity board", exact: true })
    .click();
  await expect(page.locator(".board-tile")).toHaveCount(11);
  await page
    .getByRole("button", { name: "Design tokens", exact: true })
    .click();
  await expect(
    page.getByRole("heading", { name: "The supporting system" }),
  ).toBeVisible();
  await page.getByRole("button", { name: "3D study", exact: true }).click();
  await expect(page.locator(".scene-canvas canvas")).toHaveCount(0);
  await page.getByRole("button", { name: "Enable 3D study" }).click();
  await expect(page.locator(".scene-canvas canvas")).toHaveCount(1, {
    timeout: 30000,
  });
  await page.getByRole("button", { name: "Stop 3D preview" }).click();
  await expect(page.locator(".scene-canvas canvas")).toHaveCount(0);
  expect(errors).toEqual([]);
});
for (const width of [320, 390, 768, 1024, 1440]) {
  test(`no horizontal overflow or failed assets at ${width}px`, async ({
    page,
  }) => {
    await page.setViewportSize({ width, height: 1000 });
    const failures: string[] = [];
    page.on("response", (r) => {
      if (r.status() >= 400) failures.push(`${r.status()} ${r.url()}`);
    });
    for (const route of ["/", "/explorer/"]) {
      await page.goto(route);
      await page.waitForLoadState("networkidle");
      expect(
        await page.evaluate(
          () => document.documentElement.scrollWidth <= window.innerWidth,
        ),
      ).toBe(true);
      if (route === "/") {
        for (const tab of [
          "Digital",
          "Social",
          "Print",
          "Objects",
          "Wayfinding",
        ]) {
          await page.getByRole("tab", { name: tab, exact: true }).click();
          expect(
            await page.evaluate(
              () => document.documentElement.scrollWidth <= window.innerWidth,
            ),
          ).toBe(true);
        }
      } else {
        for (const tab of [
          "Identity board",
          "Design tokens",
          "Typography",
          "Applications",
          "3D study",
        ]) {
          await page.getByRole("button", { name: tab, exact: true }).click();
          expect(
            await page.evaluate(
              () => document.documentElement.scrollWidth <= window.innerWidth,
            ),
          ).toBe(true);
        }
      }
    }
    expect(failures).toEqual([]);
  });
}
test("WCAG 2.2 AA automated checks on identity, dialog and explorer", async ({
  page,
}) => {
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto("/");
  // Low-contrast swatches deliberately demonstrate failing foreground combinations.
  const identity = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21aa", "wcag22aa"])
    .exclude(".contrast-results")
    .analyze();
  expect(identity.violations).toEqual([]);
  await page.getByRole("button", { name: "Brand assets" }).click();
  const dialog = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21aa", "wcag22aa"])
    .analyze();
  expect(dialog.violations).toEqual([]);
  await page.goto("/explorer/");
  const explorer = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21aa", "wcag22aa"])
    .analyze();
  expect(explorer.violations).toEqual([]);
});
