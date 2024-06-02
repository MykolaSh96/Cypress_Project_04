/// <reference types="cypress" />
import ToDoList from "../../../page/TodoList"
const toDoList = new ToDoList();

describe("Cypress_Project_04", () =>{
  
  
  beforeEach(()=>{
    cy.visit('https://www.techglobal-training.com/frontend/project-6')
  })


it('Test Case 01 - Todo-App Modal Verification', ()=>{
  /**
   * Navigate to https://techglobal-training.com/frontend/project-6.
     Confirm that the todo-app modal is visible with the title “My Tasks.”
     Validate that the New todo input field is enabled for text entry.
     Validate ADD button is enabled.
     Validate Search field is enabled.
     Validate that the task list is empty, displaying the message “No tasks found!”
   */
   
   toDoList.getModal().should('be.visible')
   toDoList.getPanelHeading().should('have.text', "My Tasks")
   toDoList.getInputNewToDo().should('be.visible').and('be.enabled')
   toDoList.getAddButton().should('be.visible').and('be.enabled')
   toDoList.getSearchField().should('be.visible').and('be.enabled')
   toDoList.getTaskList().should('be.visible').and('have.text', 'No tasks found!')

})

it('Test Case 02 - Single Task Addition and Removal',() =>{

  /**
   * Navigate to https://techglobal-training.com/frontend/project-6
     Enter a new task in the todo input field and add it to the list.
     Validate that the new task appears in the task list.
     Validate that the number of tasks in the list is exactly one.
     Mark the task as completed by clicking on it.
     Validate item is marked as completed.
     Click on the button to remove the item you have added.
     Remove the completed task by clicking the designated removal button.
     Validate that the task list is empty, displaying the message “No tasks found!”.
   */
  toDoList.getInputNewToDo().type('Learn JavaScript')
  toDoList.clickAddButton()
  toDoList.getToDoList1().should('have.length',1)
  toDoList.clickCompleat1Task()
  
  //Validate item is marked as completed.??????????
  //toDoList.getToDoList1().should('have.class', 'completed')
  toDoList.cliskONTheRemoveButton1()
  toDoList.getInputNewToDo().clear()
  toDoList.getInputNewToDo().type('Learn Cypress')
  toDoList.clickAddButton()
  toDoList.getToDoList1().should('have.length',1)
  toDoList.clickCompleat1Task()
  toDoList.clickOnDesignatedRemoveButton()
  toDoList.getTaskPanel().should('not.exist')
  toDoList.getToDoItem().should('have.text', "No tasks found!")
  toDoList.getInputNewToDo().clear()
})



it('Test Case 03 - Multiple Task Operations', ()=>{
  /**
   * Navigate to https://techglobal-training.com/frontend/project-6
     Enter and add 5 to-do items individually.
     Validate that all added items match the items displayed on the list.
     Mark all the tasks as completed by clicking on them.
     Click on the “Remove completed tasks!” button to clear them.
     Validate that the task list is empty, displaying the message “No tasks found!”.
   */
     const allToDoList = ['Learn Cypress','Learn HTML','Learn CSS','Do Homework','Record Flip Video'];
     
    
     toDoList.getInputNewToDo().type('Learn Cypress')
     toDoList.clickAddButton()
     toDoList.getInputNewToDo().clear()
     
     toDoList.getInputNewToDo().type('Learn HTML')
     toDoList.clickAddButton()
     toDoList.getInputNewToDo().clear()
     
     toDoList.getInputNewToDo().type('Learn CSS')
     toDoList.clickAddButton()
     toDoList.getInputNewToDo().clear()
     
     toDoList.getInputNewToDo().type('Do Homework')
     toDoList.clickAddButton()
     toDoList.getInputNewToDo().clear()
     
     toDoList.getInputNewToDo().type('Record Flip Video')
     toDoList.clickAddButton()
     toDoList.getInputNewToDo().clear()


    toDoList.getAllTasks().each(($el, index)=>{
      cy.wrap($el).should('be.visible').and('have.text',allToDoList[index])
    })

   toDoList.getAllTasks().each(($el)=>{
    cy.wrap($el).click()
  })
  
  toDoList.clickOnDesignatedRemoveButton()
  toDoList.getTaskPanel().should('not.exist')
  toDoList.getNoTasksFound().should('be.visible').and('have.text', 'No tasks found!')
})

it('Test Case 04 - Search and Filter Functionality in todo App', ()=>{
     /**
      * Navigate to https://techglobal-training.com/frontend/project-6
        Enter and add 5 to-do items individually.
        Validate that all added items match the items displayed on the list.
        Enter the complete name of the previously added to-do item into the search bar.
        Validate that the list is now filtered to show only the item you searched for.
        Validate that the number of tasks visible in the list is exactly one.
      */

     toDoList.getInputNewToDo().type('Learn Cypress')
     toDoList.clickAddButton()
     toDoList.getInputNewToDo().clear()
     
     toDoList.getInputNewToDo().type('Learn HTML')
     toDoList.clickAddButton()
     toDoList.getInputNewToDo().clear()
     
     toDoList.getInputNewToDo().type('Learn CSS')
     toDoList.clickAddButton()
     toDoList.getInputNewToDo().clear()
     
     toDoList.getInputNewToDo().type('Do Homework')
     toDoList.clickAddButton()
     toDoList.getInputNewToDo().clear()
     
     toDoList.getInputNewToDo().type('Record Flip Video')
     toDoList.clickAddButton()
     toDoList.getInputNewToDo().clear()

     toDoList.getSearchField().type('Learn Cypress')
     toDoList.getAllTasks().should('have.text','Learn Cypress')
     toDoList.getAllTasks().should('have.length', 1)
})

it('Test Case 05 - Task Validation and Error Handling',()=>{
/**
 * Navigate to https://techglobal-training.com/frontend/project-6
   Attempt to add an empty task to the to-do list.
   Validate that the task list is empty, displaying the message “No task found!”.
   Enter an item name exceeding 30 characters into the list.
   Validate error message appears and says “Error: Todo cannot be more than 30 characters!”.
   Add a valid item name to the list.
   Validate that the active task count is exactly one.
   Try to enter an item with the same name already present on the list.
   Validate that an error message is displayed, indicating “Error: You already have {ITEM} in your todo list.”.
 */

const item = ['Learn Cypress'];
toDoList.clickAddButton()
toDoList.getNoTasksFound().should('be.visible').and('have.text', 'No tasks found!')
toDoList.getInputNewToDo().type('We will try to put more than 30 characters in a search bar')
toDoList.clickAddButton()
toDoList.getErrorMessage().should('be.visible').and('have.text', 'Error: Todo cannot be more than 30 characters!' )
toDoList.getInputNewToDo().clear()

toDoList.getInputNewToDo().type('Learn Cypress')
toDoList.clickAddButton()
toDoList.getInputNewToDo().clear()
toDoList.getAllTasks().should('have.length', 1)
toDoList.getInputNewToDo().type('Learn Cypress')
toDoList.clickAddButton()
toDoList.getErrorMessage().each(($el, index) => {
cy.wrap($el).should('contain', `Error: You already have ${item[index]} in your todo list.`);

})

})


})