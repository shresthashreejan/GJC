migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("s9fuupa77nzvq6v")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jlyq51wz",
    "name": "parking_available",
    "type": "bool",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // add
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "n4mronxl",
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
  const collection = dao.findCollectionByNameOrId("s9fuupa77nzvq6v")

  // remove
  collection.schema.removeField("jlyq51wz")

  // remove
  collection.schema.removeField("uadvwg6t")

  // remove
  collection.schema.removeField("n4mronxl")

  return dao.saveCollection(collection)
})
