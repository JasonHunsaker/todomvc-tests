/// <reference types="cypress" />
import * as todoPage from '../page-objects/todo-page'


describe('visual validation', () => {
    before(() => todoPage.navigate())

    beforeEach(() => cy.eyesOpen({appname: 'TAU TodoMVX', batchName: 'TAU TodoMVC Hey!'}))
    afterEach(() => cy.eyesClose())
    it('should look good', () => {
        cy.eyesCheckWindow('empty todos list')

        todoPage.addTodo('Clean room')
        todoPage.addTodo('Learn JavaScript')

        cy.eyesCheckWindow('two todos')

        todoPage.toggleTodo(0)

        cy.eyesCheckWindow('mark as completed')
    })
})