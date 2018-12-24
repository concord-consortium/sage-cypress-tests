class Codap {
    tableButton(){
        return (('.misc-actions.toolbar>.toolbar-button>div').contains('Tables'));
    }
    graphButton(){
        return(('.misc-actions.toolbar>.toolbar-button>div').contains('Graph'));
    }
    textButton(){
        return(('.misc-actions.toolbar>.toolbar-button>div').contains('Text'));
    }
}
export default Codap;