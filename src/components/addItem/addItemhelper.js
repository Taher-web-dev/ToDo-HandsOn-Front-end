const addTask = (desc, dt) => {
  const url = 'https://afternoon-anchorage-40437.herokuapp.com/api/v1/tasks/';
  const task = {
    description: desc,
    day: dt,
  };
  return (fetch(url, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({ task }),
  }));
};

export default addTask;
