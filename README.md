# library.mads-hartmann.com

Static site rendering all the books in my library. The data is managed as a table in Airtable and the site is generated using 11ty.

## Development

```sh
AIRTABLE_API_KEY='xyz' npm run dev
```

## Resources

- [Airtable API documentation](https://airtable.com/appeOdEdMRckpgiN0/api/docs#curl/introduction) for my table.

## TODO

### Proof of concept

- [x] Start empty 11ty project which has a custom [javascript data files](https://www.11ty.dev/docs/data-js/) that queries Airtable
- [x] Generate an index.html page with the title of all books
- [ ] Github CI config
- [ ] Generate a db.sql file with table definition and inserts for each book