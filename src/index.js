async function getDegrees(url) {
  // fetch the url
  const response = await fetch(url)
  console.log(response)
    //get your data here, and check for the response status. If it's not 200, throw an error
    // .then((response) => response.json())
    // .then((college_degrees_earned) =>
    //   document.write(
    //     //`My first degree was a ${data.data[0].degrees.bachelors.data.type} from ${data.data[0].degrees.bachelors.data.institution} in ${data.data[0].degrees.bachelors.data.date}`
    //     `hello ${college_degrees_earned.college_degrees_earned[0].degree.School}`
    //   )
    // );
}

async function fetchDegrees(url) {
  const response = await fetch(url);
  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }
  const degrees = await response.json();
  return degrees;
}

fetchDegrees(url).catch(error => {
  error.message; // 'An error has occurred: 404'
});

fetchDegrees("./src/degres.json");
//getDegrees("./src/degrees.json");
