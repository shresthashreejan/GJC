migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("cdjf6s5kptoezgb")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wv6xo0rd",
    "name": "province",
    "type": "select",
    "required": true,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "Province No. 1",
        "Province No. 2",
        "Province No. 3",
        "Province No. 4",
        "Province No. 5",
        "Province No. 6",
        "Province No. 7"
      ]
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "rkqrozsq",
    "name": "district",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hnfznhac",
    "name": "location",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "lyzvjg58",
    "name": "ward_no",
    "type": "number",
    "required": true,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("cdjf6s5kptoezgb")

  // remove
  collection.schema.removeField("wv6xo0rd")

  // remove
  collection.schema.removeField("rkqrozsq")

  // remove
  collection.schema.removeField("hnfznhac")

  // remove
  collection.schema.removeField("lyzvjg58")

  return dao.saveCollection(collection)
})
