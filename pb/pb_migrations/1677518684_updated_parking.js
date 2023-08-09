migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1dmuboorxrfwve5")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jyplkwq1",
    "name": "housing",
    "type": "relation",
    "required": false,
    "unique": true,
    "options": {
      "collectionId": "s9fuupa77nzvq6v",
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
    "id": "oo67g893",
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
    "id": "3k9nsoee",
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
  const collection = dao.findCollectionByNameOrId("1dmuboorxrfwve5")

  // remove
  collection.schema.removeField("jyplkwq1")

  // remove
  collection.schema.removeField("oo67g893")

  // remove
  collection.schema.removeField("3k9nsoee")

  return dao.saveCollection(collection)
})
