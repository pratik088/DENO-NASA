import { Router } from "https://deno.land/x/oak@v6.1.0/mod.ts";
import * as planets from "./models/planets.ts"
//creating new object by creating instance of router class
const router = new Router();

router.get("/", (ctx) => {
  ctx.response.body = `
    _ __   __ _ ___  __ _ 
    | ._ \ / _- / __|/ _- |
    | | | | (_| \__ \ (_| |
    |_| |_|\__,_|___/\__,_|
    `;
});

router.get("/planets", (ctx) => {
    ctx.response.body = planets.getAllPlanets();
})

export default router;
