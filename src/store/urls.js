const serverUrl =
  process.env.NODE_ENV === "development"
    ? "//151.248.122.207:8080"
    : "//stroy-assist-backend.ru:8443";

export let userUrls = {
  feedback: `${serverUrl}/api/public/mail/food/send`
};
