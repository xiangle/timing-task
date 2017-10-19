let timingTask = require('./index.js')

timingTask(
   {
      cycle: 'hour',
      time: '1:30',
      lastTime: '3:15',
      tntervalDays: 2,
      method: function () {

      }
   },
   {
      cycle: 'day',
      time: '5:30',
      tntervalDays: 2,
      method: function () {

      }
   },
   {
      cycle: 'week',
      time: ['15:30', '6:30'],
      week: [1, 3, 5, 0],
      method: function () {

      }
   },
   {
      cycle: 'perMonth',
      method: function () {

      }
   }
)

timingTask.add({
   cycle: 'hour',
   time: '1:30',
   lastTime: '3:15',
   tntervalDays: 2,
   method: function () {

   }
})