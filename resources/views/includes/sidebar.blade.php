<div class="sidenav">
    <a href="#">Accueil</a>
    
<div id="app" data-app>
    <weather></weather>
    </div>
</div>
  <style>
    
    .sidenav {
      height: 100%;
      width: 280px;
      position: fixed;
      z-index: 1;
      top: 0;
      left: 0;
      background-color: rgb(88, 208, 224);
      overflow-x: hidden;
      padding-top: 20px;
    }
    
    .sidenav a {
      text-decoration: none;
      margin-left:10px;
      font-size: 25px;
      color:white;
      display: block;
    }
    
    .sidenav a:hover {
      color: #f1f1f1;
    }

    @media screen and (max-height: 450px) {
      .sidenav {padding-top: 15px;}
      .sidenav a {font-size: 18px;}
    }
    </style>