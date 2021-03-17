import { alias, action, createStore } from '../src';

const model = {
  todo: [],
  add: action((state, payload) => {
    state.todo.push(payload);
  }),
  addAsync: alias(async (actions, payload) => {
    actions.add(payload);
    return true;
  }),
};

const store = createStore(model);

test('check created alias', () => {
  expect(typeof store.getActions().addAsync).toBe('function');
  expect(store.getActions().addAsync.type).toBe('@alias.addAsync');
});

test('dispatch alias', async () => {
  const content = 'new todo';
  await store.getActions().addAsync(content);
  expect(store.getState().todo[0]).toBe(content);
});

test('dispatch alias', async () => {
  const content = 'new todo';
  await store.getActions().addAsync(content);
  expect(store.getState().todo[0]).toBe(content);
});
