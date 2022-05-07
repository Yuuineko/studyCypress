// load type definition module from cypress module
///  <reference types= "cypress" />  

type ShowcaseAttributes = {
    name: string
    highlight?: boolean
}


declare namespace Cypress{
    interface Chainable{
        //*custom command to visit google page *//

        google(): Chainable <Window>
    
    
        //*custom command to check banner in page*//
      //  @example cy.shouldRenderBanner()//
      shouldRenderBanner(): Chainable <Element>
    
    
        //*custom command to check showcase in page*//
      //  @example cy.shouldRenderShowcase()//
      shouldRenderShowcase(attrs: ShowcaseAttributes): Chainable<Element>
    }
}