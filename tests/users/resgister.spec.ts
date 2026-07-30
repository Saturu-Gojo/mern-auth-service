import request from "supertest";
import app from "../../src/app.js";
import { DataSource } from "typeorm";
import { AppDataSource } from "../../src/config/data-source.js";

describe("POST /auth/register", () => {
  let connection: DataSource;

  beforeAll(async () => {
    connection = await AppDataSource.initialize();
  });

  afterAll(async () => {
    await connection.destroy();
  });

  describe("Given all fields", () => {
    it("Should return 201 status code and user profile", async () => {
      //AAA:Arrange, Act, Assert

      //Arrange
      const userData = {
        firstName: "Prashasth",
        lastName: "Singh",
        email: "prashasth@gmail.com",
        password: "secret",
      };

      //Act:Calling the API
      const response = await request(app).post("/auth/register").send(userData);

      //Assert:
      expect(response.statusCode).toBe(201);
      expect(response.body);
    });

    it("should return valid json response", async () => {
      //AAA:Arrange, Act, Assert

      //Arrange
      const userData = {
        firstName: "Prashasth",
        lastName: "Singh",
        email: "prashasth@gmail.com",
        password: "secret",
      };

      //Act:Calling the API
      const response = await request(app).post("/auth/register").send(userData);

      //Assert: application/json utf-8
      expect(
        (response.headers as Record<string, string>)["content-type"],
      ).toEqual(expect.stringContaining("json"));
      expect(response.body);
    });

    it("should persist the user in database", async () => {
      //AAA:Arrange, Act, Assert

      //Arrange
      const userData = {
        firstName: "Prashasth",
        lastName: "Singh",
        email: "prashasth@gmail.com",
        password: "secret",
      };

      //Act:Calling the API
      await request(app).post("/auth/register").send(userData);

      //Assert:
    });
  });
  describe("Missing fields", () => {
    it("Should return 400 status code for missing fields", () => {});
  });
});
