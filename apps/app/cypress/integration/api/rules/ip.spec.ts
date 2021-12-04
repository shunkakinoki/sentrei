export {};

describe("IP", () => {
  it("GET", () => {
    cy.request({
      method: "GET",
      url: "/api/rules/ip",
    }).should(response => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("myIp");
      expect(response.body).to.have.property("rules");
    });
  });
});
