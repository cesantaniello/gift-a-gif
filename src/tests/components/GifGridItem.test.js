import React from 'react';
import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';

describe('Pruebas en <GifGridItem />', () => {
    
    const title = 'Titulo de prueba';
    const url = 'https://localhost/imagen.jpg';
    const wrapper = shallow( <GifGridItem  title={ title } url={ url } /> );

    test('Debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('Debe de tener un parrafo con el title', () => {
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(title);
    })

    test('Debe de tener una imagen con la url', () => {
        const img = wrapper.find('img');
        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);
    })

    test('Debe de tener la clase animate__fadeIn', () => {
        expect(wrapper.find('div').hasClass('animate__fadeIn')).toBe(true);
    })
})