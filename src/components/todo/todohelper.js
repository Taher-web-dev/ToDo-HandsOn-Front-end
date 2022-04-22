export const getTodaytask = (tasks) => {
  let todayTask = [];
  try {
    const { data } = tasks;
    let today = new Date();
    today = `${today.getFullYear()}-${today.getMonth() + 1 < 10 ? `0${today.getMonth() + 1}` : today.getMonth() + 1}-${today.getDate()}`;
    todayTask = data.filter((task) => task.day === today);
  } catch {
    todayTask = [];
  }
  return todayTask;
};

export const fulfilledTaskcompter = (todayTasks) => {
  const fulfilledTasks = todayTasks.filter((task) => task.done);
  return fulfilledTasks.length;
};
