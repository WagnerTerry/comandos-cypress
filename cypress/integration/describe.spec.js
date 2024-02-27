/// reference types="cypress" /> // com essa linha de código , o vscode entende que está mexendo com o cypress 

it('A external test...', () => {

})

describe('Should group tests...', () => {
    describe('Should group more specific tests...', () => {
        it('A specific test...', () => {

        })
    })

    describe('Should group more specific tests 2...', () => {
        it('A specific test 2 ...', () => {

        })
    })


    it('A internal test...', () => {

    })
})