migrate((db) => {
  const collection = new Collection({
    "id": "6q5hhv9nyqa8h1o",
    "created": "2023-04-29 10:00:09.644Z",
    "updated": "2023-04-29 10:00:09.644Z",
    "name": "users",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "sdmnj1vf",
        "name": "first_name",
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
        "id": "osvqddql",
        "name": "last_name",
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
        "id": "jy0z5qor",
        "name": "phone_no",
        "type": "number",
        "required": false,
        "unique": true,
        "options": {
          "min": null,
          "max": null
        }
      },
      {
        "system": false,
        "id": "jstq1ejb",
        "name": "email",
        "type": "email",
        "required": false,
        "unique": true,
        "options": {
          "exceptDomains": null,
          "onlyDomains": null
        }
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("6q5hhv9nyqa8h1o");

  return dao.deleteCollection(collection);
})
