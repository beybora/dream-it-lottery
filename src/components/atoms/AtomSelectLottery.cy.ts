import AtomSelectLottery from './AtomSelectLottery.vue'
import { mount } from '@vue/test-utils'


describe('<AtomSelectLottery />', () => {
    it('renders', () => {
        cy.mount(AtomSelectLottery)
    })

    it('shows all lotteries', () => {
        cy.mount(AtomSelectLottery)
        cy.get('.atom-select-lottery__select')
            .should('contain', 'PowerBall')
            .should('contain', 'MegaMillions');
    });

    it('changes selected value on change', () => {
        cy.mount(AtomSelectLottery)
        cy.get('.atom-select-lottery__select')
            .select('PowerBall')
            .should('have.value', 'PowerBall')
            .select('MegaMillions')
            .should('have.value', 'MegaMillions')
    });

    it('emits update:modelValue on select change', () => {
        const wrapper = mount(AtomSelectLottery, {
            propsData: {
                modelValue: 'Cash4Life',
            },
        });

        wrapper.find('select').setValue('Cash4Life');
        expect(wrapper.emitted('update:modelValue')).to.deep.equal([
            ['Cash4Life'],
        ]);
    });
});
