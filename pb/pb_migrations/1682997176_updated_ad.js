migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vl0xf2sus2z98o3")

  collection.name = "ads"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vl0xf2sus2z98o3")

  collection.name = "ad"

  return dao.saveCollection(collection)
})
