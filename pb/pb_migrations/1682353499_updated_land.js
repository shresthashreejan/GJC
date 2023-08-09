migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("olsfws98tb37n45")

  collection.viewRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("olsfws98tb37n45")

  collection.viewRule = null

  return dao.saveCollection(collection)
})
