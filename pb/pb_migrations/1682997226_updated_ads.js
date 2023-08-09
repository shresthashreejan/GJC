migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vl0xf2sus2z98o3")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "8dtjawbt",
    "name": "slot_id",
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
  const collection = dao.findCollectionByNameOrId("vl0xf2sus2z98o3")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "8dtjawbt",
    "name": "slot_id",
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
})
