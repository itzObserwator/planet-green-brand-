/** Original nature studies. Detail follows each subject's anatomy, never a floral overlay. */
export type HandDrawnElementId = "hills" | "soil" | "life" | "seeds";
type Point = readonly [number, number];
const n = (v: number) => Math.round(v * 100) / 100;
const p = ([x, y]: Point) => `${n(x)} ${n(y)}`;
const circle = (x: number, y: number, r: number) =>
  `M${n(x - r)} ${n(y)}a${r} ${r} 0 1 0 ${2 * r} 0a${r} ${r} 0 1 0 ${-2 * r} 0`;
const curve = (pts: Point[]) =>
  pts.map((v, i) => `${i ? "L" : "M"}${p(v)}`).join(" ");
// Stable irregularity keeps the artwork identical in React and standalone exports.
const noise = (i: number) => {
  const v = Math.sin(i * 127.1 + 19.7) * 43758.5453;
  return v - Math.floor(v);
};
const cubic = (a: Point, b: Point, c: Point, d: Point, t: number): Point => {
  const u = 1 - t;
  return [
    u * u * u * a[0] +
      3 * u * u * t * b[0] +
      3 * u * t * t * c[0] +
      t * t * t * d[0],
    u * u * u * a[1] +
      3 * u * u * t * b[1] +
      3 * u * t * t * c[1] +
      t * t * t * d[1],
  ];
};
const lerp = (a: Point, b: Point, t: number): Point => [
  a[0] + (b[0] - a[0]) * t,
  a[1] + (b[1] - a[1]) * t,
];
function study(id: HandDrawnElementId) {
  const lines: string[] = [],
    detail: string[] = [],
    fine: string[] = [];
  let wash = "";
  if (id === "hills") {
    // Engraved terrain: each contour wraps an actual ridge, then breaks into fine slope marks.
    const ranges: Point[][] = [
      [
        [43, 303],
        [119, 287],
        [138, 202],
        [205, 239],
        [261, 265],
        [299, 112],
        [352, 137],
        [403, 153],
        [420, 231],
        [555, 288],
      ],
      [
        [44, 363],
        [126, 330],
        [143, 282],
        [208, 306],
        [268, 333],
        [290, 240],
        [351, 262],
        [412, 282],
        [452, 323],
        [555, 331],
      ],
      [
        [44, 425],
        [103, 410],
        [164, 354],
        [223, 374],
        [280, 397],
        [333, 322],
        [394, 348],
        [450, 365],
        [490, 398],
        [555, 391],
      ],
      [
        [45, 484],
        [118, 470],
        [162, 422],
        [223, 436],
        [283, 450],
        [337, 398],
        [394, 421],
        [451, 436],
        [502, 467],
        [555, 456],
      ],
    ];
    const segments = (r: Point[]) => [
      [r[0], r[1], r[2], r[3]],
      [r[3], r[4], r[5], r[6]],
      [r[6], r[7], r[8], r[9]],
    ];
    ranges.forEach((r, row) => {
      const path = `M${p(r[0])}C${p(r[1])} ${p(r[2])} ${p(r[3])}C${p(r[4])} ${p(r[5])} ${p(r[6])}C${p(r[7])} ${p(r[8])} ${p(r[9])}`;
      lines.push(path);
      if (row === 0) wash = path + "L555 520L43 520Z";
      segments(r).forEach(([a, b, c, d], seg) => {
        for (let band = 1; band < 10; band++) {
          const points: Point[] = [];
          for (let k = 0; k <= 42; k++) {
            const t = k / 42,
              q = cubic(a, b, c, d, t);
            points.push([
              q[0] + Math.sin(t * Math.PI) * band * (seg === 1 ? -1.2 : 1),
              q[1] + band * (3.1 + row * 0.15) + Math.sin(t * 13 + band) * 0.65,
            ]);
          }
          (band % 3 === 0 ? detail : fine).push(curve(points));
        }
        for (let k = 0; k < 29; k++) {
          const t = (k + 0.35) / 29,
            q = cubic(a, b, c, d, t),
            len = 8 + noise(k + row * 101 + seg * 41) * 23;
          const dir = seg === 1 ? -1 : 1;
          fine.push(
            `M${p([q[0], q[1] + 3])}q${n(dir * 3)} ${n(len * 0.45)} ${n(dir * (7 + noise(k) * 8))} ${n(len)}`,
          );
          if (k % 3 === 0)
            fine.push(`M${p([q[0] + 2, q[1] + 7])}q${dir * 4} 8 ${dir * 8} 13`);
        }
      });
    });
    // Fine, tapered slope engravings bridge the ridges rather than leaving empty bands.
    for (let row = 0; row < 3; row++) {
      const upper = segments(ranges[row]),
        lower = segments(ranges[row + 1]);
      for (let seg = 0; seg < 3; seg++)
        for (let i = 1; i < 37; i++) {
          const t = i / 37;
          const a = cubic(
            upper[seg][0],
            upper[seg][1],
            upper[seg][2],
            upper[seg][3],
            t,
          );
          const b = cubic(
            lower[seg][0],
            lower[seg][1],
            lower[seg][2],
            lower[seg][3],
            t,
          );
          const start: Point = [a[0], a[1] + 30];
          const end: Point = [b[0] + (noise(i + seg * 37) - 0.5) * 5, b[1] - 3];
          if (end[1] - start[1] < 10) continue;
          const bend = (seg === 1 ? -1 : 1) * (5 + noise(i + row * 37) * 11);
          fine.push(
            `M${p(start)}C${p([start[0] + bend, start[1] + (end[1] - start[1]) * 0.35])} ${p([end[0] - bend * 0.3, end[1] - 9])} ${p(end)}`,
          );
          if (i % 3 === 0) {
            const m = lerp(start, end, 0.6);
            fine.push(`M${p([m[0] - 2, m[1] + 2])}l6 -4m-4 9l6 -4`);
          }
        }
    }
    detail.push(
      "M347 139C321 175 343 191 319 219S304 246 295 263",
      "M204 241C190 262 202 277 185 293",
      "M394 350C378 373 397 385 376 401",
    );
    for (let i = 0; i < 90; i++) {
      const x = 68 + noise(i * 3) * 466,
        y = 454 + noise(i * 3 + 1) * 58;
      fine.push(`M${n(x)} ${n(y)}q3 -4 7 -2m-5 3q3 -3 6 -2`);
    }
  }
  if (id === "soil") {
    lines.push(
      "M65 223C130 237 175 209 236 222S340 233 402 218S494 221 535 225",
      "M65 226L77 491Q300 522 523 491L535 227",
    );
    wash = "M65 223Q300 211 535 225L523 491Q300 522 77 491Z";
    for (let layer = 0; layer < 5; layer++) {
      const y = 259 + layer * 48;
      lines.push(
        `M${68 + layer * 2} ${y}C133 ${y - 15} 183 ${y + 12} 246 ${y - 1}S363 ${y + 12} 417 ${y - 3}S482 ${y + 8} ${531 - layer * 2} ${y - 2}`,
      );
      for (let k = 1; k < 3; k++)
        fine.push(
          `M${73 + layer * 2} ${y + k * 6}C163 ${y + k * 6 - 8} 205 ${y + k * 6 + 8} 287 ${y + k * 6}S435 ${y + k * 6 - 7} ${526 - layer * 2} ${y + k * 6 + 3}`,
        );
    }
    // A branching root system with progressively finer root hairs.
    const root = (a: Point, b: Point, depth: number) => {
      if (a[1] > 488) return;
      b = [b[0], Math.min(488, b[1])];
      const mid = lerp(a, b, 0.52);
      (depth > 1 ? detail : fine).push(
        `M${p(a)}Q${n(mid[0] + 9)} ${n(mid[1])} ${p(b)}`,
      );
      if (depth <= 0) return;
      for (const side of [-1, 1]) {
        const start = lerp(a, b, 0.38 + (side + 1) * 0.1);
        const end: Point = [
          start[0] + side * (depth * 12 + 6),
          start[1] + depth * 15 + 8,
        ];
        root(start, end, depth - 1);
      }
    };
    root([292, 225], [305, 469], 5);
    root([159, 228], [147, 404], 3);
    root([437, 222], [445, 419], 3);
    for (let i = 0; i < 58; i++) {
      const x = 79 + i * 7.7,
        y = 224 + Math.sin(i * 0.9) * 3,
        h = 7 + noise(i) * 16;
      fine.push(
        `M${n(x)} ${n(y)}q${n(-3 - noise(i + 1) * 4)} ${n(-h * 0.8)} ${n(-1 - noise(i + 2) * 3)} ${n(-h)}`,
      );
    }
    // Small broken aggregates create porous soil instead of an evenly dotted fill.
    for (let i = 0; i < 75; i++) {
      const x = 88 + noise(i * 5) * 420,
        y = 248 + noise(i * 5 + 1) * 232,
        r = 3 + noise(i * 5 + 2) * 7;
      fine.push(
        `M${n(x - r)} ${n(y)}q${n(r * 0.8)} ${n(-r)} ${n(r * 1.7)} ${n(-r * 0.3)}l${n(r * 0.5)} ${n(r * 0.8)}q${n(-r * 0.7)} ${n(r * 0.9)} ${n(-r * 1.6)} ${n(r * 0.3)}`,
      );
      for (let j = 0; j < 3; j++)
        fine.push(`M${n(x - r + j * 2)} ${n(y + 2 + j)}l3 -2`);
    }
    // Unequal grains and small mineral fragments, with generous gaps around roots.
    for (let i = 0; i < 370; i++) {
      const x = n(88 + noise(i * 7) * 424),
        y = n(244 + noise(i * 7 + 1) * 243);
      if (Math.abs(x - 300) < 23) continue;
      const r = n(0.45 + noise(i * 7 + 2) * 1.1);
      fine.push(
        i % 3 === 0
          ? `M${x} ${y}q${r * 3} ${-r * 2} ${r * 5} 1l${-r * 2} ${r * 3}Z`
          : circle(x, y, r),
      );
    }
    for (let i = 0; i < 27; i++) {
      const x = 78 + i * 17,
        y = 224 + Math.sin(i) * 3;
      detail.push(`M${x} ${n(y)}q-3 -8 -1 -14m1 9q3 -5 6 -6`);
    }
  }
  // Botanical venation uses a curved midrib, lateral veins, reticulate cells and edge hatching.
  const leaf = (a: Point, b: Point, width: number) => {
    const dx = b[0] - a[0],
      dy = b[1] - a[1],
      len = Math.hypot(dx, dy),
      normal: Point = [-dy / len, dx / len];
    const at = (t: number, w: number): Point => {
      const c = lerp(a, b, t);
      return [
        c[0] + normal[0] * (w + Math.sin(t * Math.PI) * 2),
        c[1] + normal[1] * (w + Math.sin(t * Math.PI) * 2),
      ];
    };
    const edge = (t: number) => width * 0.74 * Math.sin(Math.PI * t) ** 0.88;
    const outline = (scale: number) => {
      const pts: Point[] = [];
      for (let k = 0; k <= 72; k++) {
        const t = k / 72;
        pts.push(at(t, edge(t) * scale * (1 + Math.sin(k * 2.8) * 0.012)));
      }
      for (let k = 72; k >= 0; k--) {
        const t = k / 72;
        pts.push(at(t, -edge(t) * scale * (0.97 + Math.sin(k * 2.6) * 0.012)));
      }
      return curve(pts) + "Z";
    };
    const shell = outline(1);
    lines.push(shell);
    wash += shell;
    detail.push(outline(0.94), `M${p(a)}Q${p(at(0.5, 2))} ${p(b)}`);
    fine.push(`M${p(at(0.04, 1.6))}Q${p(at(0.5, 3.4))} ${p(at(0.98, 0.3))}`);
    const vein = (t: number, u: number, side: number): Point => {
      const along = t + 0.115 * u;
      return at(along, side * edge(along) * 0.91 * u);
    };
    for (let row = 0; row < 15; row++) {
      const t = 0.045 + row * 0.056;
      for (const side of [-1, 1]) {
        const pts: Point[] = [];
        for (let k = 0; k <= 12; k++) pts.push(vein(t, k / 12, side));
        detail.push(curve(pts));
        for (let cell = 1; cell <= 5; cell++) {
          const u = cell / 6,
            from = vein(t, u, side),
            middle = vein(t + 0.026, u + 0.045, side),
            to = vein(t + 0.056, u, side);
          fine.push(`M${p(from)}Q${p(middle)} ${p(to)}`);
          const tip = vein(t + 0.026, u + 0.13, side);
          fine.push(`M${p(middle)}L${p(tip)}`);
        }
      }
    }
    for (let k = 1; k < 60; k++) {
      const t = k / 61;
      for (const side of [-1, 1]) {
        const a1 = at(t, side * edge(t) * 0.97),
          b1 = at(t + 0.012, side * edge(t + 0.012) * (0.79 + noise(k) * 0.05));
        fine.push(`M${p(a1)}Q${p(lerp(a1, b1, 0.55))} ${p(b1)}`);
      }
    }
  };
  if (id === "life") {
    lines.push("M300 510C294 446 307 380 300 314S309 207 312 142");
    detail.push("M305 508C299 444 312 381 305 314S314 208 317 144");
    leaf([302, 304], [154, 196], 61);
    leaf([304, 352], [458, 247], 63);
    leaf([301, 420], [171, 333], 52);
    leaf([312, 228], [337, 83], 48);
    lines.push("M268 511Q301 499 338 512");
    for (let i = 0; i < 11; i++) {
      const x = 273 + i * 6;
      fine.push(`M${x} ${511 + (i % 3)}q-3 11 -1 19`);
      fine.push(`M${x - 1} ${519 + (i % 3)}l-4 4m4 -1l3 5`);
    }
  }
  if (id === "seeds") {
    // Longitudinal grooves describe seed shells, not leaves or decorative medallions.
    const seed = (
      cx: number,
      cy: number,
      angle: number,
      len: number,
      w: number,
    ) => {
      const transform = (x: number, y: number): Point => [
        cx + x * Math.cos(angle) - y * Math.sin(angle),
        cy + x * Math.sin(angle) + y * Math.cos(angle),
      ];
      const shell = `M${p(transform(-len / 2, 0))}C${p(transform(-len * 0.3, -w))} ${p(transform(len * 0.35, -w * 0.8))} ${p(transform(len / 2, 0))}C${p(transform(len * 0.3, w * 0.85))} ${p(transform(-len * 0.35, w))} ${p(transform(-len / 2, 0))}Z`;
      lines.push(shell);
      wash += shell;
      for (let i = -5; i <= 5; i++) {
        const offset = i * w * 0.13;
        detail.push(
          `M${p(transform(-len * 0.46, 0))}C${p(transform(-len * 0.18, offset))} ${p(transform(len * 0.22, offset * 0.9))} ${p(transform(len * 0.47, 0))}`,
        );
      }
      detail.push(
        `M${p(transform(-len * 0.44, 1))}C${p(transform(-len * 0.1, 4))} ${p(transform(len * 0.2, 3))} ${p(transform(len * 0.46, 0.5))}`,
      );
      for (let i = 0; i < 150; i++) {
        const t = 0.07 + noise(i * 3) * 0.86,
          x = (t - 0.5) * len;
        const y = (noise(i * 3 + 1) * 2 - 1) * w * 0.49 * Math.sin(Math.PI * t);
        const pt = transform(x, y),
          r = n(0.35 + noise(i * 3 + 2) * 0.45);
        fine.push(circle(pt[0], pt[1], r));
      }
      for (let j = 0; j < 36; j++) {
        const t = 0.06 + j * 0.024,
          x = (t - 0.5) * len;
        for (const side of [-1, 1]) {
          const y = side * w * 0.63 * Math.sin(Math.PI * t);
          fine.push(
            `M${p(transform(x, y))}Q${p(transform(x + 3, y * 0.89))} ${p(transform(x + 7, y * 0.77))}`,
          );
          fine.push(
            `M${p(transform(x, y * 0.83))}L${p(transform(x + 3, y * 0.76))}`,
          );
        }
      }
      // The attachment scar has its own concentric shell folds.
      for (let k = 0; k < 4; k++)
        fine.push(
          `M${p(transform(-len * 0.44 + k * 1.4, -3 - k))}q${n(Math.cos(angle) * 4)} ${n(Math.sin(angle) * 4)} ${n(Math.cos(angle) * 7)} ${n(Math.sin(angle) * 7)}`,
        );
    };
    seed(185, 328, -1.02, 181, 57);
    seed(364, 394, 0.8, 157, 56);
    seed(405, 211, -0.93, 130, 45);
    lines.push(
      "M177 406C157 430 175 443 159 462M159 462q-8 5 -10 15M174 439q14 6 17 18",
    );
    detail.push("M180 407C163 433 181 445 164 464");
    lines.push("M397 156C381 135 378 114 384 92");
    // Small cotyledons remain part of the germinating seed study.
    leaf([384, 115], [337, 77], 19);
    leaf([384, 105], [435, 64], 20);
  }
  return { lines, detail, fine, wash };
}
const metadata = [
  {
    id: "hills",
    name: "Hills",
    meaning: "A landscape to belong to.",
    alt: "Hand-drawn rolling hills with closely spaced topographic contours, rock folds and slope hatching",
  },
  {
    id: "soil",
    name: "Soil",
    meaning: "Care beneath every beginning.",
    alt: "Hand-drawn soil cutaway with stratified earth, branching roots, fine root hairs and mineral grains",
  },
  {
    id: "life",
    name: "Life",
    meaning: "Room for something to grow.",
    alt: "Hand-drawn young plant with detailed leaf margins, paired veins and fine branching vein networks",
  },
  {
    id: "seeds",
    name: "Seeds",
    meaning: "The possibility of a beginning.",
    alt: "Hand-drawn seeds with layered shell ridges, fine casing texture and a germinating shoot",
  },
] as const;
export const handDrawnElements = metadata.map((item) => ({
  ...item,
  ...study(item.id),
  download: `/graphics/hand-drawn/${item.id}.svg`,
}));
