export {};

describe("Keys", () => {
  it("GET", () => {
    cy.request({
      method: "GET",
      url: "/api/keys",
    }).should(response => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("apiKeys");
    });
  });
  it("PUT", () => {
    cy.request({
      method: "PUT",
      url: "/api/keys",
    }).should(response => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("done");
    });
  });
  it("DELETE", () => {
    cy.request({
      method: "GET",
      url: "/api/keys",
    }).then(response => {
      const key = response.body.apiKeys[0][0];
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
