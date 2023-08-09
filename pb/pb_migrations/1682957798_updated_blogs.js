migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7fj3bwaz177cixk")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ohya7hvg",
    "name": "field",
    "type": "file",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "maxSize": 5242880,
      "mimeTypes": [
        "image/jpeg",
        "image/png",
        "image/svg+xml",
        "image/gif",
        "image/webp"
      ],
      "thumbs": []
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "eu7ftugg",
    "name": "tagline",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7fj3bwaz177cixk")

  // remove
  collection.schema.removeField("ohya7hvg")

  // remove
  collection.schema.removeField("eu7ftugg")

  return dao.saveCollection(collection)
})
