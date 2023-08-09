migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("cdjf6s5kptoezgb")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "bubgcmzr",
    "name": "parking_available",
    "type": "bool",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "pou43439",
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
    "id": "aozea0bs",
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
  const collection = dao.findCollectionByNameOrId("cdjf6s5kptoezgb")

  // remove
  collection.schema.removeField("bubgcmzr")

  // remove
  collection.schema.removeField("pou43439")

  // remove
  collection.schema.removeField("aozea0bs")

  return dao.saveCollection(collection)
})
