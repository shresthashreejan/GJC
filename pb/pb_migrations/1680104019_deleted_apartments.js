migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("cdjf6s5kptoezgb");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "cdjf6s5kptoezgb",
    "created": "2023-02-27 17:00:43.979Z",
    "updated": "2023-03-29 15:24:30.093Z",
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
        "id": "jyylkcx7",
        "name": "description",
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
      },
      {
        "system": false,
        "id": "gxaxygdq",
        "name": "facing_direction",
        "type": "select",
        "required": true,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "North",
            "North-East",
            "North-West",
            "East",
            "West",
            "South",
            "South-East",
            "South-West"
          ]
        }
      },
      {
        "system": false,
        "id": "wv6xo0rd",
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
        "id": "rkqrozsq",
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
        "id": "hnfznhac",
        "name": "location",
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
        "id": "lyzvjg58",
        "name": "ward_no",
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
        "id": "bubgcmzr",
        "name": "parking_available",
        "type": "bool",
        "required": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "pou43439",
        "name": "parking_type",
        "type": "select",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "Car",
            "Bike",
            "Van"
          ]
        }
      },
      {
        "system": false,
        "id": "aozea0bs",
        "name": "parking_description",
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
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
})
