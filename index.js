  
function openMenu() {
    var menu = document.querySelector(".menuer");
    menu.style.transform = "translate(0%)";
}
function closeMenu() {
    var menu = document.querySelector(".menuer");
    menu.style.transform = "translate(100%)";
}
//employee settings
var num = 1;
document.getElementById('blockPageButton').onclick = function() {
    document.getElementById('blocker').style.display = 'flex';
}
document.querySelector('.close').onclick = function() {
    document.getElementById('blocker').style.display = 'none';
}

document.querySelectorAll(".count").forEach(srcer => {
    srcer.addEventListener("click", function (keyer) {
        num += 1;
        if (num % 2 == 0) {
            keyer.target.parentElement.style = "background: crimson; border: 1px solid crimson;"
            keyer.target.style = "right: 2px; left: auto; background: #fff;";
        }
        else{
            keyer.target.parentElement.style = "background: #777; border: 1px solid #777;"
            keyer.target.style = "right: auto; left: 2px; background: #fff;";    
        }
    })
});
function openSlide(params) {
    
    document.querySelectorAll(".plus").forEach(src => {

        src.addEventListener("click", function (key) {

            key.target.parentElement.parentElement.parentElement.style = "height: auto;";
            key.target.setAttribute("onclick","closeSlide()");
            key.target.setAttribute("class","fas fa-minus plus")

        })

    })

}

function closeSlide(params) {
    
    document.querySelectorAll(".plus").forEach(src => {

        src.addEventListener("click", function (key) {

            key.target.parentElement.parentElement.parentElement.style = "height: 19px;";
            key.target.setAttribute("onclick","openSlide()");
            key.target.setAttribute("class","fas fa-plus plus")

        })

    })

}


document.querySelector(".reject").addEventListener("click", function (params) {
    document.querySelectorAll(".count").forEach(source => {    
        source.parentElement.style = "background: #777; border: 1px solid #777;"
        source.style = "right: auto; left: 2px; background: #fff;";    
    })
});

//mores about automation

