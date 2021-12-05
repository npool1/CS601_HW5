async function fetchDegrees(url) {
  const response = await fetch(url);
  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }
  const degrees = await response.json();
  degrees.college_degrees_earned.forEach(degree => {
    document.write(
      `My ${degree.degree.Type} degree is from ${degree.degree.School}`
    )
  })
}

fetchDegrees("./src/degrees.json").catch(error => {
  document.write(`${error.message}`) // 'An error has occurred: 404'
});

