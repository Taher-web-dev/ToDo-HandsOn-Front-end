import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Todo from '../../components/todo/todo';

const mockStore = configureStore([]);
describe('Render correctly addItem component', () => {
  let store;
  let tree;
  beforeEach(() => {
    store = mockStore({
      alert: null,
      tasks: {},
      item: 'display',
    });
    store.dispatch = jest.fn();
    tree = render(
      <Provider store={store}>
        <Todo />
      </Provider>
    );
  });
  it('should render with given state from redux store', () => {
    expect(tree).toMatchSnapshot();
  });
});
