migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("elmzqgdif2k08k1")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "tjeazohr",
    "name": "apartments",
    "type": "relation",
    "required": false,
    "unique": true,
    "options": {
      "collectionId": "cdjf6s5kptoezgb",
      "cascadeDelete": true,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": [
        "id",
        "title"
      ]
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "yymlp7wv",
    "name": "land",
    "type": "relation",
    "required": false,
    "unique": true,
    "options": {
      "collectionId": "olsfws98tb37n45",
      "cascadeDelete": true,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": [
        "id",
        "title"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("elmzqgdif2k08k1")

  // remove
  collection.schema.removeField("tjeazohr")

  // remove
  collection.schema.removeField("yymlp7wv")

  return dao.saveCollection(collection)
})
