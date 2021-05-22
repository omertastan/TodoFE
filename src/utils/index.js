export const setLocalStorage = (id, data) =>
  typeof window !== undefined && localStorage?.setItem(id, JSON.stringify(data))

export const getLocalStorage = (id) => {
  if (typeof window !== undefined) {
    return JSON.parse(localStorage?.getItem(id))
  }
}

export const removeFromLocalStorage = (key) =>
  typeof window !== undefined && localStorage?.removeItem(key)
