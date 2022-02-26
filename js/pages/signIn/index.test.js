/**
 * @jest-environment jsdom
 */
 import '@testing-library/jest-dom'
 import { getByTestId } from '@testing-library/dom'
 import SignIn from './index.js'

 describe('SignIn Integration Test Suites', () => {
     document.body.innerHTML = '<div id="root"></div>'
     document.location = '/'

    it ('should return error msg for email', () => {
        
        expect(getByTestId, 'user-email-error-msg').not.toHaveClass('hidden')
    })

 })