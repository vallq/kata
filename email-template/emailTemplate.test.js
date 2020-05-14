const emailTemplate = require("./emailTemplate");

describe("Email Template", () => {
  it("should return `Dear Jonathan, you have won a thousand dollars. Meet me in France to get your money.`.", () => {
    const email =
      "Dear Jonathan, you have won a thousand dollars. Meet me in France to get your money.";
    const data = {
      to: "Jonathan",
      amount: "thousand",
      country: "France",
    };
    const template = `Dear {to}, you have won a {amount} dollars. Meet me in {country} to get your money.`;
    const emailTemplateResult = emailTemplate(template, data);
    expect(emailTemplateResult).toEqual(email);
  });

  it("should return 'Dear Enwee...' and 'Dear Jonathan...'", () => {
    const emailData = [
      {
        to: "Jonathan",
        amount: "thousand",
        country: "Europe",
      },
      {
        to: "Enwee",
        amount: "hundred",
        country: "Malaysia",
      },
    ];

    const email = [
      "Dear Jonathan, you have won a thousand dollars. Meet me in France to get your money.",
      "Dear Enwee, you have won a hundred dollars. Meet me in Malaysia to get your money",
    ];
    const template = `Dear {to}, you have won a {amount} dollars. Meet me in {country} to get your money.`;
    const emailTemplateResult = emailTemplate(template, data);

    expect(emailTemplateResult).toEqual(email);
  });
});
