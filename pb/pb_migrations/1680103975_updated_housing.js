migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("s9fuupa77nzvq6v")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "uadvwg6t",
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
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("s9fuupa77nzvq6v")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "uadvwg6t",
    "name": "parking_type",
    "type": "select",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "Car",
        "Bike",
        "Van"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
