migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7fj3bwaz177cixk")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "5hlracpe",
    "name": "author",
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
  const collection = dao.findCollectionByNameOrId("7fj3bwaz177cixk")

  // remove
  collection.schema.removeField("5hlracpe")

  return dao.saveCollection(collection)
})
