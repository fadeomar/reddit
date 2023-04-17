const postSignup = (data) => {
  console.log({ data });
  fetch("/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((res) => console.log({ res }))
    .catch((err) => console.log({ err }));
  return true;
};