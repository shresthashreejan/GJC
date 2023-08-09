migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bxoiiirk5ljftpr")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "slzqrlve",
    "name": "facing_direction",
    "type": "select",
    "required": true,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "N",
        "NE",
        "NW",
        "E",
        "W",
        "S",
        "SE",
        "SW"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bxoiiirk5ljftpr")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "slzqrlve",
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
})
