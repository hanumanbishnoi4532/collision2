function isTouching(movingRect,fixedRect){
    if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2
      && movingRect.x - fixedRect.x < fixedRect.width/2 +movingRect.width/2
      && movingRect.y - fixedRect.y < fixedRect.height/2 +movingRect.height/2
      && movingRect.y - fixedRect.y < fixedRect.height/2 +movingRect.height/2 )
      {
    return true;
    }
    else{
    return false;
    
    }  
  }