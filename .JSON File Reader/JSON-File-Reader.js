//==========================================================//
//==========================================================//
/*! TEOTIC® Dev™ "Script v1.0" */
/* Este contenido esta bajo la licencia Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0) */
/** Su uso en otros proyectos, requiere de Autorización y Dar Reconocimiento al Autor! */
/*       WWW-TEOTIC.WIXSITE.COM/PORTADA       || */
/* ___________________________________________           || */
/*    TODOS LOS DERECHOS RESERVADOS 2022   || */
//==========================================================//
//==========================================================//
/** 
Desde esta parte asta el final, el código fue desarrollado por Joab Israel Infante Lee.
Su uso en otros proyectos, requiere de Autorización y Dar Reconocimiento al Autor!
*/
/* Al cargar, sincronizar datos de inicio de sesión */
    async function onreload() {
      const requestURL = '/Example-of-File.JSON';
      const request = new Request(requestURL);
      const response = await fetch(request);
      const loginAuthText = await response.text();
      const jsonLogAuth = JSON.parse(loginAuthText);
      onreloadDeleteUrl();
      onreloadUrlHeader(jsonLogAuth);
      onreloadSpan1(jsonLogAuth);
      onreloadImage(jsonLogAuth);
      onreloadSpan2(jsonLogAuth);
      onreloadBody(jsonLogAuth);
    }
    /* Eliminar elemento (Log In) o Reemplazarlo a Log Out */
    function onreloadDeleteUrl() {
     document.getElementById("lognoturl").remove();
     document.getElementById("loginAuth").remove();
    }
    /* Link del json cargado al iniciar sesión */
    function onreloadUrlHeader(obj) {
     const inserturl = document.querySelector('loginsection');
     const myUrl = document.createElement('a');
     myUrl.setAttribute("href", obj.url); /* 1 */
     myUrl.setAttribute("target", "_blank");
     myUrl.setAttribute("id", "loginurl");
     inserturl.appendChild(myUrl);
    }
    /* Json parseado = imprimir */
    function onreloadSpan1(obj) {
     const insertSpanImage = document.getElementById('loginurl');
     const mySpan1 = document.createElement('span');
     mySpan1.classList.add('loginSpan1'); mySpan1.setAttribute("id", "loginSpan1");
     insertSpanImage.appendChild(mySpan1);
    }
    function onreloadImage(obj) {
      const insertImage = document.getElementById('loginSpan1');
      const myImage = document.createElement('img');
      myImage.setAttribute("src", obj.profileImage); /* 2 */
      myImage.classList.add('loginimage'); myImage.setAttribute("id", "loginimage");
      myImage.setAttribute("width", "256px"); myImage.setAttribute("height", "256px");
      insertImage.appendChild(myImage);
    }
    function onreloadSpan2(obj) {
     const insertSpanImage = document.getElementById('loginurl');
     const mySpan2 = document.createElement('span');
     mySpan2.classList.add('loginSpan2'); mySpan2.setAttribute("id", "loginSpan2");
     insertSpanImage.appendChild(mySpan2);
    }
    function onreloadBody(obj) {
      const insertSpan2 = document.getElementById('loginSpan2');
      const myName = document.createElement('h1');
      myName.classList.add('loginname'); myName.setAttribute("id", "loginname");
      myName.textContent = `${obj.name}`; /* 3 */
      const myId = document.createElement('p');
      myId.classList.add('loginid'); myId.setAttribute("id", "loginid");
      myId.textContent = `ID: ${obj.id}`; /* 4 */
      const myRoles = document.createElement('p');
      myRoles.classList.add('loginroles'); myRoles.setAttribute("id", "loginroles");
      myRoles.textContent = `Roles: ${obj.roles}`; /* 5 */
      const myTeams = document.createElement('p');
      myTeams.classList.add('loginteams'); myTeams.setAttribute("id", "loginteams");
      myTeams.textContent = `Teams: ${obj.teams}`; /* 6 */
      const myBio = document.createElement('p');
      myBio.classList.add('loginbio'); myBio.setAttribute("id", "loginbio");
      myBio.textContent = `Bio: ${obj.bio}`; /* 7 */
      insertSpan2.appendChild(myName);
      insertSpan2.appendChild(myId);
      insertSpan2.appendChild(myRoles);
      insertSpan2.appendChild(myTeams);
      insertSpan2.appendChild(myBio);
      }
    onreload();
//======================================================================//
//======================================================================//
//==========================================================//
//==========================================================//
/*! TEOTIC® Dev™ "Script v1.0" */
/* Este contenido esta bajo la licencia Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0) */
/** Su uso en otros proyectos, requiere de Autorización y Dar Reconocimiento al Autor! */
/*       WWW-TEOTIC.WIXSITE.COM/PORTADA       || */
/* ___________________________________________           || */
/*    TODOS LOS DERECHOS RESERVADOS 2022   || */
//==========================================================//
//==========================================================//
