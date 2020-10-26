// code goes here

// function to find the season by the month
function getSeason(){
    let month = ""
    switch (new Date().getMonth()) {
      case 11:
      case 0:
      case 1:
        return "images/seasons/winter.jpg"
  
      case 2:
      case 3:
      case 4:
        return "images/seasons/spring.jpg"
      case 5:
      case 6:
      case 7:
        return "images/seasons/summer.jpg"
      
      case 8:
      case 9:
      case 10:
      return "images/seasons/fall.jpg"
    }
  }
