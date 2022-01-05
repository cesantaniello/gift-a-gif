import React from 'react';
import { shallow } from 'enzyme';
import {GifGrid} from '../../components/GifGrid';


describe('Pruebas en <GifGrid />', () => {
    test('Debe de mostrarse correctamente', () => {
        const category = 'One Punch';
        const wrapper = shallow(<GifGrid category={category} />);
        expect(wrapper).toMatchSnapshot();
    })

    test('Debe mostrar items cuando se cargan imágenes con useFetchGifs', () => {
        const category = 'One Punch';
        const gifs = [{
            id: 'ABC',
            url: 'https://localhost/imagen.jpg',
            title: 'Imagen'
        }];
        const wrapper = shallow(<GifGrid category={category} gifs={gifs} />);
        expect(wrapper).toMatchSnapshot();
    })
})