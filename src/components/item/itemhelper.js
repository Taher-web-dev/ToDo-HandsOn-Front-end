const url = 'https://afternoon-anchorage-40437.herokuapp.com/api/v1/tasks/';
export const updateTask = (id, task) => {
  const itemUrl = `${url}${id}`;
  return (fetch(itemUrl, {
    method: 'PUT',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({ task }),
  }));
};