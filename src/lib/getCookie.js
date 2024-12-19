function getCookie(cookies, name) {
  let matches = cookies.flatMap((cookie) =>
    cookie.match(
      new RegExp(
        "(?:^|; )" +
          name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
          "=([^;]*)"
      )
    )
  );
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

export default getCookie;
