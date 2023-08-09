migrate((db) => {
  const collection = new Collection({
    "id": "elmzqgdif2k08k1",
    "created": "2023-02-27 16:11:52.692Z",
    "updated": "2023-02-27 16:11:52.692Z",
    "name": "address",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "4rirrg4r",
        "name": "province",
        "type": "select",
        "required": true,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "Province No. 1",
            "Province No. 2",
            "Province No. 3",
            "Province No. 4",
            "Province No. 5",
            "Province No. 6",
            "Province No. 7"
          ]
        }
      },
      {
        "system": false,
        "id": "ujw6h9hc",
        "name": "district",
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
        "id": "arrs8ua3",
        "name": "location",
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
  const collection = dao.findCollectionByNameOrId("elmzqgdif2k08k1");

  return dao.deleteCollection(collection);
})
