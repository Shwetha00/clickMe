 let bott = document.getElementsByTagName("button")
        let mov=10
        let predict=document.querySelector(".predict")
        bott[0].addEventListener("mouseover",function(){
            bott[0].style.marginLeft =Math.floor(Math.random()*mov)+"rem"
            bott[0].style.marginTop =Math.floor(Math.random()*mov)+"rem"
            
        })


        setTimeout(function(){
            bott[0].style.display="none"
            predict.innerText="Sorry...."

        },5000)