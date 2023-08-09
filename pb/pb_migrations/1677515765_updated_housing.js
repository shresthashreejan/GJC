migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("s9fuupa77nzvq6v")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zjrtlevf",
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
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "kjvkvwsv",
    "name": "description",
    "type": "editor",
    "required": true,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wb7ylhck",
    "name": "map",
    "type": "url",
    "required": true,
    "unique": false,
    "options": {
      "exceptDomains": [],
      "onlyDomains": []
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "pr96ilvw",
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
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("s9fuupa77nzvq6v")

  // remove
  collection.schema.removeField("zjrtlevf")

  // remove
  collection.schema.removeField("kjvkvwsv")

  // remove
  collection.schema.removeField("wb7ylhck")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "pr96ilvw",
    "name": "address",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "collectionId": "elmzqgdif2k08k1",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": [
        "province",
        "district",
        "location"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
