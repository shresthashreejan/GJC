migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("olsfws98tb37n45")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "m8zfrwny",
    "name": "parking_available",
    "type": "bool",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "fztvak7k",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "7mgv2jrc",
    "name": "parking_description",
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
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("olsfws98tb37n45")

  // remove
  collection.schema.removeField("m8zfrwny")

  // remove
  collection.schema.removeField("fztvak7k")

  // remove
  collection.schema.removeField("7mgv2jrc")

  return dao.saveCollection(collection)
})
