//ajax
     function loadJsonFile(file,callBack)
     {
        var filereq=new XMLHttpRequest();
        filereq.overrideMimeType("application/json");
        filereq.open("GET",file,true);
        filereq.onreadystatechange = function(){
            if(filereq.readyState === 4 && filereq.status == "200")
            {
                callBack(filereq.responseText);
            }
        }
        filereq.send(null);
     }
     loadJsonFile("data.json",function(text){
         var data=JSON.parse(text);
         console.log(data);
        detais(data.details);
        detais1(data.cardsdata);
        skills(data.skill);
        hobbies(data.hobby);
        achieves(data.achieve);
        
     });


var body=document.getElementById('root');

var d=document.createElement("div");
d.classList.add("main");
body.appendChild(d);

var left=document.createElement("div");
left.classList.add("left");
d.appendChild(left);

var r=document.createElement("div");
r.classList.add("right");
d.appendChild(r);


function detais(a)
     {

        var d=document.createElement("div");
        d.classList.add("ch1");
        left.appendChild(d);

         var img=document.createElement("img");
         img.src=a.image;
         img.height=100;
         img.width=100;
         d.appendChild(img);

         var h= document.createElement("h2");
         h.setAttribute("id","h")
         h.textContent=a.name;
         d.appendChild(h);

         left.appendChild(document.createElement("hr"))

         var d=document.createElement("div");
        d.classList.add("ch2");
        left.appendChild(d);

         var h1= document.createElement("p");
         h1.setAttribute("id","h1")
         h1.textContent=a.Email;
         d.appendChild(h1);

         var h1= document.createElement("p");
         h1.setAttribute("id","h1")
         h1.textContent=a.mobile;
         d.appendChild(h1);

         var h1= document.createElement("p");
         h1.setAttribute("id","h1")
         h1.textContent=a.address;
         d.appendChild(h1);

    var d1=document.createElement("h2");
  
    d1.textContent="Carrier objective"; 
    r.appendChild(d1);

    var p=document.createElement("p");
    p.textContent=a.ca;
    r.appendChild(p);

    r.appendChild(document.createElement("hr"));
}

function detais1(sdc)

{

    var d1=document.createElement("h2");
    d1.textContent="Education details";
    r.appendChild(d1);

      for(i in sdc)
      {
          var ul=document.createElement("ul");
          ul.classList.add("myprofile");
          
          var li=document.createElement("li");
          li.textContent=sdc[i].name;
          ul.appendChild(li);

          var li1=document.createElement("li");
          li1.textContent=sdc[i].year;
          ul.appendChild(li1);

          var li1=document.createElement("li");
          li1.textContent=sdc[i].Percent;
          ul.appendChild(li1);
          r.appendChild(ul);
          
      }
      r.appendChild(document.createElement("hr"));
}


function skills(k)
{
    var d1=document.createElement("h2");
    d1.textContent="Skills";
    r.appendChild(d1);
   
    var ul=document.createElement("ul");
    ul.classList.add("myskills");

    for(i in k.sk)
    {
        var li1=document.createElement("li");
          li1.textContent=k.sk[i];
          ul.appendChild(li1);
          r.appendChild(ul);
    }
   
    r.appendChild(document.createElement("hr"));

    var d1=document.createElement("h2");
    d1.textContent="Project";
    r.appendChild(d1);

    var h1= document.createElement("p");
         h1.setAttribute("id","h1")
         h1.textContent=k.pro;
         r.appendChild(h1);

   r.appendChild(document.createElement("hr"));
}


function hobbies(k)
{
    var d1=document.createElement("h2");
    d1.textContent="Hobbies";
    r.appendChild(d1);
   
    var ul=document.createElement("ul");
    ul.classList.add("myhobby");

    for(i in k.h)
    {
        var li1=document.createElement("li");
          li1.textContent=k.h[i];
          ul.appendChild(li1);
          r.appendChild(ul);
    }
    r.appendChild(document.createElement("hr"));
}


function achieves(k)
{
    var d1=document.createElement("h2");
    d1.textContent="Achievements";
    r.appendChild(d1);
   
    var ul=document.createElement("ul");
    ul.classList.add("myach");

    for(i in k.ai)
    {
        var li1=document.createElement("li");
          li1.textContent=k.ai[i];
          ul.appendChild(li1);
          r.appendChild(ul);
    }
    r.appendChild(document.createElement("hr"));

    var d1=document.createElement("h2");
    d1.textContent="Declaration";
    r.appendChild(d1);

    var h1= document.createElement("p");
         h1.setAttribute("id","h1")
         h1.textContent=k.declare;
         r.appendChild(h1);
    
}




