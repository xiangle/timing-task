let taskQueue = []

let methods = {
   hour(item) {
      console.log(item)
   },
   day() {

   },
   week() {

   },
   perMonth() {

   }
}

function traversal(...values) {
   taskQueue.push(...values)
   let nowTime = new Date()
   let RecentTime
   for (let item of taskQueue) {
      let method = methods[item.cycle]
      if (method) {
         method(item)
      }
   }
}

traversal.add = function (...values) {

   traversal(...values)
   return traversal

}

module.exports = traversal