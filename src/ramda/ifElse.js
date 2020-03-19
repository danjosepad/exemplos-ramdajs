const R = require('ramda');

const video = {
  '720p': 'video.mp4',
  '480p': 'video480.mp4',
  isHD: true
}

let getVideoFilePath = video => {
  const file = video.isHD ? video['720p'] : video['480p']
  
  return `/api/videos/${file}`;
}

// Com Ramda

getVideoFilePath = R.compose(
  R.concat('/api/videos/'),
  R.ifElse(
    R.propEq('isHD', true), // Condição
    R.prop('720p'), // Verdadeiro
    R.prop('480p') // Falso
  ) 
)

console.log(getVideoFilePath(video))