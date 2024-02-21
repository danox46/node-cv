module.exports = class Project {
  constructor() {
    this.title = "";
    this.description = "";
    this.assets = [];
    this.startDate = new Date();
    this.endDate = new Date();
  }
};
