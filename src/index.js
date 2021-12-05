async function getDegrees(url) {
  // fetch the url
  const response = await fetch(url)
  console.log(response.json())
  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }
    //get your data here, and check for the response status. If it's not 200, throw an error
    .then((response) => response.json())
    .then((college_degrees_earned) =>
      document.write(
        //`My first degree was a ${data.data[0].degrees.bachelors.data.type} from ${data.data[0].degrees.bachelors.data.institution} in ${data.data[0].degrees.bachelors.data.date}`
        `hello ${college_degrees_earned.college_degrees_earned[0].degree.School}`
      )
    );
}

getDegrees("./src/degrees.json");
