import React from 'react';
import DayLink from './DayLink';

function formatDate(date) {
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
}

function DaySelector({ currentDate }) {
  const dates = [];

  for (let i = -2; i <= 2; i += 1) {
    const date = new Date(currentDate.getTime());
    date.setDate(date.getDate() + i);
    dates.push(date);
  }

  return (
    <div className="center-align">
        <ul className="pagination">
          {dates.map((date, index) => <DayLink date={formatDate(date)} key={index} isActive={date.getTime() === currentDate.getTime()} />)}
        </ul>
    </div>
  );
}

DaySelector.propTypes = {
  currentDate: React.PropTypes.object,
};

module.exports = DaySelector;
