import request from '../../utils/request';

export function speculateImage() {
  return request('/api/games/recognizer', {
    method: 'POST',
  });
}
