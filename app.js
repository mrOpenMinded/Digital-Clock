//Default Image:
document.getElementById("fntTxt").innerText="Sleep Early,Get Healthy & become Wealthy...";
    document.getElementById("displayImage").style.backgroundImage="url(./AlarmClck.jpg)";
    document.getElementById("displayImage").style.backgroundRepeat="no-repeat";
    document.getElementById("displayImage").style.backgroundPositionX="38px";
    document.getElementById("displayImage").style.backgroundPositionY="25px";
//clock function
 function clock(){

let hours=document.getElementById("hr");
let minutes=document.getElementById("min");
let seconds=document.getElementById("sec");
let dayNight=document.getElementById("amPm");

let time=new Date();
let lhours=time.getHours();
let lminutes=time.getMinutes();
let lseconds=time.getSeconds();
 


if(lhours>=12){
    hours.innerHTML=lhours-12;
    dayNight.innerHTML="PM";
}
else{
    hours.innerHTML=lhours;
    dayNight.innerHTML="AM";
}

minutes.innerHTML=lminutes;
seconds.innerHTML=lseconds;


 }
setInterval(clock,1000);
 let flag=0;//used when range of any drop-down is chnaged without refreshing the page
function MakeDiv(){
    if(flag==0){
    let container=document.createElement("div");
    container.id="dynamic-block";
    container.className="dynamicD";
    document.getElementById("makeDiv").appendChild(container);
    flag=1;
    }
    // let container1=document.createElement("br");
    let invalue=document.getElementById("opt-value");
    let value=invalue.options[invalue.selectedIndex].text;
    let invalue1=document.getElementById("opt-value1");
    let value1=invalue1.options[invalue1.selectedIndex].text;
    let invalue2=document.getElementById("opt-value2");
    let value2=invalue2.options[invalue2.selectedIndex].text;
    let invalue3=document.getElementById("opt-value3");
    let value3=invalue3.options[invalue3.selectedIndex].text;
    console.log(value+" "+value1+" "+value2+" "+value3);
    document.getElementById("dynamic-block").innerText="Wake Up Time: "+value+"\n"+"Lunch Time: "+value1+"\n"+"Nap Time: "+value2+"\n"+"Sleep Time: "+value3;
};

function settime(){
    let wakeup=document.getElementById("opt-value").value;
    let dinner=document.getElementById("opt-value3").value;
    let lunch=document.getElementById("opt-value1").value;
    let evening=document.getElementById("opt-value2").value;
    let gap=new Date().getHours();
    let actlhrs;
    if(gap>=12){
    actlhrs=gap-12;

    }
    else{
        actlhrs=gap;
    }
    // console.log(actlhrs+" "+wakeup+" "+lunch+" "+evening+" "+dinner);
   
    if(Number(wakeup)==actlhrs){
    document.getElementById("fntTxt").innerText="Let's have some healthy breakfast.!!!";
    document.getElementById("displayImage").style.backgroundImage="url(./morning.jpg)";
    document.getElementById("displayImage").style.backgroundRepeat="no-repeat";
    document.getElementById("displayImage").style.backgroundPositionX="95px";
    document.getElementById("displayImage").style.backgroundPositionY="30px";
    
}


  else if(Number(lunch)==actlhrs){
    document.getElementById("fntTxt").innerText="Let's have some healthy lunch.!!!";
    document.getElementById("displayImage").style.backgroundImage="url(./After.jpg)";
    document.getElementById("displayImage").style.backgroundRepeat="no-repeat";
    document.getElementById("displayImage").style.backgroundPositionX="38px";//38
    document.getElementById("displayImage").style.backgroundPositionY="25px";//25
  }

 else if(Number(evening)==actlhrs){
    document.getElementById("fntTxt").innerText="Stop Yawning, Get Some Tea.. It's Just Evening";
    document.getElementById("displayImage").style.backgroundImage="url(./snack.jpg)";
    document.getElementById("displayImage").style.backgroundRepeat="no-repeat";
    document.getElementById("displayImage").style.backgroundPositionX="23px";//23
    document.getElementById("displayImage").style.backgroundPositionY="13px";//13
    
}

  else if(Number(dinner)==actlhrs){
    document.getElementById("fntTxt").innerText="Close Your Eyes and Let's Go to Sleep";
    document.getElementById("displayImage").style.backgroundImage="url(./dinner.jpg)";
    document.getElementById("displayImage").style.backgroundRepeat="no-repeat";
    document.getElementById("displayImage").style.backgroundPositionX="38px";//38
    document.getElementById("displayImage").style.backgroundPositionY="25px";//25
    
}
else{
    document.getElementById("fntTxt").innerText="Come On,Let's Plan the Day.!!!";
    document.getElementById("displayImage").style.backgroundImage="url(./Planner.jpg)";
    document.getElementById("displayImage").style.backgroundRepeat="no-repeat";
    document.getElementById("displayImage").style.backgroundPositionX="95px";//38
    document.getElementById("displayImage").style.backgroundPositionY="15px";//25
}

MakeDiv();
};



