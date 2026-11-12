const request = require("supertest");
const app = require("./app");

describe("Personal Classroom API", () => {
  test("GET / returns the custom application message", async () => {
    const response = await request(app).get("/");
    expect(response.status).toBe(200);
    expect(response.body.message).toBe("My Personal CI/CD Pipeline Demo");
    expect(response.body.student).toBe("Software Engineering Track");
  });

  test("GET /health returns status ok and operational", async () => {
    const response = await request(app).get("/health");
    expect(response.status).toBe(200);
    expect(response.body.status).toBe("ok");
    expect(response.body.system).toBe("Operational");
  });
});