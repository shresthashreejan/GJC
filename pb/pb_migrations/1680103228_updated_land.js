migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("olsfws98tb37n45")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "r0ys8qyk",
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
    "id": "qicwldx5",
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
    "id": "psdjwaik",
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
    "id": "wbuffszi",
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
  const collection = dao.findCollectionByNameOrId("olsfws98tb37n45")

  // remove
  collection.schema.removeField("r0ys8qyk")

  // remove
  collection.schema.removeField("qicwldx5")

  // remove
  collection.schema.removeField("psdjwaik")

  // remove
  collection.schema.removeField("wbuffszi")

  return dao.saveCollection(collection)
})
