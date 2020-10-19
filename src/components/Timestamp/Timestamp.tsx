import React, { useMemo } from 'react';

export interface IProps {
  className?: string;
  createdUTC: number;
  showFullTime?: boolean;
}

export interface ITimestampData {
  timeSince: string;
  fullTime: string;
}

const Timestamp: React.FC<IProps> = ({
  className,
  createdUTC,
  showFullTime,
}): JSX.Element => {
  const timestampData = useMemo<ITimestampData>(() => {
    const timeCreated = new Date(createdUTC * 1000);
    const secondsSince = Math.round(new Date().getTime() / 1000) - createdUTC;
    let timeSince: string;
    if (secondsSince < 3600) {
      timeSince = `${Math.round(secondsSince / 60)}${
        showFullTime ? ' minutes ago' : 'm'
      }`;
    } else if (secondsSince < 43200) {
      timeSince = `${Math.round(secondsSince / 3600)}${
        showFullTime ? ' hours ago' : 'h'
      }`;
    } else {
      timeSince = `${Math.round(secondsSince / 43200)}${
        showFullTime ? ' days ago' : 'd'
      }`;
    }
    return {
      timeSince,
      fullTime: timeCreated.toLocaleString('en-GB', { timeZone: 'UTC' }),
    };
  }, [createdUTC]);
  return (
    <span className={className}>
      {timestampData.timeSince}
      {showFullTime && ` (${timestampData.fullTime})`}
    </span>
  );
};

export default Timestamp;
