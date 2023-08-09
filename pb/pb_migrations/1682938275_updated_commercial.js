migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1h5daddlv4hic9r")

  // remove
  collection.schema.removeField("qxbua7li")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hnewl1it",
    "name": "room",
    "type": "number",
    "required": true,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1h5daddlv4hic9r")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qxbua7li",
    "name": "living_room",
    "type": "number",
    "required": true,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hnewl1it",
    "name": "bedroom",
    "type": "number",
    "required": true,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  return dao.saveCollection(collection)
})
