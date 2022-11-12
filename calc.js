const lis = document.querySelectorAll("ul li")

        lis.forEach((node) => {
            node.addEventListener('mousedown' , function(e) {
                const value = node.innerText.trim()
                const result = document.querySelector(".results")
                const resultData = result.innerText.trim()

                if(value.toLowerCase()=='c'){
                    result.innerText = ''
                    return true
                }

                if(resultData == '0' || resultData == 'infinte' || resultData == 'undefined') {
                    result.innerText = ''
                    return true
                }
                if(value=='='){
                    let sol = eval(resultData)
                    result.innerText = sol
                    return true
                }
                

                result.append(value)



            })
        })