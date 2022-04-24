import { updateTask, deleteTask } from '../../components/item/itemhelper';
import { fetchTasks } from '../../Redux/tasks/thunk/thunk';
import addTask from '../../components/addItem/addItemhelper';

describe('update task with given data', () => {
  test('update Task given correct data', async () => {
    const id = 11;
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

describe('delete task given his id', () => {
  test('delete task successfully', async () => {
    const result = await deleteTask(16);
    const res = await result.json();
    const { status } = res;
    expect(status).toBe('SUCCESS');
  });
});

describe('Add task given valid data', () => {
  test('Add task successfully', async () => {
    let today = new Date();
    today = `${today.getFullYear()}-${today.getMonth() + 1 < 10 ? `0${today.getMonth() + 1}` : today.getMonth() + 1}-${today.getDate()}`;
    const description = 'test task';
    const resp = await addTask(description, today);
    const result = await resp;
    const { status } = await result.json();
    expect(status).toBe('SUCCESS');
  });
});
