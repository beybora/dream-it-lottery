import DrawCard from './OrganismDrawCard.vue'
// @ts-ignore
import {mount, Wrapper} from '@vue/test-utils'

describe('<DrawCard />', () => {
    it('renders as Card with PowerBall', () => {
        let draw = {
            drawDate: '2022-01-01T00:00:00.000Z',
            drawnNumbers: [
                {
                    numbers: [
                        {
                            values: [1, 2, 3, 4, 5],
                        },
                        {
                            values: [6, 7],
                        },
                        {
                            values: [2],
                        },
                    ],
                },
            ],
        };

        let wrapper = mount(DrawCard, {
            propsData: {
                draw,
                lotteryId: 'PowerBall',
            },
        });

    });

    it('displays the correct drawn numbers', () => {
        let draw = {
            drawDate: '2022-01-01T00:00:00.000Z',
            drawnNumbers: [
                {
                    numbers: [
                        {
                            values: [1, 2, 3, 4, 5],
                        },
                        {
                            values: [6],
                        },
                        {
                            values: [2],
                        },
                    ],
                },
            ],
        };

        let wrapper = mount(DrawCard, {
            propsData: {
                draw,
                lotteryId: 'PowerBall',
            },
        });

        const drawnNumberElements = wrapper.findAll('.draw-card__item p');
        expect(drawnNumberElements.length).to.equal(6);
        // @ts-ignore
        expect(drawnNumberElements.at(0).text()).to.equal('1');
        // @ts-ignore
        expect(drawnNumberElements.at(5).text()).to.equal('6');
    });

    it('displays the correct formatted draw date', () => {
        let draw = {
            drawDate: '2022-05-18T00:00:00.000Z',
            drawnNumbers: [
                {
                    numbers: [
                        {
                            values: [1, 2, 3, 4, 5],
                        },
                        {
                            values: [6, 7],
                        },
                        {
                            values: [2],
                        },
                    ],
                },
            ],
        };

        let wrapper = mount(DrawCard, {
            propsData: {
                draw,
                lotteryId: 'PowerBall',
            },
        });

        const drawDateElement = wrapper.find('.draw-card__date');
        expect(drawDateElement.text()).to.equal('Wednesday, May 18, 2022');
    });
});