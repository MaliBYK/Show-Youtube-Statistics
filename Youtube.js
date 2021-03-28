class Youtube {
  getSubscribers(channelKey, apiKey) {
    return new Promise((resolve, reject) => {
      fetch(
        `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${channelKey}&key=${apiKey}`
      )
        .then(response => response.json())
        .then(data => {
          resolve(data["items"][0].statistics.subscriberCount);
        })
        .catch(err => reject(err));
    });
  }
}
