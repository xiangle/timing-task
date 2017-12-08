let methods = {
   month(options) {
      parser.schedule.push(options)
      // if (month["*"]) {
      //    for (let day in month["*"]) {
      //       let value = month["*"][day]
      //       if (value instanceof Array) {
      //          parser.schedule.push(...value)
      //       } else {
      //          parser.schedule.push(value)
      //       }
      //    }
      // } else {
      //    parser.schedule.push(option)
      //    for (let name in month) {
      //       let option = month[name]
      //       for (let day in option) {
      //          let value = option[day]
      //          if (value instanceof Array) {
      //             parser.schedule.push(...value)
      //          } else {
      //             parser.schedule.push(value)
      //          }
      //       }
      //    }
      // }
   },
   week(options) {
      parser.schedule.push(options)
      // for (let name in minute) {
      //    let value = minute[name]
      //    if (value instanceof Array) {
      //       parser.schedule.push(...value)
      //    } else {
      //       parser.schedule.push(value)
      //    }
      // }
   },
   day(options) {
      parser.schedule.push(options)
   },
   hour(options) {
      parser.schedule.push(options)
   },
   minute(options) {
      parser.schedule.push(options)
   },
   second(options) {
      parser.schedule.push(options)
   },
}

function parser(...options) {
   for (let item of options) {
      for (let name in item) {
         if (methods[name]) {
            methods[name](item)
            break
         }
      }
   }
}

parser.add = function (...options) {
   parser(...options)
   return parser
}

parser.schedule = []

module.exports = parser