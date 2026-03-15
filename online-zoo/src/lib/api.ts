const API: string =
  "https://vsqsnqnxkh.execute-api.eu-central-1.amazonaws.com/prod"

async function getData(url: string, options?: RequestInit) {
  const res = await fetch(`${API}/${url}`, options)

  if (!res.ok) {
    const error = new Error(`HTTP error! Status: ${res.status}`) as Error & {
      status?: number
    }
    error.status = res.status
    throw error
  }

  const data = await res.json()
  return data
}

export default getData
