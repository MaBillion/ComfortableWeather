Component({
    behaviors: [],
    properties: {
        myProperty: {
            type: Object,
            value: ''
        }
    },
    methods: {
        defaultTap() {
            this.triggerEvent('parentEvent')
        }
    }
})