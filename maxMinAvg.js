function maxMinAvg(arr) {
    var arrnew=[];
    var max=-100000;
    var min=9999999;
    var sum=0;
    for(var i=0;i<arr.length;i++)
    {
        sum+=arr[i];
        if(arr[i]>max)
        {
            max=arr[i];
        }
        if(arr[i]<min)
        {
            min=arr[i];
        }
    }
    arrnew.push(max);
    arrnew.push(min);
    arrnew.push(sum/arr.length)
    return arrnew; 
}