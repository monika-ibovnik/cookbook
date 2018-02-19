export function showModal(componentToDisplay){
    return({
        type: 'SHOW_MODAL',
        payload: {
            modal: true,
            component: componentToDisplay
        }
    });
}
export function hideModal(){
    return({
        type: 'HIDE_MODAL',
        payload: {
            modal: false,
            component: null
        }
    });
}
