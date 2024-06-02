class ToDoList {
 //Locators
  getModal(){
    return cy.get('.column ')
  }

  getPanelHeading(){
   return cy.get('.panel > p')
  }

  getInputNewToDo(){
    return cy.get('#input-add')
  }

  getAddButton(){
    return cy.get('#add-btn')
  }

  getSearchField(){
    return cy.get('#search')
  }

  getTaskList(){
    return cy.get('.todo-item > p')
  }
  getToDoList1(){
    return cy.get('.mr-auto')
  }

  getRemoveButton1(){
    return cy.get('#panel > div > span')
  }
 getDesignatedRemoveButton(){
  return cy.get('#clear')
 }

 getToDoItem(){
  return cy.get('.todo-item > p')
 }

 getAllTasks(){
  return cy.get('#panel > div > div')
 }

 getNoTasksFound(){
  return cy.get('.todo-item > p')
 }

 getErrorMessage(){
  return cy.get('.notification')
 }

 getTaskPanel(){
  return cy.get('#panel')
 }

 



  // Methods



  clickAddButton(){
  this.getAddButton().click();
}

  /**
   * Click to compleat first task 
   */
clickCompleat1Task(){
  this.getToDoList1().click()
}

  /**
   * Click to remove first task 
   */
cliskONTheRemoveButton1(){
  this.getRemoveButton1().click()
}
/**
 * 
 * 
 */
clickOnDesignatedRemoveButton(){
   this.getDesignatedRemoveButton().click()
}










}

export default ToDoList;