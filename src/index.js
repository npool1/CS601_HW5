async function fetchDegrees(url) {
  const response = await fetch(url);
  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }
  const degrees = await response.json();
  for(var degree in degrees.college_degrees_earned){
    document.write(
      `My ${degree.Type} degree is from ${degree.School}`
    )
  }
}

fetchDegrees("./src/degrees.json").catch(error => {
  document.write(`${error.message}`) // 'An error has occurred: 404'
});

