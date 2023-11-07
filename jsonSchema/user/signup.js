module.exports = {
    type: "object",
    required: true,
    properties: {
      username: { type: "string", required: true },
      email: { type: "string", required: true },
      password: { type: "string", required: true },
      firstName: { type: "string", required: true },
      lastName: { type: "string", required: true },
    },
  };
  