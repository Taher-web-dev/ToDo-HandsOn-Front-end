import updateTask from '../../components/item/itemhelper';

describe('update task with given data', () => {
  test('update Task given correct data', async () => {
    const id = 1;
    const task = {
      done: true,
    };
    const resp = await updateTask(id, task);
    const result = await resp.json();
    const { status } = result;
    expect(status).toBe('SUCCESS');
  });
});
