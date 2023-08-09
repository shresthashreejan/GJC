migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("s9fuupa77nzvq6v")

  collection.viewRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("s9fuupa77nzvq6v")

  collection.viewRule = null

  return dao.saveCollection(collection)
})
