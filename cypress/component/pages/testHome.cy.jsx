import Home from '../../../src/pages/home';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../../src/state/store';

describe('Tests Home page', () => {
  beforeEach(() => {
    cy.mount(
      <BrowserRouter>
        <Provider store={store}>
          <Home />
        </Provider>
      </BrowserRouter>
    )
  })
  it('checks home page title', () => {
    cy.get('h1').should('have.text','Pokèbook')
  })

  it('checks home page description', () => {
    cy.get('p').should('have.text', 'Largest Pokèmon index with information about every pokemon you can think of')
  })
});