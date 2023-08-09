migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("elmzqgdif2k08k1")

  collection.viewRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("elmzqgdif2k08k1")

  collection.viewRule = null

  return dao.saveCollection(collection)
})
