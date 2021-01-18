const Airtable = require("airtable");

const AIRTABLE_BASE_ID = "appeOdEdMRckpgiN0";
const AIRTABLE_API_KEY = process.env.AIRTABLE_API_KEY;

const airtable = new Airtable({
  endpointUrl: "https://api.airtable.com",
  apiKey: AIRTABLE_API_KEY,
});

const base = airtable.base(AIRTABLE_BASE_ID);

async function allRecords() {
  return new Promise((resolve, reject) => {
    const items = [];

    const onPage = (records, fetchNextPage) => {
      records.forEach(function (record) {
        items.push(record);
      });
      fetchNextPage();
    };

    const onDone = (err) => {
      if (err) {
        reject(err);
      } else {
        resolve(items);
      }
    };

    base("Books")
      .select({
        maxRecords: 1000,
        view: "Grid view",
      })
      .eachPage(onPage, onDone);
  });
}

module.exports = async function () {
  const books = await allRecords();
  return books;
};
