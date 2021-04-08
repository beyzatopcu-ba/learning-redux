import React from 'react';
import { Text } from 'react-native';

import { connect } from 'react-redux';

const NumberDisplay = props => {
    // mapStateToProps'tan dönen nesnedeki alanlar,
    // Bu component'e props olarak geliyor.
    return (
        <Text style={{fontSize: 100}}>{props.numberFromRedux}</Text>
    );
};

// Buraya gelen state, createReducer'ın içine verilen reducer'ın
// ilgilendiği state oluyor.
// Buradan dönen nesne, component'e props olarak gidecek.
const mapStateToProps = (state) => {
    return {
        numberFromRedux: state.number,
    };
};

// React-redux'ın connect fonksiyonu ile, 
// bu component'i redux store'a bağlıyoruz
const gelistiriciFonksiyon = connect(mapStateToProps);
const ConnectedNumberDisplay = gelistiriciFonksiyon(NumberDisplay);

// Artık bağlı component'i export ediyoruz
export default ConnectedNumberDisplay;

// Kısa yazım
// export default connect(mapStateToProps)(NumberDisplay);
