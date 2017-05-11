import request from '../../utils/request';

export function speculateImage(imageData) {
  console.log(JSON.stringify(imageData));
  return request('/api/games/recognizer', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    },
    body: JSON.stringify(imageData),
    processData: false,
  });
}
