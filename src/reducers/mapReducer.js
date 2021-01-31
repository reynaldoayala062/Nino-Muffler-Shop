const initialState = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
};

const mapReducer = (state = initialState, action) => {
    switch (action.type) {

        case 'SHOW_INFO':
            return {
                ...state,
                selectedPlace: action.place,
                activeMarker: action.marker,
                showingInfoWindow: true
            }
            
        default: 
        return state
    }
}

export default mapReducer