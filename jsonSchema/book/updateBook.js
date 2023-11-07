module.exports = {
  type: "object",
  required: true,
  properties: {
    title: {
      type: "string"
    },
    author: {
      type: "string"
    },
    summary: {
      type: "string"
    },
  },
  additionalProperties: false,
};
