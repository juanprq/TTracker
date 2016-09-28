const React = require('react');
const DayLink = require('./DayLink');

function DaySelector({ currentDate }) {
  let dates = [];

  for (let i = -2; i <= 2; i += 1) {
    const date = new Date(currentDate.getTime());
    date.setDate(date.getDate() + i);
    dates.push(date);
  }

  return (
    <div className="center-align">
        <ul className="pagination">
          {dates.map((date, index) => <DayLink date={date} key={index} isActive={date.getTime() === currentDate.getTime()} />)}
        </ul>
    </div>
  );
}

module.exports = DaySelector;