function showAlert() {
    var modal = document.getElementById('custom-alert');
    var about = document.getElementById('about');
    var span = document.getElementsByClassName('close-btn')[0];
    modal.style.display = 'none';
    
    span.onclick = function() {
      modal.style.display = 'none';
    }
    
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = 'none';
      }
    }
  
    window.onclick = function(event) {
      if (event.target == about) {
        modal.style.display = 'flex';
      }
    }
  }
  showAlert();
  function reverse(params) {
    var container = document.getElementById("template");   
        container.innerHTML = `
            <div class="input place" id="checkauto">
                <form action="">
                    <div class="formers" id="form">
                        <div class="ones">
                            <label for="" class="txt"><i class="fas fa-user"></i>  employee name</label>
                            <input class="inp" type="text" maxlength="24"  placeholder="enter employee name..." id="input1" required>
                        </div>
                        <div class="ones">
                            <label for="" class="txt"><i class="fas fa-users-viewfinder"></i>  employee position</label>
                            <input class="inp" type="text"  maxlength="30" placeholder="enter employee position..." id="input2" required>
                        </div>
                        <div class="ones">
                            <label for="" class="txt"><i class="fas fa-user-tag"></i>  employee gender</label>
                            <input type="text" name="gender" id="input3" class="inp" placeholder="employee gender" required>
                        </div>
                        <div class="ones">
                            <label for="" class="txt"><i class="fas fa-book"></i> employee  degree</label>
                            <input class="inp" type="text"  maxlength="30" placeholder="enter employee degree..." id="input4" required>
                        </div>
                        <div class="ones">
                            <label for="" class="txt"><i class="fas fa-person"></i>  employee insurance</label>
                            <input class="inp" type="text" maxlength="30"  placeholder="enter employee insurance..." id="input5" required>
                        </div>
                        <div class="ones">
                            <label for="" class="txt"><i class="fas fa-money-check"></i>  employee salary </label>
                            <input class="inp" type="text" minlength="1"  placeholder="enter employee salary..." id="input6" required>
                        </div>
                        
                        <div class="ones">
                            <label for="" class="txt"><i class="fas fa-envelope"></i>  employee email</label>
                            <input class="inp" type="email"  maxlength="50" placeholder="enter employee email..." id="input7" required>
                        </div>
                        <div class="ones">
                            <label for="" class="txt"><i class="fas fa-phone"></i>  employee phone number</label>
                            <input class="inp" type="number" placeholder="enter employee phone number..." id="input8" required>
                        </div>
                    </div>
                </form>
                <div class="follow" id="follow">
                    <input type="submit" value="next" id="page1" class="page bt-n" onclick="cont()">
                    <input type="submit" value="Save" id="page2" class="page bt-n" onclick="checkName()">
                </div>
    <i class="fas fa-gears"  onclick="leftside()" id="bleft"></i>               
    <i class="fas fa-camera" onclick="shownone()" id="photoo"></i>               
            </div>        
 `;
 if (theme != "right") {
    rightTheme();        
}
else{
    darkTheme();        
} 
  }
  let number = 0 ;
  function trans() {
    let translatemydiv = document.getElementById('translatemydiv');
    let translatebutton = document.getElementById('trans1');
    let translatebutton1 = document.getElementById('trans');
    translatebutton.style.display = "block";
        number += 95 ;
        translatemydiv.style.transform = "translateX(-"+number+"%)";
        if (number == 190) {
           translatebutton1.style.display = "none";
        } 
        else   if (number >= 191) {
        translatemydiv.style.transform = "translateX(-190%)";
        translatebutton1.style.display = "none";

           }
    }
    function trans1() {
        let translatemydiv = document.getElementById('translatemydiv');
        let translatebutton = document.getElementById('trans1');
        let translatebutton1 = document.getElementById('trans');
        translatebutton1.style.display = "block";
            number -= 95 ;
            translatemydiv.style.transform = "translateX(-"+number+"%)";
            if (number == 0) {
             translatebutton.style.display = "none";
            } 
            else if(number >= 190){
        translatebutton1.style.display = "none";
        }
        }


        //search employee
        function search() {
            var devert = document.getElementById("devert").innerHTML = `
          <p> Manage  Your Employees Day Per Day.</p>
`  
var inp = document.querySelector(".inputing");
var element = document.querySelectorAll(".employee-details");

element.forEach(diver => {
    if (diver.children[0].innerHTML.includes(inp.value.toUpperCase())) {
        diver.parentElement.parentElement.style.display = "block";
        if (times == 1) {
                   var devert = document.getElementById("devert").innerHTML = `
        <p> Saved about : `+times+`  Employee. <p>
    `
        } else {
            var devert = document.getElementById("devert").innerHTML = `
            <p> Saved about : `+times+`  Employees. <p>
        `   
        }

 
    }
    else{
        diver.parentElement.parentElement.style.display = "none";
            var devert = document.getElementById("devert").innerHTML = `
            <p> Manage  Your Employees Day Per Day.</p>   
        `
    }
    console.log(diver.children[0].innerHTML.includes(inp.value));
}); 
        }
        var y = 0;
        function leftside(){
            clearInterval(int);
                               
                var first = document.getElementById("page1");
                var second = document.getElementById("page2");
                
                first.style.display = "block";
                second.style.display = "none";  
        y += 20;
        var form = document.getElementById("form");
        var left = document.getElementById("bleft");
        form.style.transform += "translate(20%)";
        if (y <= 0 || y>=140) {
          y = 0;
          left.style.display = 'none'; 
          form.style.transform += "translate(0%)";
        }
        console.log(y);
        var devert = document.getElementById("devert").innerHTML = `
        <p>Check if you filled well field automation.</p>
`
            
        }
        
        //my emmployee  slide site

var int = null;

