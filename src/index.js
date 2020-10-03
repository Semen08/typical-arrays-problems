exports.min = function min (array) {
  min1 = 0;
  if (array && array.length !== 0) {
  for (i = 0; i < array.length; ++i)
    {
      if (array[i] < min1) min1 = array[i];
      
        
    }
    return min1;
  } 
  else 
  {
    return 0
  }
  }

exports.max = function max (array) {
  max1 = 0;
  if (array && array.length !== 0) {
  for (i = 0; i < array.length; ++i)
  {
  if (array[i] > max1) max1 = array[i];
  }
  
  return max1;
} 
else 
{
  return 0
}
}

exports.avg = function avg (array) {
 
  
  sum = 0;
  avg1 = 0;

if (array && array.length !== 0) {
  
  for (i = 0; i < array.length; ++i)
  {
  sum += array[i];
  
  }
  avg1 = sum / array.length;
  
  
 return avg1;
} 
else 
{
  return 0
}

}
