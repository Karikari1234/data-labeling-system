var ele = document.getElementById("form");

fetch("./data/sessionValue.json")
  .then((response) => {
    return response.json();
  })
  .then((sessionNumber) => {
    fetch("./data/sample2.json")
      .then((response) => {
        return response.json();
      })
      .then((jsondata) => {
        console.log(
          fetchSingleJSONObjFromJSONArray(jsondata, sessionNumber["number"])
        );
        document.getElementById("question").innerHTML = `${
          fetchSingleJSONObjFromJSONArray(jsondata, sessionNumber["number"])[
            "question"
          ]
        }`;
        document.getElementById("context").innerHTML =
          fetchSingleJSONObjFromJSONArray(jsondata, sessionNumber["number"])[
            "context"
          ];
      });
  });

if (ele.addEventListener) {
  ele.addEventListener("submit", callback, false); //Modern browsers
} else if (ele.attachEvent) {
  ele.attachEvent("onsubmit", callback); //Old IE
}

function callback() {
  var short_answer = document.getElementById("short_answer").value;
  var long_answer = document.getElementById("long_answer").value;

  data = {
    context: document.getElementById("context").innerHTML,
    question: document.getElementById("question").innerHTML,
    short_answer: short_answer,
    long_answer: long_answer,
  };

  fetch("http://localhost:3000/new/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(data),
  })
    .then(function (response) {
      // The API call was successful!
      if (response.ok) {
        return response.json();
      } else {
        return Promise.reject(response);
      }
    })
    .then(function (data) {
      // This is the JSON from our response
      console.log(data);
    })
    .catch(function (err) {
      // There was an error
      console.warn("Something went wrong.", err);
    });

  alert(`Form submitted!\n\nData:\n${short_answer}\n${long_answer}`);
}

function fetchSingleJSONObjFromJSONArray(jsonObj, number) {
  return jsonObj[number];
}
