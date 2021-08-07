exports.batch = (promises, count = 5) => {
  return promises.reduce((acc, cur, i) => {
    const batchId = Math.floor(i / count);
    if (!acc[batchId]) {
      acc[batchId] = []
    }
    acc[batchId].push(cur)
    return acc
  }, [])
}

exports.runBatch = async (batch) => {
  let totalResult = []
  const lastRes = await batch.reduce(async (acc, cur, i) => {
    const res = await acc
    console.log(`batch ${i + 1}`)
    totalResult.push(...res)
    return Promise.all(cur.map(f => f()))
  }, Promise.resolve([]))

  totalResult.push(...lastRes)

  return totalResult
}