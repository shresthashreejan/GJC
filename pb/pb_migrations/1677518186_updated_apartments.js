migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("cdjf6s5kptoezgb")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "gxaxygdq",
    "name": "facing_direction",
    "type": "select",
    "required": true,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "North",
        "North-East",
        "North-West",
        "East",
        "West",
        "South",
        "South-East",
        "South-West"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("cdjf6s5kptoezgb")

  // remove
  collection.schema.removeField("gxaxygdq")

  return dao.saveCollection(collection)
})
