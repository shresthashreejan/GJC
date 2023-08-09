migrate((db) => {
  const collection = new Collection({
    "id": "cdjf6s5kptoezgb",
    "created": "2023-02-27 17:00:43.979Z",
    "updated": "2023-02-27 17:00:43.979Z",
    "name": "apartments",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "mh1hu5jb",
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
        "id": "8ef8h6mc",
        "name": "address",
        "type": "relation",
        "required": true,
        "unique": false,
        "options": {
          "collectionId": "elmzqgdif2k08k1",
          "cascadeDelete": true,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": [
            "province",
            "district",
            "location"
          ]
        }
      },
      {
        "system": false,
        "id": "qyvacpop",
        "name": "contact_number",
        "type": "number",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null
        }
      },
      {
        "system": false,
        "id": "mub7qjn5",
        "name": "price",
        "type": "number",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null
        }
      },
      {
        "system": false,
        "id": "efjuycua",
        "name": "land_size",
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
        "id": "ot2epmqd",
        "name": "road_size",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "ufifaqvb",
        "name": "bedroom",
        "type": "number",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null
        }
      },
      {
        "system": false,
        "id": "wbrmt0uj",
        "name": "bathroom",
        "type": "number",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null
        }
      },
      {
        "system": false,
        "id": "yhllvoeq",
        "name": "living_room",
        "type": "number",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null
        }
      },
      {
        "system": false,
        "id": "kqarot5q",
        "name": "kitchen",
        "type": "number",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null
        }
      },
      {
        "system": false,
        "id": "7aghicet",
        "name": "parking",
        "type": "relation",
        "required": true,
        "unique": false,
        "options": {
          "collectionId": "1dmuboorxrfwve5",
          "cascadeDelete": true,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": [
            "parking_available",
            "parking_type",
            "parking_description"
          ]
        }
      },
      {
        "system": false,
        "id": "5nmx1fbj",
        "name": "description",
        "type": "editor",
        "required": true,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "oudeqddi",
        "name": "map",
        "type": "url",
        "required": true,
        "unique": false,
        "options": {
          "exceptDomains": [],
          "onlyDomains": []
        }
      },
      {
        "system": false,
        "id": "umdhqouh",
        "name": "status",
        "type": "select",
        "required": true,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "On Sale",
            "Sold"
          ]
        }
      },
      {
        "system": false,
        "id": "58sjeskj",
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
  const collection = dao.findCollectionByNameOrId("cdjf6s5kptoezgb");

  return dao.deleteCollection(collection);
})
