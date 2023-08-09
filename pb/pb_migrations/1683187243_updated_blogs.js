migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7fj3bwaz177cixk")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mtdinkt7",
    "name": "content",
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
  collection.schema.removeField("mtdinkt7")

  return dao.saveCollection(collection)
})
