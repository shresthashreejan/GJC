migrate((db) => {
  const collection = new Collection({
    "id": "1dmuboorxrfwve5",
    "created": "2023-02-27 16:27:41.960Z",
    "updated": "2023-02-27 16:27:41.960Z",
    "name": "parking",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "cjwopqdo",
        "name": "parking_available",
        "type": "bool",
        "required": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "3m5umord",
        "name": "parking_type",
        "type": "select",
        "required": true,
        "unique": false,
        "options": {
          "maxSelect": 3,
          "values": [
            "Car",
            "Bike",
            "Van"
          ]
        }
      },
      {
        "system": false,
        "id": "fyhpkcqt",
        "name": "parking_description",
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
  const collection = dao.findCollectionByNameOrId("1dmuboorxrfwve5");

  return dao.deleteCollection(collection);
})
