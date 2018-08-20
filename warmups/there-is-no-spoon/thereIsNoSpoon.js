const roomThings = [
    {
        color: 'gray',
        withLid: false,
        gallonSize: 18,
        iAm () {console.log (`I am a ${this.gallonSize} gallon tote.`)}
    },

    {
        color: 'purple',
        isFabric: true,
        hasLargeStrap: false,
        iAm () {console.log (`I am a ${this.color} duffleBag.`)},
        insideOf:  
        [
            {
                brand: "Bodycology",
                fragrance: "Sweet Love",
                boughtFrom: "WalMart",
                iAm() {console.log(`I am ${this.fragrance} by ${this.brand}, and I smell really good!`)
                }
            },
            {
                size: 'large',
                color: 'red',
                type: {
                    handType: 'clutch',
                    brooch: 'pearl',
                    isDaytime: true,
                    isNightime: true
                },
                iAm() {console.log (`I am a ${this.size}, ${this.color}, ${this.type.handType} purse!`)},
                insideOf: [
                    {
                        type: "pearl",
                        color: "ivory",
                        isCostume: true,
                        iAm() {console.log (`I am a ${this.color} ${this.type} necklace`)}
                    },

                    {
                        color: "blue",
                        madeOf: "microfiber",
                        type: "face",
                        iAm() {console.log(`I am a ${this.madeOf} towel.`)}
                    },
                ]
            },
        ]
    },

    {
        size: "medium",
        ageInMonths: 4,
        itemsMade: ['invitations', 'tshirts', 'tablecloths'],
        work() {console.log (`I am a Cricut Maker, and I have made ${this.itemsMade} so far!`)}
    },

    {
        color: "black",
        size: 4,
        dressLength: "tea length",
        iAm() {console.log (`I am a ${this.color}, size ${this.size}, ${this.dressLength} dress`)}
    },

    {
        manufacturer: "Dell",
        operatingSystem: "windows",
        color: "black",
        iAm() {console.log(`I am a ${this.color} ${this.manufacturer} computer.`)}
    },

    {
        substance: "oil",
        smell: "neutral",
        isOrganic: true,
        iAm() {(console.log(`I am a moisturizing ${this.substance} with a ${this.smell} smell.`))}
    }
]

roomThings[1].insideOf[1].insideOf[0].iAm()
