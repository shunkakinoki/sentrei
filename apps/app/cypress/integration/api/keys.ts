export {};

describe("Index", () => {
  it("GET", () => {
    cy.request({
      method: "GET",
      url: "/api/keys",
    }).should(response => {
      console.log(response);
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("apiKeys");
    });
  });
});
