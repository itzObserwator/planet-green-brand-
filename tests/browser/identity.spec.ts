import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
test("identity preserves original artwork and asset downloads", async ({
  page,
}) => {
  await page.goto("/");
  await expect(
    page.getByRole("heading", {
      name: /A closer life.*Naturally/,
      level: 1,
    }),
  ).toBeVisible();
  await expect(
    page.getByRole("button", { name: /^Explore (Seed|Soil|Hills|Life)$/ }),
  ).toHaveCount(4);
  await expect(page.locator("#identity a[download]")).toHaveAttribute(
    "href",
    "/brand/planet-green-original.svg",
  );
  await expect(page.locator(".site-header .brand-logo")).toHaveAttribute(
    "src",
    "/brand/planet-green-on-dark.svg",
  );
  await page.getByRole("button", { name: "Brand assets" }).click();
  const dialog = page.getByRole("dialog");
  await expect(dialog).toBeVisible();
  await expect(dialog.getByText("Awaiting asset", { exact: true })).toHaveCount(
    2,
  );
  const download = page.waitForEvent("download");
  await expect(dialog.locator("a[download]")).toHaveCount(4);
  await dialog.getByRole("button", { name: "Download colour tokens" }).click();
  expect((await download).suggestedFilename()).toBe(
    "planet-green-logo-colours.json",
  );
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
    .getByRole("link", { name: "Explore the full guidelines", exact: true })
    .click();
  await expect(page).toHaveURL(/explorer\/$/);
  await page.getByRole("button", { name: "Guidelines", exact: true }).click();
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
    for (const route of ["/", "/explorer/", "/applications/"]) {
      await page.goto(route);
      await page.waitForLoadState("networkidle");
      expect(
        await page.evaluate(
          () => document.documentElement.scrollWidth <= window.innerWidth,
        ),
      ).toBe(true);
      if (route === "/applications/") {
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
      } else if (route === "/explorer/") {
        for (const tab of [
          "Identity board",
          "Guidelines",
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
  // Evaluate the settled dialog rather than its partially transparent entrance frame.
  await page.getByRole("dialog").evaluate(async (element) => {
    await Promise.all(
      element
        .getAnimations()
        .map((animation) => animation.finished.catch(() => {})),
    );
  });
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

test("world navigation and format cards stay in sync with application previews", async ({
  page,
}) => {
  await page.goto("/");
  await page
    .getByRole("navigation", { name: "Main navigation" })
    .getByRole("link", { name: "In the world", exact: true })
    .click();
  await expect(page).toHaveURL(/\/applications\/$/);
  await expect(
    page.getByRole("heading", { name: "Out in the world.", level: 1 }),
  ).toBeVisible();
  await page
    .getByRole("button", { name: "Social applications", exact: true })
    .click();
  await expect(
    page.getByRole("tab", { name: "Social", exact: true }),
  ).toHaveAttribute("aria-selected", "true");
  await page.getByRole("button", { name: "Portrait", exact: true }).click();
  await expect(page.locator(".social-mockups")).toHaveClass(/portrait/);
  await page.getByRole("tab", { name: "Print", exact: true }).click();
  await expect(
    page.getByRole("button", { name: "Print applications", exact: true }),
  ).toHaveAttribute("aria-pressed", "true");
  await expect(page.locator(".brochure-cover")).toBeVisible();
  await page
    .getByRole("button", { name: "Digital applications", exact: true })
    .click();
  await page.getByRole("button", { name: "Mobile", exact: true }).click();
  await expect(page.locator(".website-mockup")).toHaveClass(/mobile/);
  await page
    .getByRole("link", { name: "Find your connection", exact: true })
    .click();
  await expect(page).toHaveURL(/\/#purpose$/);
});

test("world application formats pass automated accessibility checks", async ({
  page,
}) => {
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto("/applications/");
  for (const name of ["Digital", "Social", "Print", "Objects", "Wayfinding"]) {
    await page.getByRole("tab", { name, exact: true }).click();
    const result = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21aa", "wcag22aa"])
      .analyze();
    expect(
      result.violations.map((v) => ({
        id: v.id,
        nodes: v.nodes.map((n) => ({
          target: n.target,
          summary: n.failureSummary,
        })),
      })),
    ).toEqual([]);
  }
});

// The active identity uses topic cards; the archived landscape carousel is no longer mounted.
test("philosophy topics remain usable on mobile with keyboard focus restoration", async ({
  page,
}) => {
  await page.goto("/");
  await page.setViewportSize({ width: 390, height: 844 });
  const card = page.getByRole("article", {
    name: "MOVE TO NATURE glass card",
    exact: true,
  });
  for (const [name, title] of [
    ["Indulge", "Experience a life closer to nature."],
    ["Involve", "Take part in cultivation."],
    ["Impact", "Care for the land that sustains us."],
  ]) {
    const button = card.getByRole("button", { name, exact: true });
    await button.focus();
    await page.keyboard.press("Enter");
    await expect(
      page
        .getByRole("dialog")
        .getByRole("heading", { name: title, exact: true }),
    ).toBeVisible();
    await page.keyboard.press("Escape");
    await expect(button).toBeFocused();
  }
});

test("library filters, preview themes and empty-state recovery remain usable", async ({
  page,
}) => {
  await page.goto("/explorer/");
  await expect(
    page.getByRole("heading", { name: "Component library.", level: 1 }),
  ).toBeVisible();
  const filters = page.locator(".library-filters");
  await filters
    .getByRole("button", { name: "Foundations", exact: true })
    .click();
  await expect(page.locator(".library-item")).toHaveCount(2);
  await filters.getByRole("button", { name: "Graphics", exact: true }).click();
  await expect(page.locator(".library-item")).toHaveCount(5);
  await page
    .getByRole("textbox", { name: "Search components" })
    .fill("nothing matches");
  await expect(
    page.getByRole("heading", { name: "No components found." }),
  ).toBeVisible();
  await page.getByRole("button", { name: "Clear search", exact: true }).click();
  await expect(page.locator(".library-item")).toHaveCount(14);
  await page
    .getByRole("button", { name: "Toggle component preview background" })
    .click();
  await expect(page.locator(".library-preview.preview-dark")).toHaveCount(14);
  const dark = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21aa", "wcag22aa"])
    .analyze();
  expect(dark.violations).toEqual([]);
  await page
    .getByRole("button", { name: "Toggle component preview background" })
    .click();
  await expect(page.locator(".library-preview.preview-light")).toHaveCount(14);
});

test("nature cards and growth controls share the selected element", async ({
  page,
}) => {
  await page.goto("/");
  await page.getByRole("button", { name: "Explore Soil", exact: true }).click();
  await expect(
    page.getByRole("heading", { name: "The ground that gives." }),
  ).toBeVisible();
  await expect(
    page.getByRole("button", { name: "Explore Soil", exact: true }),
  ).toHaveAttribute("aria-pressed", "true");
  await page
    .locator("#motif-inspector")
    .getByRole("button", { name: "Next", exact: true })
    .click();
  await expect(
    page.getByRole("heading", { name: "Room for a different rhythm." }),
  ).toBeVisible();
  await page.getByRole("button", { name: "Explore Life", exact: true }).focus();
  await page.keyboard.press("Enter");
  await expect(
    page.getByRole("heading", { name: "Everything grows together." }),
  ).toBeVisible();
  await page
    .locator("#motif-inspector")
    .getByRole("button", { name: "Next", exact: true })
    .click();
  await expect(
    page.getByRole("heading", { name: "The beginning of possibility." }),
  ).toBeVisible();
});

test("fluid identity logo settings, typography and colours respond", async ({
  page,
  context,
}) => {
  await context.grantPermissions(["clipboard-read", "clipboard-write"]);
  await page.goto("/");
  const settings = page.getByRole("group", { name: "Logo background" });
  await settings.getByRole("button", { name: "Dark", exact: true }).click();
  await expect(page.locator("#identity")).toHaveAttribute("data-dark", "true");
  await expect(page.locator("#identity .brand-logo")).toHaveAttribute(
    "src",
    "/brand/planet-green-on-dark.svg",
  );
  await settings.getByRole("button", { name: "Light", exact: true }).click();
  await expect(page.locator("#identity .brand-logo")).toHaveAttribute(
    "src",
    "/brand/planet-green-original.svg",
  );
  await page
    .getByRole("textbox", { name: "Try the brand voice" })
    .fill("Growing together.");
  await expect(
    page.getByRole("textbox", { name: "Try the brand voice" }),
  ).toHaveValue("Growing together.");
  await page
    .getByRole("button", { name: "Copy Forest #156B37", exact: true })
    .click();
  expect(await page.evaluate(() => navigator.clipboard.readText())).toBe(
    "#156B37",
  );
  await expect(page.getByRole("status")).toContainText(
    "#156B37 copied to clipboard",
  );
});

test("recording motion can be paused and respects reduced motion", async ({
  page,
}) => {
  await page.goto("/");
  await page
    .getByRole("button", { name: "Pause animation", exact: true })
    .click();
  await expect(page.locator("[data-paused]")).toHaveAttribute(
    "data-paused",
    "true",
  );
  await page
    .getByRole("button", { name: "Play animation", exact: true })
    .click();
  await expect(page.locator("[data-paused]")).toHaveAttribute(
    "data-paused",
    "false",
  );
  await page.emulateMedia({ reducedMotion: "reduce" });
  await expect(
    page.getByRole("button", { name: "Reduced motion enabled", exact: true }),
  ).toBeDisabled();
  await expect(page.locator("[data-paused]")).toHaveAttribute(
    "data-paused",
    "true",
  );
});

test("brand voice examples and layered composition controls respond", async ({
  page,
}) => {
  await page.goto("/");
  const voice = page.getByRole("group", { name: "Brand voice examples" });
  await voice.getByRole("button", { name: /Rooted/ }).click();
  await expect(
    page.getByRole("heading", { name: "Begin with the ground." }),
  ).toBeVisible();
  await voice.getByRole("button", { name: /Clear/ }).click();
  await expect(
    page.getByRole("heading", { name: "Care begins with a small act." }),
  ).toBeVisible();
  await page
    .getByRole("button", { name: "Show Hills in composition", exact: true })
    .click();
  await expect(
    page.getByRole("heading", { name: "A closer look at hills." }),
  ).toBeVisible();
  await expect(
    page.getByRole("button", {
      name: "Show Hills in composition",
      exact: true,
    }),
  ).toHaveAttribute("aria-pressed", "true");
});

test("Planet Green glass cards open suggestions and expanded details", async ({
  page,
}) => {
  await page.goto("/");
  const card = page.getByRole("article", {
    name: "MOVE TO NATURE glass card",
    exact: true,
  });
  await expect(
    card.getByRole("link", { name: "Explore our communities", exact: true }),
  ).toHaveAttribute("href", "#portfolio");
  await expect(card.getByRole("textbox")).toHaveCount(0);
  await expect(page.getByText(/green notes/i)).toHaveCount(0);
  await expect(
    page
      .locator("#portfolio")
      .getByRole("link", { name: "Ecoworld", exact: true }),
  ).toHaveAttribute("href", "https://theecoworld.in/");
  await card.getByRole("button", { name: "Involve", exact: true }).click();
  await expect(
    page
      .getByRole("dialog")
      .getByRole("heading", { name: "Take part in cultivation." }),
  ).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(
    card.getByRole("button", { name: "Involve", exact: true }),
  ).toBeFocused();
  await card
    .getByRole("button", { name: "Expand move to nature", exact: true })
    .click();
  await page
    .getByRole("dialog")
    .getByRole("button", { name: "Impact", exact: true })
    .click();
  await expect(
    page
      .getByRole("dialog")
      .getByRole("heading", { name: "Care for the land that sustains us." }),
  ).toBeVisible();
  await page
    .getByRole("dialog")
    .getByRole("link", { name: "Explore earth and life", exact: true })
    .click();
  await expect(page).toHaveURL(/#elements$/);
  await expect(page.getByRole("dialog")).not.toBeVisible();
});

test("reference sections support practical choices, depth and nature details", async ({
  page,
}) => {
  await page.goto("/");
  await page
    .getByRole("group", { name: "Ways to take part" })
    .getByRole("button", { name: "Nourish", exact: true })
    .click();
  await expect(
    page.getByRole("heading", { name: "Know what sustains you." }),
  ).toBeVisible();
  const blur = page.getByRole("slider", { name: /Glass blur/ });
  await blur.focus();
  await page.keyboard.press("End");
  await expect(blur).toHaveValue("40");
  await page
    .locator("#portfolio")
    .getByRole("button", { name: /^Hills/ })
    .click();
  await expect(
    page
      .getByRole("dialog")
      .getByRole("heading", { name: "Hills", exact: true }),
  ).toBeVisible();
  await page.keyboard.press("Escape");
  for (const id of [
    "booklet-mockup",
    "wayfinding-mockup",
    "business-card-mockup",
  ]) {
    await page.locator(`#${id}`).scrollIntoViewIfNeeded();
    await expect(page.locator(`#${id}`).getByRole("img")).toBeVisible();
    await expect
      .poll(() =>
        page
          .locator(`#${id} img`)
          .first()
          .evaluate(
            (image: HTMLImageElement) =>
              image.complete && image.naturalWidth > 0,
          ),
      )
      .toBe(true);
  }
});
