module.exports = {
  type: "object",
  additionalProperties: false,
  required: true,
  properties: {
    username: { type: "string" },
    email: { type: "string" },
    password: { type: "string", required: true },
  },
  anyOf: [{ required: ["username"] }, { required: ["email"] }],
};
