migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("1dmuboorxrfwve5");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "1dmuboorxrfwve5",
    "created": "2023-02-27 16:27:41.960Z",
    "updated": "2023-02-27 17:24:43.184Z",
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
      },
      {
        "system": false,
        "id": "jyplkwq1",
        "name": "housing",
        "type": "relation",
        "required": false,
        "unique": true,
        "options": {
          "collectionId": "s9fuupa77nzvq6v",
          "cascadeDelete": true,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": [
            "id",
            "title"
          ]
        }
      },
      {
        "system": false,
        "id": "oo67g893",
        "name": "apartments",
        "type": "relation",
        "required": false,
        "unique": true,
        "options": {
          "collectionId": "cdjf6s5kptoezgb",
          "cascadeDelete": true,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": [
            "id",
            "title"
          ]
        }
      },
      {
        "system": false,
        "id": "3k9nsoee",
        "name": "land",
        "type": "relation",
        "required": false,
        "unique": true,
        "options": {
          "collectionId": "olsfws98tb37n45",
          "cascadeDelete": true,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": [
            "id",
            "title"
          ]
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
})
