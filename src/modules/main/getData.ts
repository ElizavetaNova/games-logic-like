export async function getData() {
  const data = await fetch('https://logiclike.com/docs/courses.json', {
    method: 'GET',
    // headers: {
    //   'Accept': 'application/json',
    //   'Content-Type': 'application/json'
    // },
  });
  const games = await data.json();
  return games;
}
