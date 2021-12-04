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
      expect(response.headers["x-ratelimit-limit"]).to.eq("5");
    });
  });
  it("Authorization", () => {
    cy.request({
      method: "PUT",
      url: "/api/keys",
    }).should(response => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("done");
    });

    cy.request({
      method: "GET",
      url: "/api/keys",
    }).then(response => {
      const key = response.body.apiKeys[0][0];
      cy.request({
        method: "GET",
        url: "/api",
        headers: {
          Authorization: `Bearer: ${key}`,
        },
      }).should(response => {
        expect(response.status).to.eq(200);
        expect(response.headers).to.have.property("x-middleware-refresh");
        expect(response.headers).to.have.property("x-ratelimit-limit");
        expect(response.headers).to.have.property("x-ratelimit-remaining");
        expect(response.headers).to.have.property("x-ratelimit-reset");
        expect(response.headers).to.have.property("x-upstash-latency");
        expect(response.headers["x-ratelimit-limit"]).to.eq("500");
      });
      cy.request({
        method: "DELETE",
        url: "/api/keys",
        qs: {
          key: key,
        },
      }).should(response => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property("done");
      });
    });
  });
});
