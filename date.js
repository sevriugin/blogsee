exports.getDate = function() {

  const options = {
    day: "numeric",
    month: "long",
    year: "numeric"
  };

  return (new Date()).toLocaleDateString("en-US", options);
}

exports.getDay = function() {

  const options = {
    weekday: "long"
  };

  return (new Date()).toLocaleDateString("en-US", options);
}
