module.exports = {
    type: "object",
    required: true,
    properties: {
      title: {
        type: "string",
        required: true,
      },
      author: {
        type: "string",
        required: true,
      },
      summary: {
        type: "string",
        required: true,
      },
    },
    additionalProperties: false,
  };
  