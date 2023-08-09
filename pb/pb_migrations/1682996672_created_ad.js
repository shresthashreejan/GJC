migrate((db) => {
  const collection = new Collection({
    "id": "vl0xf2sus2z98o3",
    "created": "2023-05-02 03:04:31.513Z",
    "updated": "2023-05-02 03:04:31.513Z",
    "name": "ad",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "u7zfqtwi",
        "name": "client_id",
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
        "id": "8dtjawbt",
        "name": "slot_id",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "listRule": null,
    "viewRule": "",
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("vl0xf2sus2z98o3");

  return dao.deleteCollection(collection);
})
