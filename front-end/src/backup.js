
  function toggleTheme() {
    //setDarkTheme(prevDarkTheme => !prevDarkTheme)
    //fetchTheme()
    if (light_mode) {
      theme_button = root + data.header.icon_theme[1].url;
      //console.log("light mode on");
      theme = true;
      setMode(false)
      localStorage.setItem('theme', JSON.stringify("dark"))
      //console.log("THEME NOW: ", localStorage.getItem("theme"))
   
  
    } 
    else {
      theme_button = root + data.header.icon_theme[0].url;
      //console.log("dark mode on");
      theme = false;
      setMode(true)
      //localStorage.setItem('theme', JSON.stringify("light"))
      //console.log("THEME NOW: ", localStorage.getItem("theme"))
 
    } 
  }
