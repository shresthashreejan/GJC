migrate((db) => {
  const collection = new Collection({
    "id": "olsfws98tb37n45",
    "created": "2023-02-27 17:09:51.558Z",
    "updated": "2023-02-27 17:09:51.558Z",
    "name": "land",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "huxxtrff",
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
        "id": "ubpdqksd",
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
        "id": "eawvqr9d",
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
        "id": "rcj9yihs",
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
        "id": "mrprrgsh",
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
        "id": "teqvvw8d",
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
        "id": "dx995yjm",
        "name": "description",
        "type": "editor",
        "required": true,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "yxa0dxym",
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
        "id": "4nhm7qof",
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
        "id": "6hazvfby",
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
  const collection = dao.findCollectionByNameOrId("olsfws98tb37n45");

  return dao.deleteCollection(collection);
})
