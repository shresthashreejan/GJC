migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("elmzqgdif2k08k1")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "q2r0nzoq",
    "name": "ward_no",
    "type": "number",
    "required": true,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "tgvjis0b",
    "name": "tole",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("elmzqgdif2k08k1")

  // remove
  collection.schema.removeField("q2r0nzoq")

  // remove
  collection.schema.removeField("tgvjis0b")

  return dao.saveCollection(collection)
})
