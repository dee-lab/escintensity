const CLIENT_RESULTS = Array.from({ length: 58 }, (_, index) => ({
  id: index + 1,
  image: `/client-results/${index + 1}.png`,
  alt: `ESC Coaching client progress comparison ${index + 1}`,
}))

export default CLIENT_RESULTS
