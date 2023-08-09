migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("s9fuupa77nzvq6v")

  // add
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "suienyrb",
    "name": "contact_number",
    "type": "number",
    "required": true,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "craairrw",
    "name": "price",
    "type": "number",
    "required": true,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wcgtrk17",
    "name": "land_size",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "v2dxabzr",
    "name": "road_size",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ssbbzepk",
    "name": "bedroom",
    "type": "number",
    "required": true,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zvbd8tdo",
    "name": "bathroom",
    "type": "number",
    "required": true,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "caw9alms",
    "name": "living_room",
    "type": "number",
    "required": true,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "bbyutzsb",
    "name": "kitchen",
    "type": "number",
    "required": true,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("s9fuupa77nzvq6v")

  // remove
  collection.schema.removeField("pr96ilvw")

  // remove
  collection.schema.removeField("suienyrb")

  // remove
  collection.schema.removeField("craairrw")

  // remove
  collection.schema.removeField("wcgtrk17")

  // remove
  collection.schema.removeField("v2dxabzr")

  // remove
  collection.schema.removeField("ssbbzepk")

  // remove
  collection.schema.removeField("zvbd8tdo")

  // remove
  collection.schema.removeField("caw9alms")

  // remove
  collection.schema.removeField("bbyutzsb")

  return dao.saveCollection(collection)
})
