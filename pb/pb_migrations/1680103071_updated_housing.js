migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("s9fuupa77nzvq6v")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "kbotkr3l",
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
    "id": "4xgne6bv",
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
    "id": "cx7b1ybh",
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
    "id": "crf0vpuj",
    "name": "ward_no",
    "type": "number",
    "required": true,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zfrwpnwk",
    "name": "tole",
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
  collection.schema.removeField("kbotkr3l")

  // remove
  collection.schema.removeField("4xgne6bv")

  // remove
  collection.schema.removeField("cx7b1ybh")

  // remove
  collection.schema.removeField("crf0vpuj")

  // remove
  collection.schema.removeField("zfrwpnwk")

  return dao.saveCollection(collection)
})
