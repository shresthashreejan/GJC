migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6q5hhv9nyqa8h1o")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jstq1ejb",
    "name": "email",
    "type": "email",
    "required": false,
    "unique": false,
    "options": {
      "exceptDomains": null,
      "onlyDomains": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6q5hhv9nyqa8h1o")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jstq1ejb",
    "name": "email",
    "type": "email",
    "required": false,
    "unique": true,
    "options": {
      "exceptDomains": null,
      "onlyDomains": null
    }
  }))

  return dao.saveCollection(collection)
})
