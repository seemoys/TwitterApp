export const getTweets = (req, res) => {
  return res.json({
    message: "Welcome To The Tweet Route!!!",
  });
};

export const getTweetsById = (req, res) => {
  return res.json({
    message: "Welcome To The Tweet Route With ID!!!",
    id: req.params.id,
  });
};

export const createTweet = (req, res) => {
  return res.json({
    message: "Welcome To Create Tweets",
    body:req.body
  });
};
