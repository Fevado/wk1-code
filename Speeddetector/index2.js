function speedLimit(speed){
     const Speedlimit= 70;
     const kmDemeritPoint=5;
     const maxDemeritPoint=12;
     if (speed<=Speedlimit){
        console.log('Ok');
     }else {const demeritPoint=((speed-Speedlimit)/kmDemeritPoint);
    if (demeritPoint> maxDemeritPoint){
    console.log('License suspended')
  } else { 
    console.log(demeritPoint+1)
  } 
}
}
   // testing the program
   speedLimit(70)
   speedLimit(85)
   speedLimit(300)