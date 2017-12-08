let timingTask = require('.')

timingTask(
   {
      month: {
         "5": {
            "1": ["23:15"],
            "21": ["23:15"],
            "*": ["15:00"],
         }
      },
      loop: true,
      task() {
         return
      }
   },
   {
      week: {
         "1": ['12:35', '11:5'],
         "3": '4h',
         "5": '12h',
         "7": '5h',
         "*": '3h',
      },
      task() {
         return
      }
   },
   {
      day: ['5:30', '12:30'],
      loop: true,
      task() {
         return
      }
   },
   {
      hour: [10, 30, 50],
      loop: true,
      task() {
         return
      }
   },
   {
      minute: [30, 50],
      loop: true,
      task() {
         return
      }
   },
   {
      second: [125, 333],
      loop: true,
      task() {
         return
      }
   },
)

timingTask.add(
   {
      minute: [30, 50],
      loop: true,
      task() {
         return
      }
   },
   {
      second: [125, 333],
      loop: true,
      task() {
         return
      }
   }
)