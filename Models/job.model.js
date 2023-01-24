let mongoose = require("mongoose");

let jobSchema = mongoose.Schema({
  name: { type: String },
  position: { type: String },
  contract: { type: String },
  location: { type: String },
});

let JobModel = mongoose.model("job_eval", jobSchema);

module.exports = { JobModel };
