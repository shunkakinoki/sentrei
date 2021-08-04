export const postWaitlist = (email: string): void => {
  void fetch(
    "https://docs.google.com/forms/u/1/d/e/1FAIpQLSdOH0zzhLXaOICJgJZ0DjXBXplWMG3h6iwnq95_3kJBEZ8AGw/formResponse",
    {
      body: `entry.1490097005=${email}`,
      credentials: "include",
      headers: {
        "Access-Control-Allow-Methods": "POST",
        "Access-Control-Allow-Origin": "*",
        "content-type": "application/x-www-form-urlencoded",
      },
      method: "POST",
      mode: "no-cors",
    },
  )
    .catch(err => {
      console.error(err);
    })
    .then(res => {
      return console.log(res);
    });
};
