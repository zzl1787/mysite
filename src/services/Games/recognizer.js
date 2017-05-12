import request from '../../utils/request';

export function speculateImage(formData) {
  return request('/api/games/recognizer', {
    method: 'POST',
    body: formData,
    processData: false,
    enctype: "multipart/form-data",
    cache : false,
    contentType: false,
  });
}
