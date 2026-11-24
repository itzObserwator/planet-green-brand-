import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
import { readFile } from "node:fs/promises";

test("giving-back story and five-part inspector explain the approved artwork", async ({
  page,
}) => {
  await page.goto("/");
  const chapter = page.locator("#giving-back");
  const stages = chapter.getByRole("group", {
    name: "The act of giving back stages",
  });
  await stages.getByRole("button", { name: "Restore", exact: true }).click();
  await expect(
    chapter.getByRole("heading", { name: "We return care.", exact: true }),
  ).toBeVisible();
  await chapter
    .getByRole("button", { name: "Play story", exact: true })
    .click();
  await expect(
    stages.getByRole("button", { name: "Receive", exact: true }),
  ).toHaveAttribute("aria-pressed", "true");
  await expect(
    stages.getByRole("button", { name: "Realise", exact: true }),
  ).toHaveAttribute("aria-pressed", "true", { timeout: 4500 });
  await chapter
    .getByRole("button", { name: "Pause story", exact: true })
    .click();
  await expect(
    chapter.getByRole("button", { name: "Play story", exact: true }),
  ).toHaveAttribute("aria-pressed", "false");
  await chapter.locator("summary").click();
  await chapter
    .getByRole("button", { name: "The giving gesture", exact: true })
    .click();
  await expect(
    chapter.getByRole("heading", { name: "Humanity gives back.", exact: true }),
  ).toBeVisible();
  await chapter.getByRole("button", { name: "New life", exact: true }).click();
  await expect(
    chapter.getByRole("heading", {
      name: "Care enables life to continue.",
      exact: true,
    }),
  ).toBeVisible();
  const audit = await new AxeBuilder({ page })
    .include("#giving-back")
    .withTags(["wcag2a", "wcag2aa", "wcag21aa", "wcag22aa"])
    .analyze();
  expect(audit.violations).toEqual([]);
  await page.emulateMedia({ reducedMotion: "reduce" });
  await expect(
    chapter.getByRole("button", {
      name: "Story motion reduced",
      exact: true,
    }),
  ).toBeDisabled();
  await stages.getByRole("button", { name: "Receive", exact: true }).click();
  await expect(
    chapter.getByRole("heading", {
      name: "Nature gives us life.",
      exact: true,
    }),
  ).toBeVisible();
});

test("artwork library exports real raster assets and reuses them in all formats", async ({
  page,
}) => {
  await page.goto("/explorer/?tab=artwork");
  await expect(
    page.getByRole("heading", { name: "A shared act of care.", exact: true }),
  ).toBeVisible();
  const png = page.getByRole("link", { name: "PNG master", exact: true });
  await expect(png).toHaveCount(7);
  await page
    .getByRole("button", { name: "Show on Forest", exact: true })
    .click();
  await expect(page.locator('[data-dark="true"]')).toHaveCount(7);
  const pending = page.waitForEvent("download");
  await png.first().click();
  const download = await pending;
  expect(download.suggestedFilename()).toBe("master.png");
  const bytes = await readFile((await download.path())!);
  expect(bytes.subarray(0, 8).toString("hex")).toBe("89504e470d0a1a0a");
  expect(bytes.readUInt32BE(16)).toBeGreaterThanOrEqual(1000);
  expect(bytes[25]).toBe(6); // True RGBA source, rather than a flattened preview.
  const formats = page.getByRole("group", {
    name: "Living Cycle application formats",
  });
  for (const name of [
    "Editorial",
    "Social template",
    "Presentation",
    "Digital card",
    "Poster",
    "Packaging",
    "Website banner",
  ]) {
    await formats.getByRole("button", { name, exact: true }).click();
    await expect(
      formats.getByRole("button", { name, exact: true }),
    ).toHaveAttribute("aria-pressed", "true");
    const images = page.locator("[data-format] picture img");
    await images.evaluateAll((nodes) =>
      Promise.all(nodes.map((node) => (node as HTMLImageElement).decode())),
    );
    expect(
      await images.evaluateAll((nodes) =>
        nodes.every((node) => (node as HTMLImageElement).naturalWidth > 0),
      ),
    ).toBe(true);
  }
  const audit = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21aa", "wcag22aa"])
    .analyze();
  expect(audit.violations).toEqual([]);
});

for (const width of [320, 768, 1440])
  test(`generated artwork remains responsive at ${width}px`, async ({
    page,
  }) => {
    await page.setViewportSize({ width, height: 900 });
    await page.goto("/explorer/?tab=artwork");
    await page
      .getByRole("group", { name: "Living Cycle application formats" })
      .getByRole("button", { name: "Packaging", exact: true })
      .click();
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
    ).toBe(true);
    const artwork = page
      .locator('[data-format="packaging"] picture img')
      .first();
    await artwork.evaluate((img) => (img as HTMLImageElement).decode());
    expect(
      await artwork.evaluate((img) => (img as HTMLImageElement).currentSrc),
    ).toContain(".webp");
  });
