migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("olsfws98tb37n45")

  // remove
  collection.schema.removeField("dx995yjm")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "cfnjuc6e",
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
  const collection = dao.findCollectionByNameOrId("olsfws98tb37n45")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "dx995yjm",
    "name": "description",
    "type": "editor",
    "required": true,
    "unique": false,
    "options": {}
  }))

  // remove
  collection.schema.removeField("cfnjuc6e")

  return dao.saveCollection(collection)
})
