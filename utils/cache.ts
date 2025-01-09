const cache = new Map<string, { data: any; timestamp: number }>()

export function withCache<T>(
  key: string,
  fn: () => Promise<T>,
  ttl: number = 60000
): Promise<T> {
  const cached = cache.get(key)
  if (cached && Date.now() - cached.timestamp < ttl) {
    return Promise.resolve(cached.data)
  }

  return fn().then((data) => {
    cache.set(key, { data, timestamp: Date.now() })
    return data
  })
}

