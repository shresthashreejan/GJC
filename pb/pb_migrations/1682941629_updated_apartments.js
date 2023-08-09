migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bxoiiirk5ljftpr")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "v7ztfcwc",
    "name": "status",
    "type": "select",
    "required": true,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "Sale",
        "Sold",
        "Rent"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bxoiiirk5ljftpr")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "v7ztfcwc",
    "name": "status",
    "type": "select",
    "required": true,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "Sale",
        "Sold"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
