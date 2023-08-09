migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bxoiiirk5ljftpr")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "tcvbzynu",
    "name": "premium",
    "type": "bool",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bxoiiirk5ljftpr")

  // remove
  collection.schema.removeField("tcvbzynu")

  return dao.saveCollection(collection)
})
