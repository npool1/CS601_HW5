async function fetchDegrees(url) {
  const response = await fetch(url);
  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }
  const degrees = await response.json();
  document.write(
    `My first degree is from ${degrees.college_degrees_earned[0].School}`
  )
}

fetchDegrees("./src/degrees.json").catch(error => {
  document.write(`${error.message}`) // 'An error has occurred: 404'
});

