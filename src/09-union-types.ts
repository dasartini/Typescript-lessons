(() => {

    let userId: number | string;

    userId = 1
    userId = 'adrian'

    function greeting(myText: string | number) {

        if (typeof myText === 'string') {
            myText.toUpperCase
            console.log(myText)
        } else {
            myText.toFixed()
            console.log(myText)
        }


    }

    greeting('adrian')
    greeting(12.213221)


})()