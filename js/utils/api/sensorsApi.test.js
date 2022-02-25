import { data } from '../../../data/mock-homepage-data.js'
import { isInTestEnv } from '../env/index.js'
import {retrieveSensorsData} from './sensorsApi'

describe('retrieveSensorsData Unit test', () => {
    it('should return data.facades', () => {
        expect(retrieveSensorsData()).toBe(data.facades)
    })

    it('should be in testEnv', () => {
        expect(isInTestEnv()).toBe(true)
    })
})