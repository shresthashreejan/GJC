migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("cdjf6s5kptoezgb")

  // remove
  collection.schema.removeField("5nmx1fbj")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jyylkcx7",
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
  const collection = dao.findCollectionByNameOrId("cdjf6s5kptoezgb")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "5nmx1fbj",
    "name": "description",
    "type": "editor",
    "required": true,
    "unique": false,
    "options": {}
  }))

  // remove
  collection.schema.removeField("jyylkcx7")

  return dao.saveCollection(collection)
})
