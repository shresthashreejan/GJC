migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("cdjf6s5kptoezgb")

  // remove
  collection.schema.removeField("8ef8h6mc")

  // remove
  collection.schema.removeField("7aghicet")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("cdjf6s5kptoezgb")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "8ef8h6mc",
    "name": "address",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "collectionId": "elmzqgdif2k08k1",
      "cascadeDelete": true,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": [
        "province",
        "district",
        "location"
      ]
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "7aghicet",
    "name": "parking",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "collectionId": "1dmuboorxrfwve5",
      "cascadeDelete": true,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": [
        "parking_available",
        "parking_type",
        "parking_description"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
