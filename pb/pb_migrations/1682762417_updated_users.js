migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6q5hhv9nyqa8h1o")

  collection.createRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6q5hhv9nyqa8h1o")

  collection.createRule = null

  return dao.saveCollection(collection)
})
