import React from 'react';

export const chartOptions = [
    { value: '7', label: 'Past 7 Days'},
    { value: '30', label: 'Past 30 Days'},
    { value: '90', label: 'Past 90 Days'},
    { value: '180', label: 'Past 180 Days'},
 
  ];

 export const groupStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  };

 export const groupBadgeStyles = {
    backgroundColor: '#EBECF0',
    borderRadius: '2em',
    color: '#172B4D',
    display: 'inline-block',
    fontSize: 12,
    fontWeight: 'normal',
    lineHeight: '1',
    minWidth: 1,
    padding: '0.16666666666667em 0.5em',
    textAlign: 'center',
  };
  
  export const formatGroupLabel = data => (
    <div style={groupStyles}>
      <span>{data.label}</span>
      <span style={groupBadgeStyles}>{data.options.length}</span>
    </div>
  );

  export const groupedOptions = [
    {
      label: 'Time Period',
      options: chartOptions,
    },
 
  ];