function arrayToTree(data) {
  let result = []
  if (!Array.isArray(data)) {
    return result
  }
  if (!data.length) {
    return result
  }
  let map = {}
  data.forEach(item => {
    map[item.id] = item
  });
  console.log("map", map)
  data.forEach(item => {
    let parent = map[item.parent]
    if (parent) {
      (parent.children || (parent.children = [])).push(item)
    } else {
      // 顶级节点
      result.push(item)
    }
  })
  return result
}
module.exports = {
  arrayToTree
}