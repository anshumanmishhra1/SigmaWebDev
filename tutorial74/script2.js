document.querySelector(".child").addEventListener
            ("click", (e) => {
                e.stopPropagation();
                alert("Child was clicked 🤟");
            })

            document.querySelector(".childContainer").addEventListener
            ("click", (e) => {
                e.stopPropagation();
                alert("ChildContianer was clicked 🤟");
            })

            document.querySelector(".container").addEventListener
            ("click", (e) => {
                e.stopPropagation();
                alert("Contianer was clicked 🤟");
            })

            function getRandomColor(){
                let val1=Math.ceil(0+ Math.random()*255)
                let val2=Math.ceil(0+ Math.random()*255)
                let val3=Math.ceil(0+ Math.random()*255)
                return `rgb(${val1}, ${val2}, ${val3})`
            }

            let a= setInterval(() => {
                document.querySelector(".childContainer").style.background=getRandomColor();
            }, 70);

            // let a= setTimeout(() => {
            //     document.querySelector(".childContainer").style.background=getRandomColor();
            // }, 1000);

            console.log(a);