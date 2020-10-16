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
    const timeSince =
      secondsSince < 43200
        ? `${Math.round(secondsSince / 3600)}h`
        : `${Math.round(secondsSince / 43200)}d`;
    return {
      timeSince,
      fullTime: timeCreated.toLocaleString('en-GB', { timeZone: 'UTC' }),
    };
  }, [createdUTC]);
  return (
    <span className={className}>
      {timestampData.timeSince}
      {showFullTime && ` - ${timestampData.fullTime}`}
    </span>
  );
};

export default Timestamp;
