migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("olsfws98tb37n45")

  // remove
  collection.schema.removeField("ubpdqksd")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("olsfws98tb37n45")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ubpdqksd",
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

  return dao.saveCollection(collection)
})
