export const checkStatus = (response) => {
  if (response.status >= 200 && response.status < 400 && response) {
    return response
  } else {
    const error = new Error(response.statusText)
    error.response = response
    throw error
  }
}

export const parseJSON = (response) => response.json()

export const checkSuccess = (json) => {
  if (json.success) {
    return json.data
  } else {
    throw new Error(json.error.message)
  }
}
