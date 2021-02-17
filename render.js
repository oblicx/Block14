const fs = require('fs');
const path = require("path");
const host_path=path.join('C:/Windows/System32/drivers/etc','hosts');
const addblock_database=fs.readFileSync('database.txt','utf-8'); 
const active_inactive=document.getElementById('status');
const darktoggle=document.getElementById('changetheme');
const addblacklist=document.querySelector('.addblacklist');
const blocklist=document.getElementById('blacklistl');
const blacklistparent=document.querySelector('.blacklistparent');

const on=()=>{


   const checker=fs.readFileSync('hosts','utf-8');
   if(checker<=2){
      const default_host= fs.readFileSync(host_path,'utf-8');
      const write_default=fs.writeFileSync('hosts',default_host,{flag:'w+'});
   }
   const start_block=fs.writeFileSync(host_path,addblock_database,{flag:'a+'});
   active_inactive.innerText='ACTIVE';
   
}

const off=()=>{
   const fetch_default=fs.readFileSync('hosts','utf-8');
   const return_default=fs.writeFileSync(host_path,fetch_default,{flag:'w+'});
   active_inactive.innerText='INACTIVE';

}

const lighton=()=>{
   darktoggle.setAttribute('href','lightstyle.css');
}

const lightoff=()=>{
   darktoggle.setAttribute('href','style.css');
   
}


addblacklist.addEventListener('submit',e=>{
   e.preventDefault();
   const temp_element=document.createElement('li');
   temp_element.innerText=addblacklist.search.value;
   blocklist.prepend(temp_element);
   addblacklist.search.value='';
   const newlistitem=fs.writeFileSync(host_path,'127.0.0.1 '+' '+temp_element.innerText+'\n',{flag:'a+'});
   
   
});

blacklistparent.addEventListener('click',e=>{
   if(e.target.tagName==='LI'){
      e.target.remove();
   }
   
});

