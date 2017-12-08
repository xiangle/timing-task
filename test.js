let timingTask = require('.')

timingTask(
   {
      "month": {
         "5": {
            "1": '4h',
            "21": ["11:30", "23:15"],
         },
         "8": {
            "*": "3h",
         },
         "11": {
            "*": "8:00",
         }
      },
      "repeat": true,
      task() {
         return
      }
   },
   {
      "month": {
         "*": {
            "1": "15:00",
            "3": "15:00",
         }
      },
      "repeat": true,
      task() {
         return
      }
   },
   {
      "week": {
         "mon": ['12:35', '11:05'],
         "tue": '4h',
         "wed": '12h',
         "thu": ['15:35', '16:05'],
         "fri": '5h',
         "sat": '5h',
         "sun": '5h',
      },
      task() {
         return
      }
   },
   {
      "week": {
         "*": ['12:35', '11:5'],
      },
      task() {
         return
      }
   },
   {
      "day": ['5:30', '12:30'],
      "repeat": true,
      task() {
         return
      }
   },
   {
      "hour": [10, 30, 50],
      "repeat": true,
      task() {
         return
      }
   },
   {
      "minute": [30, 50],
      "repeat": true,
      task() {
         return
      }
   },
   {
      "second": [125, 333],
      "repeat": true,
      task() {
         return
      }
   },
)

timingTask.add({
   second: [125, 333],
   repeat: true,
   task() {
      return 666;
   }
})

console.log(timingTask.schedule)