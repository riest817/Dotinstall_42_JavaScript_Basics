'use strict';

{
  const str = 'hello';
  console.log(str.substring(2, 4));

  const t = '17:08:24';
  console.log(t.split(':'));
  const [hour, minute, second] = t.spilit(':');
  console.log(hour);
  console.log(minute);
  console.log(second);
}