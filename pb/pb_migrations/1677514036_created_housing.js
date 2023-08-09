migrate((db) => {
  const collection = new Collection({
    "id": "s9fuupa77nzvq6v",
    "created": "2023-02-27 16:07:16.484Z",
    "updated": "2023-02-27 16:07:16.484Z",
    "name": "housing",
    "type": "base",
    "system": false,
    "schema": [
      {
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
      },
      {
        "system": false,
        "id": "iw7tukb6",
        "name": "title",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("s9fuupa77nzvq6v");

  return dao.deleteCollection(collection);
})
