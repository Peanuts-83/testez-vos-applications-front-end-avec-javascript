/**
 *
 * @param {string} name
 */
export const sayHello = name => {
    if (!name) {
        return "Hello, World"
    }

    if (name == 'Isa') {
        return 'Salut, Isa';
    }
    
    return `Hello, ${name}`
}
