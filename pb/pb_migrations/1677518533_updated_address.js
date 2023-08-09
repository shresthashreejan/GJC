migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("elmzqgdif2k08k1")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "awkgljd6",
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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("elmzqgdif2k08k1")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "awkgljd6",
    "name": "housing",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "s9fuupa77nzvq6v",
      "cascadeDelete": true,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": [
        "id"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
