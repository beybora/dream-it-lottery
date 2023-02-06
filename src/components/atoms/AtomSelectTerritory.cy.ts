import AtomSelectTerritory from './AtomSelectTerritory.vue'
import {mount} from '@vue/test-utils'

describe('<AtomSelectTerritory />', () => {
    it('renders', () => {
        // see: https://on.cypress.io/mounting-vue
        cy.mount(AtomSelectTerritory)
    })

    it('changes the selected value when changed', () => {
        cy.mount(AtomSelectTerritory)
        cy.get('.atom-select-territory__select')
            .select('US-TX')
            .should('have.value', 'US-TX')
            .select('US-NJ')
            .should('have.value', 'US-NJ')
            .select('US-NY')
            .should('have.value', 'US-NY')
    })

    it('emits update:modelValue when select changes', () => {
        const wrapper = mount(AtomSelectTerritory, {
            propsData: {
                modelValue: 'US-NY',
            }
        })

        wrapper.find('select').setValue('US-NJ');
        expect(wrapper.emitted('update:modelValue')).to.deep.equal([
            ['US-NJ']
        ])
    })
});
