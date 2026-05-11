
let riskChart;

function calculateRisk(){
let score=0;
if(weakPass.checked) score+=3;
if(no2fa.checked) score+=4;
if(neverUpdate.checked) score+=2;
if(clickLinks.checked) score+=5;

let level="";
if(score<=3) level="Low Risk 🟢";
else if(score<=7) level="Medium Risk 🟡";
else level="High Risk 🔴";

document.getElementById("riskResult").innerText=level;

if(riskChart) riskChart.destroy();

riskChart=new Chart(document.getElementById('riskChart'),{
type:'radar',
data:{
labels:['Password','2FA','Update','Link Behavior'],
datasets:[{
label:'Risk Impact',
data:[weakPass.checked?3:0,no2fa.checked?4:0,neverUpdate.checked?2:0,clickLinks.checked?5:0],
backgroundColor:'rgba(239,68,68,0.3)',
borderColor:'#ef4444'
}]
},
options:{scales:{r:{angleLines:{color:'#94a3b8'},grid:{color:'#334155'}}}}
});
}
