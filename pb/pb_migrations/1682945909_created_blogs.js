migrate((db) => {
  const collection = new Collection({
    "id": "7fj3bwaz177cixk",
    "created": "2023-05-01 12:58:28.515Z",
    "updated": "2023-05-01 12:58:28.515Z",
    "name": "blogs",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "bgrqwa0k",
        "name": "title",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "srhexe4s",
        "name": "content",
        "type": "editor",
        "required": true,
        "unique": false,
        "options": {}
      }
    ],
    "listRule": "",
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("7fj3bwaz177cixk");

  return dao.deleteCollection(collection);
})
