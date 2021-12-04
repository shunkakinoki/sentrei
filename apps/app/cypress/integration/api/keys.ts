export {};

describe("Index", () => {
  it("GET", () => {
    cy.request({
      method: "GET",
      url: "/api/keys",
    }).should(response => {
      console.log(response);
      console.log(response.headers);
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("apiKeys");
      expect(response.body.apiKeys.length).to.eq(0);
    });
  });
  it("PUT", () => {
    cy.request({
      method: "PUT",
      url: "/api/keys",
    }).should(response => {
      console.log(response);
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("done");
    });
  });
  it("DELETE", () => {
    cy.request({
      method: "GET",
      url: "/api/keys",
    }).then(response => {
      console.log(response);
      const key = response.body.apiKeys[0][0];
      cy.request({
        method: "DELETE",
        url: "/api/keys",
        qs: {
          key: key,
        },
      }).should(response => {
        console.log(response);
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property("done");
      });
    });
    cy.request({
      method: "GET",
      url: "/api/keys",
    }).should(response => {
      console.log(response);
      expect(response.status).to.eq(200);
      expect(response.body.apiKeys.length).to.eq(0);
    });
  });
});
