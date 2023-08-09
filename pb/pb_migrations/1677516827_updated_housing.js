migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("s9fuupa77nzvq6v")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mp7ceiwd",
    "name": "status",
    "type": "select",
    "required": true,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "On Sale",
        "Sold"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("s9fuupa77nzvq6v")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mp7ceiwd",
    "name": "status",
    "type": "select",
    "required": true,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "on sale",
        "sold"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
