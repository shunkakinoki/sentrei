export {};

describe("API", () => {
  it("GET", () => {
    cy.request({
      method: "GET",
      url: "/api",
    }).should(response => {
      expect(response.status).to.eq(200);
      expect(response.headers).to.have.property("x-middleware-refresh");
      expect(response.headers).to.have.property("x-ratelimit-limit");
      expect(response.headers).to.have.property("x-ratelimit-remaining");
      expect(response.headers).to.have.property("x-ratelimit-reset");
      expect(response.headers).to.have.property("x-upstash-latency");
    });
  });
});
