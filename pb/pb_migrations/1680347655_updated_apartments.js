migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bxoiiirk5ljftpr")

  // remove
  collection.schema.removeField("tnn95ce4")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bxoiiirk5ljftpr")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "tnn95ce4",
    "name": "parking_type",
    "type": "select",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 3,
      "values": [
        "Car",
        "Bike",
        "Van"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
