migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("olsfws98tb37n45")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ja2qoiff",
    "name": "premium",
    "type": "bool",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("olsfws98tb37n45")

  // remove
  collection.schema.removeField("ja2qoiff")

  return dao.saveCollection(collection)
})
