import updateTask from '../../components/item/itemhelper';
import { fetchTasks } from '../../Redux/tasks/thunk/thunk';

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

describe('fetch tasks from the back-end', () => {
  test('fetch tasks successfully', async () => {
    const result = await fetchTasks();
    const res = await result.json();
    expect(res).toBeInstanceOf(Object);
  });
});
