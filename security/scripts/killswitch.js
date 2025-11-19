(async function(){
  const a="https://nexusportal.github.io/security/killswitch.json";
  try{
    const b=await fetch(a,{cache:"no-cache"});
    if(!b.ok)throw new Error("f");
    const c=await b.json();
    if(c.active){
      console.log("k");document.body.style.background="lightgreen";
    }else{
      document.body.innerHTML="<h1>Site disabled</h1>";
    }
  }catch(e){
    console.warn("u",e);
    document.body.innerHTML="<h1>Maintenance mode</h1>";
  }
})();
