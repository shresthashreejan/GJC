migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("elmzqgdif2k08k1")

  collection.listRule = null

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("elmzqgdif2k08k1")

  collection.listRule = ""

  return dao.saveCollection(collection)
})
