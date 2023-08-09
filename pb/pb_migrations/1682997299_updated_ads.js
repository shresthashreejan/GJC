migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vl0xf2sus2z98o3")

  collection.listRule = ""
  collection.viewRule = null

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vl0xf2sus2z98o3")

  collection.listRule = null
  collection.viewRule = ""

  return dao.saveCollection(collection)
})