function cont(params){
    var form = document.getElementById("form");
    var name = document.getElementById("input1");
    var name2 = document.getElementById("input2");
    var name3 = document.getElementById("input3");
    var name4 = document.getElementById("input4");
    var name5 = document.getElementById("input5");
    var name6 = document.getElementById("input6");
    var name7 = document.getElementById("input7");
    var name8 = document.getElementById("input8");          

          if (name.value.length >= 5) {
            var devert = document.getElementById("devert").innerHTML = `
            <p>  Communities for your favorite technologies. <p>
        `
            form.style.transform = "translate(-20%)";
            if (name2.value.length >= 2) {
            form.style.transform = "translate(-40%)"; 
            if (name3.value == "male" || name3.value == "female") {
            form.style.transform = "translate(-60%)";   
            if (name4.value.length >= 5) {
            form.style.transform = "translate(-80%)"; 
            if (name5.value.length >= 5) {
            form.style.transform = "translate(-100%)";
            if (name6.value.length != 0) {
                form.style.transform = "translate(-120%)"; 
            if(name7.value.length != 0 && name7.value.indexOf("@") >= 5 && name7.value.includes("@gmail.") || name7.value.includes("@yahoo.")){
            console.log(name7.value.indexOf("@"));
            form.style.transform = "translate(-140%)";
            var dever = document.getElementById("bleft");
            dever.style.display = 'block';
            
            int = setInterval(() => {
                        
                if(name8.value.length >= 10){                
                    var first = document.getElementById("page1");
                    var second = document.getElementById("page2");
                    
                    first.style.display = "none";
                    second.style.display = "block";
                    
                }
            }, 10);         
            }     
            }   
            }                      
            }
            } 
            }
            
          } else {
            var devert = document.getElementById("devert").innerHTML = `
            <p style="color:crimson">  Please fill well the required information. <p>
`
            
          }  
          if (theme != "right") {
            rightTheme();        
        }
        else{
            darkTheme();        
        } 
    
}
//the second part of automation

