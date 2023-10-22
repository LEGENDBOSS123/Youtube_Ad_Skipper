function skipAdd(){
    if(document.querySelector("button.ytp-ad-overlay-close-button")){
        document.querySelector("button.ytp-ad-overlay-close-button").click();
    }
    if(document.querySelector("div.ad-showing")){
        try{    
            for(var i=0; i<document.getElementsByClassName("video-stream html5-main-video").length;i++){
                document.getElementsByClassName("video-stream html5-main-video")[i].currentTime = 999999999999999999999999999999
            }
            for(var i = 0; i<document.getElementsByClassName("ytp-ad-skip-button ytp-button").length;i++){
                document.getElementsByClassName("ytp-ad-skip-button ytp-button")[i].click()
            }
        }
        catch{
        }
    }
}

setInterval(skipAdd,25);
