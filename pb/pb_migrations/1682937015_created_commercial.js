migrate((db) => {
  const collection = new Collection({
    "id": "1h5daddlv4hic9r",
    "created": "2023-05-01 10:30:14.554Z",
    "updated": "2023-05-01 10:30:14.554Z",
    "name": "commercial",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "lsclir7w",
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
        "id": "kqzuxzi7",
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
        "id": "fokbsuop",
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
        "id": "i9exmlcr",
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
        "id": "fuufqyvl",
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
        "id": "isrjojld",
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
        "id": "haqh9sqp",
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
        "id": "hnewl1it",
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
        "id": "adzxtpct",
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
        "id": "qxbua7li",
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
        "id": "7sxqik36",
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
        "id": "dkhbunay",
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
        "id": "2pinbskv",
        "name": "premium",
        "type": "bool",
        "required": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "uzkz9x69",
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
        "id": "xyzeouyi",
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
        "id": "nurgw4yb",
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
        "id": "mbrjxw45",
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
        "id": "qxtws29y",
        "name": "status",
        "type": "select",
        "required": true,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "Sale",
            "Sold",
            "Rent"
          ]
        }
      },
      {
        "system": false,
        "id": "2abvfv93",
        "name": "facing_direction",
        "type": "select",
        "required": true,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "N",
            "NE",
            "NW",
            "E",
            "W",
            "S",
            "SE",
            "SW"
          ]
        }
      },
      {
        "system": false,
        "id": "mvarwi2o",
        "name": "parking_available",
        "type": "bool",
        "required": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "fzupcwqe",
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
    "listRule": "",
    "viewRule": "",
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("1h5daddlv4hic9r");

  return dao.deleteCollection(collection);
})
