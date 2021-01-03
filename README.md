# library.mads-hartmann.com

Static site rendering all the books in my library. The data is managed as a table in Airtable and the site is generated using 11ty.

## Development

```sh
AIRTABLE_API_KEY='xyz' npm run dev
```

## Resources

- [Airtable API documentation](https://airtable.com/appeOdEdMRckpgiN0/api/docs#curl/introduction) for my table.
- [EJS](https://ejs.co/#docs)
- [11ty](https://www.11ty.dev)

## TODO

### Proof of concept

- [x] Start empty 11ty project which has a custom [javascript data files](https://www.11ty.dev/docs/data-js/) that queries Airtable
- [x] Generate an index.html page with the title of all books
- [ ] Github CI config
- [ ] Generate a db.sql file with table definition and inserts for each book
- [ ] Publish to library.mads-hartmann.com (depends on my other project)
