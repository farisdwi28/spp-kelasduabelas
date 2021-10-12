const wrapper = (payload) => {

  let wrap = {
    data: payload.data || 'null',
    message: payload.message || 'null',
    httpCode: payload.httpCode || '200'
  }

  return wrap;
}

module.exports = wrapper;