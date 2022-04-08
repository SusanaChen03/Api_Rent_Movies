
const swDocument = 
{
  "openapi": "3.0.1",
  "info": {
    "title": "ToDoList",
    "description": "Este es un ejemplo sobre la creación de un TODOLIST",
    "contact": {
      "email": "paco.gomez.arnal@gmail.com"
    },
    "version": "0.1.0"
  },
  "tags": [
    {
      "name": "tareas",
      "description": "Tareas planificadas"
    },
  ],
  "paths": {
    "/tareas": {
      "get": {
        "tags":[
          "tareas"
        ],
        "summary": "Todas las tareas",
        "description": "Devuelve todas las tareas existentes",
        "responses": {
          "200": {
            "description": "successful operation",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Tareas"
                }
              }
            }
          },
          "400": {
            "description": "Invalid ID supplied",
            "content": {}
          },
          "404": {
            "description": "Pet not found",
            "content": {}
          }
        },
        "security": [
          {
            "api_key": []
          }
        ]
      },
      "post": {
        "tags":[
          "tareas"
        ],
        "summary": "Añade una nueva tarea",
        "requestBody": {
          "description": "Objeto tarea para añadir a las tareas",
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/Tarea"
              }
            }
          },
          "required": true
        },
        "responses": {
          "200": {
            "description": "successful operation",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Tareas"
                }
              }
            }
          },
          "400": {
            "description": "Invalid ID supplied",
            "content": {}
          },
          "404": {
            "description": "Pet not found",
            "content": {}
          }
        },
        "security": [
          {
            "api_key": []
          }
        ]
      }
    },
    "/tareas/{id}": {
      "get": {
        "tags":[
          "tareas"
        ],
        "summary": "Encuentra una tarea",
        "description": "Busca y devuelve una tarea con el id como parámetro",
        "parameters":[
        {
          "name": "id",
          "description": "id de la tarea",
          "in": "path",
          "required": true,
          "schema":{
            "type": "integer",
            "format": "int64"
          }
        }],
        "responses": {
          "200": {
            "description": "successful operation",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Tarea"
                }
              }
            }
          },
          "500": {
            "description": "Problem returning tasks",
            "content": {}
          },
        },
        "security": [
          {
            "api_key": []
          }
        ]
      }
    },    
  },
  "components": {
    "schemas": {
      "Tareas": {
        "type": "array",
        "items": {
            "$ref": "#/components/schemas/Tarea"
        }
      },
      "Tarea": {
        "type": "object",
        "properties": {
          "idtarea": {
            "type": "integer"
          },
          "nombre": {
            "type": "string"
          },
          "descripcion": {
            "type": "string"
          },
          "fecha_ini": {
            "type": "string",
            "format": "date"
          }
        }
      }
    },
  }
}

export default swDocument;