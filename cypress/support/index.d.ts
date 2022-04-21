// load type definition module from cypress module
///  <reference types= "cypress" />  

declare namespace Cypress{
    interface Chainable{
        //*custom command to visit google page *//

        google(): Chainable <Window>
    }
}