const downloadFile = () => {
    console.log("dowmload________________________________________________________________")
    document.getElementsByTagName("h6")[0].addEventListener("click", function () {
    
        var xhr = new XMLHttpRequest();
        xhr.responseType = "json";
        console.log("你点了a，我进XMLHttpRequest了")
    
        xhr.onload = function () {
            console.log("紧接着，我进onload了")
            var downloadUrl = xhr.response.download_url;
    
            var a = document.createElement("a");
            a.style.display = "none";
            document.body.appendChild(a);
    
            a.href = downloadUrl;
            a.download = "filename.zip";
    
            a.click();
            document.body.removeChild(a);
        };
    
        xhr.open("GET", fileUrl);
        xhr.send();
        console.log("成功");
    });
    }
    export default downloadFile;