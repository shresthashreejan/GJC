migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bxoiiirk5ljftpr")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "l6voizhp",
    "name": "area",
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
  const collection = dao.findCollectionByNameOrId("bxoiiirk5ljftpr")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "l6voizhp",
    "name": "land_size",
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
})
