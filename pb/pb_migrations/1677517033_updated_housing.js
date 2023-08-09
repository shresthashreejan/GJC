migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("s9fuupa77nzvq6v")

  // remove
  collection.schema.removeField("tr1ttv3j")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "7gk0rmfa",
    "name": "image",
    "type": "file",
    "required": true,
    "unique": false,
    "options": {
      "maxSelect": 10,
      "maxSize": 5242880,
      "mimeTypes": [
        "image/jpeg",
        "image/vnd.mozilla.apng",
        "image/png",
        "image/webp",
        "image/tiff",
        "image/bmp",
        "image/heic",
        "image/heif"
      ],
      "thumbs": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("s9fuupa77nzvq6v")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "tr1ttv3j",
    "name": "images",
    "type": "file",
    "required": true,
    "unique": false,
    "options": {
      "maxSelect": 10,
      "maxSize": 5242880,
      "mimeTypes": [
        "image/jpeg",
        "image/png",
        "image/webp",
        "image/tiff",
        "image/bmp",
        "image/heic"
      ],
      "thumbs": []
    }
  }))

  // remove
  collection.schema.removeField("7gk0rmfa")

  return dao.saveCollection(collection)
})
