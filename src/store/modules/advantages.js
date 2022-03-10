export default {
    state : {
        cards : [
            {
                src : "hammer",
                text : "Законно"
            },
            {
                src : "age",
                text : "До 27 лет"
            },
            {
                src : "region",
                text : "Любой регион"
            },
            {
                src : "med",
                text : "Без медкомиссиии"
            },
            {
                src : "confidential",
                text : "Конфиденциально"
            },

        ],

    },

    getters : {
        getCards(state) {
            return state.cards
        },
    }
}