const utilities = {};

utilities.setPageAPIURL = function() {
  const fullURL = [...window.location.href.split("/")];
  let removedPageSlug;
  var ENV = fullURL.some(function(v) {
    return v.indexOf("localhost") >= 0;
  });
  if (ENV) {
    removedPageSlug = fullURL.slice(0, fullURL.length - (fullURL.length - 4));
  } else {
    removedPageSlug = fullURL.slice(0, fullURL.length - (fullURL.length - 3));
  }
  const URL = removedPageSlug.join("/");
  console.log(URL);
  return URL;
};

export default utilities;
