export default async (
  url,
  method='GET',
  {
    body = {},
    headers
  } = {}
) => {
  const options = {
    method,
    headers: {
      ...headers
    }
  }

  options.headers.Accept = 'application/json'
  options.headers['content-type'] = 'application/json'
  
  // options.headers['Content-Type'] = 'application/json'
  // dissalow body inclusion for methods that don't support it
  if(method !== 'GET' && method !== 'DELETE') {
    options.body = JSON.stringify(body)
  }

  const response = await fetch(url, options)
  const contentType = response.headers.get('content-type')

  if(response.status === 401) {
    throw new Error(response.status)
  }

  if(response.status >= 400) {
    const text = await response.text()
    throw new Error(text)
  }

  // including the deleted resource is usefull for any further actions
  if(response.status === 204) return {result: body}

  if(contentType && contentType.indexOf('application/json') !== -1) {
    return await response.json()
  }

  return await response.text()
}
