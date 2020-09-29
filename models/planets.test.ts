import {
  assertEquals,
  assertNotEquals,
} from "https://deno.land/std@0.67.0/testing/asserts.ts";

// Short Method
Deno.test("Short Example", () => {
  assertEquals("deno", "deno");
  assertNotEquals(
    {
      runtime: "deno",
    },
    {
      runtime: "node",
    }
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
      }
    );
  },
});

Deno.test({
  name: "ops leak",
  sanitizeOps: false,
  fn() {
    setTimeout(console.log, 1000);
  },
});

Deno.test({
  name: "ops leak",
  // sanitizeOps: false,
  async fn() {
    await Deno.open("./models/planets.ts");
  },
});
