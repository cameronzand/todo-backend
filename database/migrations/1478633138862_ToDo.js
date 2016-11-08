'use strict'

const Schema = use('Schema')

class ToDoTableSchema extends Schema {

  up () {
    this.create('ToDo', (table) => {
      table.increments()
      table.integer('User_Id')
      table.timestamps()
      table.string("Name")
    })
  }

  down () {
    this.drop('ToDo')
  }

}

module.exports = ToDoTableSchema
