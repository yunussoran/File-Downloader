    const fileInput=document.querySelector("input"),
    downloadBtn=document.querySelector("button");

    downloadBtn.addEventListener("click",e => {
       e.preventDefault();
       downloadBtn.innerText="Downloading file...";
       fetchFile(fileInput.value);
    });


    function fetchFile(url){
       //fetching file & returning response as blob
        fetch(url).then(res=> res.blob()).then(file => {
           //URL.createObjectURL creates a url of passed object
            let tempUrl= URL.createObjectURL(file);
            let aTag= document.createElement("a");
            aTag.href=tempUrl; //passing tempUrl as href value of a tag
           //passing file last name & extension as download value of  a tag
            aTag.download= url.replace(/^.*[\\\/]/,'');
            document.body.appendChild(aTag); // adding a tag inside body 
            aTag.click();
            aTag.remove();
            URL.revokeObjectURL(tempUrl);
            downloadBtn.innerText="Download file";
        }).catch(() =>{
            downloadBtn.innerText="Download file";
            alert("Failed download file")
        })
    }