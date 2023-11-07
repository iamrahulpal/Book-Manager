const Validator = require("jsonschema").Validator;
const v = new Validator();

module.exports = (schema, data) => {
  try {
    const formattedError = [];
    const errors = v.validate(data, schema).errors;
    // console.log("🚀 ~ errors:", errors)
    errors.forEach(function (err) {
      const formattedErr = err.stack.split(".");
      if (formattedErr.length > 0) {
        if (formattedErr.length == 1) {
          formattedError.push(formattedErr[0])
        } else {
          formattedError.push(formattedErr[1]);
        }
      }
    });
    if (errors.length > 0) throw { error: formattedError };
    return;
  } catch (error) {
    throw error;
  }
};
