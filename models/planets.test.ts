import {
  assertEquals,
  assertNotEquals,
} from "https://deno.land/std@0.67.0/testing/asserts.ts";

import { filterHabitablePlanets } from "./planets.ts";

const HABITABLE_PLANET = {
  koi_disposition: "CONFIRMED",
  koi_prad: "1",
  koi_srad: "1",
  koi_smass: "1",
};

const NOT_CONFIRMED = {
  koi_disposition: "FALSE POSITIVE",
};

const TOO_LARGE_PLANETARY_RADIUS = {
  koi_disposition: "CONFIRMED",
  koi_prad: "1.5",
  koi_srad: "1",
  koi_smass: "1",
};

const TOO_LARGE_SOLAR_RADIUS = {
  koi_disposition: "CONFIRMED",
  koi_prad: "1",
  koi_srad: "1.01",
  koi_smass: "1",
};

const TOO_LARGE_SOLAR_MASS = {
  koi_disposition: "CONFIRMED",
  koi_prad: "1",
  koi_srad: "1",
  koi_smass: "1.04",
};

Deno.test("Filter only habitable planets", () => {
  const filtered = filterHabitablePlanets([
    HABITABLE_PLANET,
    NOT_CONFIRMED,
    TOO_LARGE_PLANETARY_RADIUS,
    TOO_LARGE_SOLAR_RADIUS,
    TOO_LARGE_SOLAR_MASS,
  ]);
  assertEquals(filtered, [HABITABLE_PLANET]);
});

// Short Method
Deno.test("Short Example", () => {
  assertEquals("deno", "deno");
  assertNotEquals(
    {
      runtime: "deno",
    },
    {
      runtime: "node",
    },
  );
});

//Long Method
Deno.test({
  name: "Example Test",
  //it will ignore this case if the build os is windows
  ignore: Deno.build.os === "windows",
  fn() {
    assertEquals("deno", "deno");
    assertNotEquals(
      {
        runtime: "deno",
      },
      {
        runtime: "node",
      },
    );
  },
});

// Deno.test({
//   name: "ops leak",
//   sanitizeOps: false,
//   fn() {
//     setTimeout(log.info, 1000);
//   },
// });

// Deno.test({
//   name: "ops leak",
//   // sanitizeOps: false,
//   async fn() {
//     await Deno.open("./models/planets.ts");
//   },
// });
