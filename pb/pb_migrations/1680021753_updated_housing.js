migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("s9fuupa77nzvq6v")

  // remove
  collection.schema.removeField("kjvkvwsv")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ur3hyufc",
    "name": "description",
    "type": "text",
    "required": true,
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
  const collection = dao.findCollectionByNameOrId("s9fuupa77nzvq6v")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "kjvkvwsv",
    "name": "description",
    "type": "editor",
    "required": true,
    "unique": false,
    "options": {}
  }))

  // remove
  collection.schema.removeField("ur3hyufc")

  return dao.saveCollection(collection)
})
