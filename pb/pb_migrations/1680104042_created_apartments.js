migrate((db) => {
  const collection = new Collection({
    "id": "bxoiiirk5ljftpr",
    "created": "2023-03-29 15:34:02.292Z",
    "updated": "2023-03-29 15:34:02.292Z",
    "name": "apartments",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "feejnzb8",
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
        "id": "l6voizhp",
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
        "id": "gx2tugil",
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
        "id": "oxjvqsdq",
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
        "id": "ovfzrazz",
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
        "id": "sgbxxxx2",
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
        "id": "tnyrqtnv",
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
        "id": "qtail7j2",
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
        "id": "gnatgtrs",
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
        "id": "19iq1txt",
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
        "id": "7pxsstjf",
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
        "id": "r0ujqqmr",
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
        "id": "zg9tfgxl",
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
        "id": "gm1euhd2",
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
        "id": "4c10s31j",
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
        "id": "dx0ro83z",
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
        "id": "v7ztfcwc",
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
        "id": "slzqrlve",
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
        "id": "mpxlq6rh",
        "name": "parking_available",
        "type": "bool",
        "required": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "tnn95ce4",
        "name": "parking_type",
        "type": "select",
        "required": false,
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
        "id": "hrq04fic",
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
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("bxoiiirk5ljftpr");

  return dao.deleteCollection(collection);
})
