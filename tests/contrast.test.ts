import test from "node:test";
import assert from "node:assert/strict";
import { contrast, hexToRgb } from "../src/lib/utils.ts";
test("WCAG contrast uses linearised sRGB, not raw RGB brightness", () => {
  assert.equal(contrast("#000000", "#FFFFFF"), 21);
  assert.equal(contrast("#FFFFFF", "#FFFFFF"), 1);
  assert.ok(Math.abs(contrast("#777777", "#FFFFFF") - 4.478) < 0.001);
  assert.equal(contrast("#173D2A", "#FFFFFF"), contrast("#FFFFFF", "#173D2A"));
});
test("colour parsing validates full hexadecimal values", () => {
  assert.deepEqual(hexToRgb("#B7D598"), [183, 213, 152]);
  assert.throws(() => hexToRgb("#bad-value"));
});