function checkName(params) {
    var name8 = document.getElementById("input8"); 
    var name = document.getElementById("input5");
    if (name8.value.length == 0) {
        var devert = document.getElementById("devert").innerHTML = `
        <p style="color:crimson">  Please fill well the required information. <p>
`
        name8.focus();
    }
    else{
        cloneDiv();
    }
}
var times = 0;
function cloneDiv(params) {
    
    clearInterval(int);
    var form = document.getElementById("form");
    var name1 = document.getElementById("input1");
    var name2 = document.getElementById("input2");
    var name3 = document.getElementById("input3");
    var name4 = document.getElementById("input4");
    var name5 = document.getElementById("input5");
    var name6 = document.getElementById("input6");
    var name7 = document.getElementById("input7");
    var name8 = document.getElementById("input8"); 
    var newDiv = document.getElementById("newDiv");
    var img = document.getElementById("set-img");    
       times += 1;    
 document.getElementById("devert").innerHTML = `
 <p> YOU ADD A NEW ONE - - AUTOMATION - -   `+times+` <p>
`
    newDiv.innerHTML += `
        <div class="myDiv">
 <div class="employee-card">
    <div class="employee-avatar">
      <img  src="`+img.src+`"  class="avatar-img">
    </div>
    <div class="employee-details">
      <h3 class="employee-name">`+name1.value.toUpperCase()+`</h3>
      <p class="employee-position">`+name2.value+`</p>
      <p id="gen" style="display: none;">`+name3.value+`</p>
      <p id="degree" style="display: none;">`+name4.value+`</p>
      <p id="insurance" style="display: none;">`+name5.value+`</p>
      <p id="salary" style="display: none;">`+name6.value+`</p>
      <p id="email" style="display: none;">`+name7.value+`</p>
      <p id="phone number" style="display: none;">`+name8.value+`</p>
      <p id="employeeimage" style="display: none;">`+img.src+`</p>
    </div>
      <p id="times">`+times+`</p>
  </div>
<div class="contain">
<button id="viewBtn" class="bt-n">view</button>
<button id="removeBtn">remove</button>
</div>
          </div>

    `
    if (theme != "right") {
        rightTheme();        
    }
    else{
        darkTheme();        
    } 
    var th = document.getElementById("bleft");
    var third1 = document.getElementById("follow");
    var form = document.getElementById("form");
    form.style.transform = "translate(0%)";
    th.style.display = "none";
    third1.style.display = "block";
    
    name1.value = "";
    name2.value = "";
    name3.value = "";
    name4.value = "";
    name5.value = "";
    name6.value = "";
    name7.value = "";
    name8.value = "";
    img.src = "C:\Users\JO.WEB.DEV\Desktop\employee automation\a user.jpg";
    
    var first = document.getElementById("page1");
    var second = document.getElementById("page2");
    
    first.style.display = "block";
    second.style.display = "none";
    form.style.display = "grid";

    //information to be inserted or inner html in the template onclick a button

    var removeBtn = document.querySelectorAll("#removeBtn");

    removeBtn.forEach(rmv => {
        rmv.addEventListener("click", (event) => {
            event.target.parentElement.parentElement.remove();
            times -= 1;
            document.getElementById("devert").innerHTML = `
            <p> AUTOMATION   '`+times+`'   EMP -- AUTO -- EMP <p>
           `
            reverse();
        })
    });

    // second func  added event

var viewBtn = document.querySelectorAll("#viewBtn");
    
viewBtn.forEach(btn => {
    btn.addEventListener("click", (event) => {
document.getElementById("devert").innerHTML = `
    <p>Online Get More Information.</p>
`;
    document.getElementById("template").innerHTML = `
<div class="title txt">`+event.target.parentElement.parentElement.getElementsByClassName("employee-details")[0].children[0].innerHTML.toLowerCase()+`</div>
<div class="translatemydiv" id="translatemydiv">
<div class="temp">

    <div class="inputers">
        <div class="inputer txt">
            <div class="e_nam txt">`+event.target.parentElement.parentElement.getElementsByClassName("employee-details")[0].children[0].innerHTML.toLowerCase()+`</div>
        </div>
                 
        <div class="inputer txt">
            <div class="e_ position">`+event.target.parentElement.parentElement.getElementsByClassName("employee-details")[0].children[1].innerHTML.toLowerCase()+`</div>
        </div>

        <div class="inputer txt">
            <div class="e-gender">`+event.target.parentElement.parentElement.getElementsByClassName("employee-details")[0].children[2].innerHTML.toLowerCase()+`</div>
        </div>
        
        <div class="inputer txt">
            <div class="e_degree">`+event.target.parentElement.parentElement.getElementsByClassName("employee-details")[0].children[3].innerHTML.toLowerCase()+`</div>
        </div>
</div>



    <div class="inputers" >
        <div class="inputer txt" id="inputerimage" >
            <img src="`+event.target.parentElement.parentElement.getElementsByClassName("employee-details")[0].children[8].innerHTML+`"  id="imo">
        </div>                  


<div class="temp">

<div class="inputers" id="inputers2">
         
<div class="inputer txt">
    <div class="e_insurance txt">`+event.target.parentElement.parentElement.getElementsByClassName("employee-details")[0].children[4].innerHTML.toLowerCase()+`</div>
</div>
<div class="inputer txt">
    <div class="e-salary">`+event.target.parentElement.parentElement.getElementsByClassName("employee-details")[0].children[5].innerHTML.toLowerCase()+`</div>
</div>

<div class="inputer txt">
    <div class="e-email">`+event.target.parentElement.parentElement.getElementsByClassName("employee-details")[0].children[6].innerHTML.toLowerCase()+`</div>
</div>

<div class="inputer txt">
    <div class="e_phonenumber">`+event.target.parentElement.parentElement.getElementsByClassName("employee-details")[0].children[7].innerHTML.toLowerCase()+`</div>
</div>

</div>
</div>
</div>


    </div>
    </div>
    <div class="movedown">
    <i class="fas fa-arrow-left" onclick="trans1()" id="trans1" style = "display:none"></i>
    &nbsp;
    <i class="fas fa-arrow-right"  onclick="trans()" id="trans"></i>
    <input type="button" class="th" value="Add" onclick="reverse()">
    </div>
              `;
    
    })
    });
    if (theme != "right") {
        rightTheme();        
    }
    else{
        darkTheme();        
    } 

}
//shortcuts
document.addEventListener("keydown", enter)

function enter(key) {
    if (key.key == "Enter") {
        cont();        
    }  
}
//set emp-image

function setImage_none(params) {
    var setimg = document.getElementById('set-img');
    setimg.src = "C:/Users/JO.WEB.DEV/Desktop/employee automation/a user.jpg";
}
const imageInput = document.getElementById('getset');
const imagePreview = document.getElementById('set-img');

imageInput.addEventListener('change', () => {
const file = imageInput.files[0];
const reader = new FileReader();

reader.onload = (e) => {
imagePreview.src = e.target.result;
};

reader.readAsDataURL(file);
});

