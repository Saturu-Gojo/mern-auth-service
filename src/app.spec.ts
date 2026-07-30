import { calculateDiscount } from "./utils.js";
import request from "supertest";
import app from "./app.js";

describe.skip("App", () => {
  it("should return correct discount amount", () => {
    const discount = calculateDiscount(100, 20);
    expect(discount).toBe(20);
  });

  it("should return 200 status code", async () => {
    const response = await request(app).get("/");
    expect(response.statusCode).toBe(200);
  });
});
