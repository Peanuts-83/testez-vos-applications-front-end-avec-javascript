/**
 * @jest-environment jsdom
 */
 import '@testing-library/jest-dom'
 import {
    getByTestId,
    getByRole,
    getByLabelText
} from '@testing-library/dom'
import userEvent from '@testing-library/user-event'

import {handleSignInForm} from './index'
import SignIn from '../../pages/signIn/index'

beforeEach(() => {
    document.body.innerHTML = SignIn.render()
    handleSignInForm()
})

afterEach(() => {
    document.body.innerHTML = ''
})

describe('SignIn form Integration test suites', () => {
    it('should display error msg for email if not correct', () => {
        userEvent.type(
            getByLabelText(document.body, 'Votre addresse e-mail'),
            'tom@free.fr'
        )
        userEvent.click(
            getByRole(document.body, 'button')
        )
        expect(
            getByTestId(document.body, 'user-email-error-msg')
        ).not.toHaveClass('hidden')
    })

    it('should not display error msg for email correct & no password', () => {
        userEvent.type(
            getByLabelText(document.body, 'Votre addresse e-mail'),
            'thomas@facadia.com'
        )
        userEvent.click(
            getByRole(document.body, 'button')
        )
        expect(
            getByTestId(document.body, 'user-email-error-msg')
        ).toHaveClass('hidden')
        expect(
            getByTestId(document.body, 'user-password-error-msg')
        ).not.toHaveClass('hidden')
    })

    it('should not display error msg for email & password not correct', () => {
        userEvent.type(
            getByLabelText(document.body, 'Votre addresse e-mail'),
            'thomas@facadia.com'
        )
        userEvent.type(
            getByLabelText(document.body, 'Votre mot de passe'),
            'toto'
        )
        userEvent.click(
            getByRole(document.body, 'button')
        )
        expect(
            getByTestId(document.body, 'user-email-error-msg')
        ).toHaveClass('hidden')
        expect(
            getByTestId(document.body, 'user-password-error-msg')
        ).not.toHaveClass('hidden')
    })

    it('should not display error msg for email & password correct', () => {
        userEvent.type(
            getByLabelText(document.body, 'Votre addresse e-mail'),
            'thomas@facadia.com'
        )
        userEvent.type(
            getByLabelText(document.body, 'Votre mot de passe'),
            'azerty'
        )
        userEvent.click(
            getByRole(document.body, 'button')
        )
        expect(
            getByTestId(document.body, 'user-email-error-msg')
        ).toHaveClass('hidden')
        expect(
            getByTestId(document.body, 'user-password-error-msg')
        ).toHaveClass('hidden')
    })
})