function hiddenone(params) {
    document.getElementById("blockMessage").style.display ="none";
}
function shownone(params) {
    document.getElementById("blockMessage").style.display ="block";
}
//teme site
let theme = "dark";
function darkTheme(params) {
    var btn = document.querySelector(".menuer");
    var element = btn.querySelectorAll(".block");
    var buttoning = document.querySelectorAll(".loans");
    var listed = document.querySelectorAll(".employee-card");
    var diver = document.querySelectorAll(".devert");
    var gear = document.querySelectorAll("#gear");
    var search = document.querySelectorAll(".inputing");
    search.forEach(item => {
        item.style = "color: #fff;box-shadow: 0 0px 2px 2px #fff;border : none ;border-radius : 7px;";
    });
   
    element.forEach(item => {
        item.style = "color: #fff; background: #112;"
        item.children[0].style = "-webkit-text-stroke: 1px #fff;"
    });
    diver.forEach(item => {
        item.style = "color: #fff;"
    });
    gear.forEach(item => {
        item.style = "color: #fff;"
    });

    var text = document.querySelectorAll(".txt");
    var bg = document.querySelectorAll(".bg");
    var communities = document.querySelectorAll(".communities");
    var button = document.querySelectorAll(".bt-n");
    var buttoningi = document.querySelectorAll("#i");
    var realBg = document.body;
    realBg.style.background = "#223";
    text.forEach(elmnt => {
        elmnt.style.color = "#fff";
    });
    bg.forEach(elmnt => {
        elmnt.style = "background: rgb(0, 0, 22); box-shadow: #112; color: #fff;";
    }); 
    button.forEach(elmnt => {
        elmnt.style = "color: #fff; background:#d2691e ;"
    });
    listed.forEach(elmnt => {
    elmnt.style = "background:rgb(0, 0, 22);box-shadow: 0 0px  6px #333;";
    });
    buttoning.forEach(elmnt => {
        elmnt.style = " background-color:#d2691e;color:#fff;";
        });       
    communities.forEach(elmnt => {
            elmnt.style = " background-color: rgb(0,0,15);box-shadow: 0 0px  6px #333;";
        }); 
        buttoningi.forEach(elmnt => {
            elmnt.style = "color: #fff;";
        });     
}
function rightTheme(params) {
    var btn = document.querySelector(".menuer");
    var element = btn.querySelectorAll(".block");
    var listed = document.querySelectorAll(".employee-card");
    var communities = document.querySelectorAll(".communities");
    var diver = document.querySelectorAll(".devert");
    var gear = document.querySelectorAll("#gear");
    element.forEach(item => {
        item.style = "color: #000; background: #e2e2e2;"
        item.children[0].style = "-webkit-text-stroke: 1px rgba(0, 0, 0,0.2);"
    });
    diver.forEach(item => {
        item.style = "color: rgba(0, 0, 0, 0.7);"
    });
    gear.forEach(item => {
        item.style = "color: rgba(0, 0, 0, 0.7);"
    });

    var text = document.querySelectorAll(".txt");
    var bg = document.querySelectorAll(".bg");
    var button = document.querySelectorAll(".bt-n");
    var buttoning = document.querySelectorAll(".loans");
    var buttoningi = document.querySelectorAll("#i");
    var realBg = document.body;
    realBg.style.background = "#fff";
    text.forEach(elmnt => {
        elmnt.style.color = "#000";
    });
    bg.forEach(elmnt => {
        elmnt.style = "background: #fff;box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); color: #000;";
    });
    buttoningi.forEach(elmnt => {
        elmnt.style = "color: rgba(0,0,0,0.0);";
    });
    button.forEach(elmnt => {
        elmnt.style = "color: #fff; background: green;"
    });
    listed.forEach(elmnt => {
        elmnt.style = " background-color: #f9f9f9;box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);";
        });
    buttoning.forEach(elmnt => {
            elmnt.style = " background-color:  background: #e2e2e2;;box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);";
            }); 

            communities.forEach(elmnt => {
                elmnt.style = "background: #fff; box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);";
            });     
}
function themes(params) {
    if (theme == "right") {
        rightTheme();
        theme = "dark";        
    }else{
        darkTheme();
        theme = "right";        
    }
}